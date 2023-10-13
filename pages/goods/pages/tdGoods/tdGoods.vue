<template>
	<view class="landDetail">
		<!-- 轮播图 -->
		<view class="slideshow">
			<win-slideshow :schoolers="bannerList"></win-slideshow>
		</view>
		<!-- 介绍 -->
		<uni-card margin='10px 0' padding="10px 0">
			<view class="content-top">
				<view class="tLeft">
					<view class="">
						<text style="color: red;">￥{{shopData.freedom||0}}</text>
						<text class="ml" style="color: #ccc;">起</text>
					</view>
					<view class="xq">
						<text>{{shopData.dpid||'暂无'}}</text>
						<text class="ml">{{shopData.marea }}m²</text>
					</view>
				</view>
				<view class="tRight">
					<!-- <image src="/static/like.png" mode=""></image> -->
					<!-- <image src="/static/dislike.png" mode=""></image> -->

				</view>
			</view>
			<view class="content-mid">
				{{shopData.subtitle||'暂无'}}
			</view>
			<view class="content-btm">
				<view class="b-left">
					<uni-icons type="location" size="18" color="#999"></uni-icons>
					<text>{{shopData.address||'暂无'}}</text>
				</view>
				<view class="" style="color:#51AA38 ;" @click="openMap">
					查看位置
				</view>
			</view>
		</uni-card>

		<!-- 租赁周期 -->
		<uni-card margin='10px 0' padding="10px 0">
		<!-- 	<uv-cell :border='false' title="租赁周期" isLink @click="opendialog" :value="year">
			</uv-cell> -->
			
			<view class="title-box">
				<view class="title-left">
					租赁周期
				</view>
				<view class="title-right" @click="opendialog">
					{{year}}
					<uni-icons type="right" size="18" color="#999"></uni-icons>
				</view>
			</view>
		</uni-card>

		<!-- 租赁模式 -->
		<uni-card margin='10px 0' padding="10px 0">
			<view class="title-box">
				<view class="title-left">
					租赁模式
				</view>
				<view class="title-right" @click="seemore">
					了解更多
					<uni-icons type="right" size="18" color="#999"></uni-icons>
				</view>
			</view>

			<view class="rlms-box">
				<view @click="rlmsActive=index" :class="{'rlms-active': rlmsActive===index}" class="rlms-item"
					v-for="(item,index) in rlmsArr" :key="index">
					<view class="title">
						{{item.title}}
					</view>
					<view class="price">
						￥{{item.price}}
					</view>
					<view class="content" v-html="item.text">
						<!-- {{item.text}} -->
					</view>
				</view>
			</view>

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


		<!-- 土地详情 -->
		<uni-card margin='10px 0' padding="10px 0">
			<view class="title-box">
				<view class="title-left">
					土地详情
				</view>
			</view>
			<bctos-rich-text :nodes="shopData.detailed"></bctos-rich-text>


		</uni-card>
		
		<view class="" style="height: 100px;">
			
		</view>
		
		<!-- 下面的导航栏 -->
		<goodNav type="ny"  @buy="buy" text="立即认领"></goodNav>
		

		<!-- 认领周期弹窗 -->
		<uni-popup ref="popup" :type="popupType">
			<uni-popup-dialog v-if="popupName=='rlzq'" mode="input" title="认领周期" message="请选择你要认领的周期" :duration="2000"
				:before-close="true" @close="close" @confirm="close">
				<!-- @change="confirm" -->
				<view class="anniu">
					<uv-radio-group v-model="rlzqAvtive" placement="column">
						<uv-radio :customStyle="{marginBottom: '8px'}" v-for="(item, index) in rlzqArr" :key="index"
							:label="item.text" :name="item.value">
							<!-- @change="radioChange" -->
						</uv-radio>
					</uv-radio-group>
				</view>

			</uni-popup-dialog>

			<uni-popup-dialog v-if="popupName=='rlms'" mode="input" title="认领模式详情" :duration="2000" :before-close="true"
				@close="close" @confirm="close">
				<view class="content_list">
					<scroll-view scroll-y="true" class="scroll_view_style">
						<bctos-rich-text :nodes="rmlsxq.detailed"></bctos-rich-text>
					</scroll-view>
				</view>

			</uni-popup-dialog>
		</uni-popup>

	</view>
</template>


