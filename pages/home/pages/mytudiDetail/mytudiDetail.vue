<template>
	<view class="landDetail">
		<!-- 轮播图 -->
		<view class="slideshow">
			<win-slideshow :schoolers="bannerList"></win-slideshow>
		</view>
		<!-- 介绍 -->
		<uni-card margin='10px 0' padding="10px 0">
			<view class="farm">
				<view class="farm-box">
					<view class="farm-xq">
						<text class="">
							{{xqObj.dpid}}
						</text>
						<!-- 	<text style="margin-left: 10px;" class="">
							3m
						</text> -->
					</view>
					<view class="" style="color: #51AA38;" @click="goSuyuan">
						查看溯源
					</view>
				</view>
				<view class="farm-content">
					{{xqObj.subtitle}}
				</view>
				<view class="farm-loaction" @click="openMap">
					<uni-icons type="location" size="18" color="#999"></uni-icons>
					<text>{{xqObj.address}}</text>
				</view>
			</view>
		</uni-card>

		<!-- 剩余日期 -->
		<uni-card margin='10px 0' padding="10px 0">
			<text style="color: #000;font-weight: 700;margin-right: 10px;">剩余日期</text>
			<text style="color: #ccc;">{{days}}天</text>
		</uni-card>

		<!-- 物联网监控数据 -->
		<uni-card margin='10px 0' padding="10px 0">
			<view class="title-box">
				<view class="title-left">
					物联网监控数据
				</view>
				<view class="title-right" @click="toJiankong">
					查看监控
					<uni-icons type="right" size="18" color="#999"></uni-icons>
				</view>
			</view>

			<chuanganqi></chuanganqi>

		</uni-card>

	</view>
</template>


<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		ref
	} from "vue";
	import bg from "@/static/bg1.jpg"
	const bannerList = ref([
		bg,
		bg,
		bg,
		bg
	])
	const xqObj = ref({})
	const days = ref(1)
	const jwd = ref({})
	const sydata = ref({}) //园区数据 用来查看溯源
	onLoad((e) => {
		let tddata = {}
		tddata = JSON.parse(e.tddata)
		let data = {
			"id": tddata.did, //主键
			"massifid": tddata.qid //区域id
		}
		sydata.value = tddata
		days.value = tddata.days
		// getList(data)
	})

	// 去溯源页面
	const goSuyuan = () => {
		console.log(sydata.value);
		uni.navigateTo({
			url: `/pages/suyuan/pages/tdsy/tdsy?sydata=${JSON.stringify(sydata.value)}`
		})
	}
	const getList = async (data) => {

		const res = await uni.$api.xiangqing(data)
		// 存储数据
		xqObj.value = res.data

		// 经纬度
		if (xqObj.value.wzxx) {
			var arr = xqObj.value.wzxx.split(",");

			// 使用 map() 方法将数组中的每个元素转换为数字
			jwd.value = arr.map(function(item) {
				return parseFloat(item);
			});
		}
		//处理录播图数据
		let banner = res.data.rotation.split(",")
		const bannerbox = banner.map(item => {
			// return imageUrl .value+ item
			return item
		})
		bannerList.value = bannerbox



	}
	// 查看监控
	// const toJiankong=()=> {
	// 	uni.navigateTo({
	// 		url: '/pages/home/pages/zhiBo/zhiBo'
	// 	})
	// }
	const openMap = () => {
		// 使用 uni.openLocation 方法打开地图
		uni.openLocation({
			latitude: jwd.value[1], // 维度
			// latitude: 104.55, // 维度
			longitude: jwd.value[0], // 经度
			// longitude: 30.41, // 经度
			scale: 18, // 地图缩放级别，范围 5-18
			// name: '目标位置', // 位置名称
			address: xqObj.value.address, // 位置的详细地址
		});
	}
</script>

<script>
	export default {

		onLoad(e) {

		},
		methods: {

		},
	}
</script>




<style scoped lang="scss">
	.landDetail {
		background-color: #f4f4f4;
		min-height: 100vh;
	}

	.slideshow {
		height: 375rpx;
	}

	.farm {
		display: flex;
		gap: 10px;
		flex-direction: column;
	}

	.farm-box {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.farm-xq {
			color: #000;
			font-size: 16px;

			.pf {
				margin: 10px 0;
			}
		}

		.farm-content {
			margin: 5px 0;
			color: #ccc;
		}
	}

	.title-box {
		margin-bottom: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.title-left {
			font-size: 16px;
			color: #000;
		}

	}
</style>