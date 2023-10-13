<template>
	<view class="land">
		<view class="" style="background-color: #fff;">

			<uv-tabs :current="current" :list="list1" lineColor="#76C071" @click="tapTabs"></uv-tabs>
		</view>

		<view class="land-content">
			<view class="content-item" v-for="item in list" :key="item">
				<view class="item-top">
					<image src="@/static/bg1.jpg" mode=""></image>
				</view>
				<view class="item-btm">
					<view class="btm-t">
						<view class="btm-left">
							<view class="title">
								成都开学农场辣椒种植地块
							</view>
							<view class="subtitle">
								快来认领一个垃圾哦啊地块吧
							</view>
						</view>
						<!-- 	<view class="btm-right">
							<image src="../../../static/like.png" mode=""></image>
						</view> -->
					</view>
					<view class="btm-b">
						<view class="btm-left ">
							<!-- <span class="subtitle">剩余日期:1日</span> -->
							价格: <text style="color: red;">￥1000.00</text>起
							<!-- <span>已过期</span> -->
						</view>
						<view class="btm-right">
							<uv-button type="success" @click="toWhat" :text="'立即认领'"></uv-button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";

	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	const current = ref(0)
	const list1 = ref([{
		name: '全部',
	}, {
		name: '成都开心农场',
	}])
	const list = ref([{
		d: 21
	}])

	onShow(() => {
		getList()
	})


	const tapTabs = (e) => {
		console.log(e);
		current.value = e.index
		// getList()
	}
	const getList = async () => {
		let data = {
			"yid": uni.getStorageSync('userInfo').id, //用户id
			"status": current.value //订单状态
		}
		const res = await uni.$api.wodetudi(data)
		list.value = res.data
	}
	const toWhat = () => {
			// 查看详情
			uni.navigateTo({
				url: `/pages/home/pages/tudiDetail/tudiDetail?id=${1}`
			})

	}
</script>





<style scoped lang="scss">
	.land-content {
		padding: 10px;
		height: 100vh;
		background-color: #f4f4f4
	}

	.content-item {
		margin-bottom: 10px;
		background-color: #fff;
		border-radius: 10px;
		overflow: hidden;
		border: 1px solid #f4f4f4;
	}

	.item-top {
		width: 100%;
		height: 250px;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.item-btm {
		padding: 10px;
		display: flex;
		gap: 10px;
		flex-direction: column;

		.btm-t {
			display: flex;
			justify-content: space-between;
			// margin-top: 10px;
			align-items: center;
		}

		.btm-b {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.btm-left {

			.title {
				font-size: 18px;
				color: #000;
			}

			.subtitle {
				font-size: 14px;
				color: #ccc;
			}
		}

		.btm-right {
			image {
				width: 30px;
				height: 30px;
			}
		}
	}
</style>