<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		computed,
		ref
	} from "vue";
	const bannerList = ref([
		'/static/gg.png'
	])
	const shopData = ref({})
	const days = ref(1)
	const jwd = ref({})
	const sydata = ref({}) //园区数据 用来查看溯源
	onLoad((e) => {
		// let tddata = {}
		// tddata = JSON.parse(e.tddata)
		// let data = {
		// 	"id": tddata.did, //主键
		// 	"massifid": tddata.qid //区域id
		// }
		// sydata.value = tddata
		// days.value = tddata.days
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
		shopData.value = res.data

		// 经纬度
		if (shopData.value.wzxx) {
			var arr = shopData.value.wzxx.split(",");

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


	const popupType = ref('center') //弹窗类型
	const popupName = ref('rlzq') //判断那个弹窗  rlms  rlzq

	const year = computed(() => {

		const res = rlzqArr.value.filter(item => {
			return item.value === rlzqAvtive.value
		})
		return res[0].text

	})
	// 弹窗
	const popup = ref()
	const rlzqAvtive = ref(1) //选中的认领周期
	const rlzqArr = ref([{ //认领周期
			value: 1,
			text: '一年'
		},
		{
			value: 2,
			text: '两年'
		},
		{
			value: 3,
			text: '三年'
		},
		{
			value: 4,
			text: '四年'
		},
		{
			value: 5,
			text: '五年'
		}
	])
	const rmlsxq = ref({}) //认领模式详情
	const rlmsActive = ref(0) //选中的认领模式
	const rlmsArr = ref([ //认领模式
		{
			title: '全托管',
			value: 0,
			price: 5000.00,
			text: '农场提供3中种子种植,包采摘,包配送到家'
		},
		{
			title: '全托管',
			value: 0,
			price: 5000.00,
			text: '农场提供3中种子种植,包采摘,包配送到家'
		},
		{
			title: '全托管',
			value: 0,
			price: 5000.00,
			text: '农场提供3中种子种植,包采摘,包配送到家'
		}
	])
	// 打开弹窗
	const open = () => {
		popup.value.open()
	}
	// 关闭周期弹窗
	const close = () => {
		// let rolesobject = this.rolesarray[this.fromdata.roles]
		// this.tologin(rolesobject.dtype, rolesobject.name, rolesobject.qyid, rolesobject.qyname)
		popup.value.close()
	}

	// 认领周期
	const opendialog = () => {
		popupName.value = 'rlzq'
		popupType.value = 'center'
		open()
	}
	// 认领模式查看详情
	const seemore = async () => {
		popupName.value = 'rlms'
		popupType.value = 'dialog'
		open()
		// const res = await uni.$api.seemore()
		// this.rmlsxq = res.data[0]
	}

	// 获取认领模式
	const getRlms = async () => {
		let data = {
			"id": this.idObj.id, //主键
		}
		// const res = await uni.$api.peitao(data)
		// 给认领模式赋值
		// this.rlmsArr = res.data

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
			address: shopData.value.address, // 位置的详细地址
		});
	}
	
	
	// 立即购买
	const buy = () => {
		console.log('sssss');
		// if (!uni.getStorageSync('userInfo').id) {
		// 	uni.showToast({
		// 		title: '登录后查看',
		// 		icon: 'none'
		// 	})
		// 	setTimeout(() => {
		// 		uni.switchTab({
		// 			url: '/pages/tabBar/user/user'
		// 		})
		// 	}, 500)
		// 	return
		// }
		// console.log(JSON.stringify(shopData.value));
		shopData.value.detailed = ''
		uni.navigateTo({
			url: `/pages/order/pages/creatTdOrder/creatTdOrder?shop=${JSON.stringify(shopData.value)}`
		})
	}
</script>






<style scoped lang="scss">
	.landDetail {
		background-color: #f4f4f4;
		min-height: 100vh;
	}

	.slideshow {
		height: 600rpx;
	}

	.anniu {
		width: 30%;
		margin: 0 auto;
	}
	.content_list {
		height: 760rpx;
		padding: 10px;
		overflow-x: hidden;
	
		.scroll_view_style {
			height: 100%;
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

	.content-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 16px;

		.tLeft {
			.ml {
				margin-left: 10px;
			}

			color: #000;

			.xq {
				margin: 10px 0 0 0;
				color: #000;
				font-weight: 700;
			}
		}

		.tRight {
			width: 50rpx;
			height: 50rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.content-mid {
		color: #ccc;
		margin: 10px 0;
	}

	.content-btm {
		display: flex;
		justify-content: space-between;
		align-items: center;
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



	// 认领模式
	.rlms-box {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 10px;

		.rlms-item {
			text-align: center;
			border-radius: 10px;
			flex: 1;
			padding: 10px 5px;
			background-color: #f4f4f4;
			min-height: 130px;

			.title {
				font-size: 16px;
				color: #000;
			}

			.price {
				font-size: 14px;
				color: #51AA38;
			}

			.content {
				font-size: 14px;
				color: #ccc;
			}
		}

		// 选中的认领模式
		.rlms-active {
			background-color: #66ff7e;

			.content {
				color: #fff;
			}
		}
	}
</style>