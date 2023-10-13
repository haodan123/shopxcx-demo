<template>
	<view class="land">
		<view class="" style="background-color: #fff;">

			<uv-tabs :current="current" :list="list1" lineColor="#76C071" @click="tapTabs"></uv-tabs>
		</view>

		<view class="content">
			<!-- v-for="item in list.slice(0,10)" -->
			<view class="content-item" v-for="item in 4" :key="item">
				<image src="@/static/bg1.jpg" mode=""></image>
				<view class="content-mid">
					<view class="content-title">
						{{'苹果树'}}
					</view>
					<view class="content-subtitle">
						{{'生长周期100天'}}
					</view>
					<view class="price">
						<!-- ￥300.00~￥500.00 -->
						{{'￥'}}1000
					</view>
				</view>
				<view class="content-right" @click="toRenzhong(item)">
					<view class="btn">
						{{'立即认种'}}
					</view>
				</view>


			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";

	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	const current = ref(0)
	const list1 = ref([{
		name: '家畜猪牛羊',
	}, {
		name: '家禽鸡鸭鱼',
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
		getList()
	}
	const getList = async () => {
		let data = {
			"yid": uni.getStorageSync('userInfo').id, //用户id
			"status": current.value //订单状态
		}
		// const res = await uni.$api.wodetudi(data)
		// list.value = res.data
	}
	const toRenzhong = (item) => {
		// 查看详情
		uni.navigateTo({
			url: `/pages/goods/pages/rzGoods/rzGoods?id=${1}`
		})

	}
</script>





<style scoped lang="scss">
	.land {
		// padding: 10px;
		height: 100vh;
		background-color: #f4f4f4
	}

	.item-top {
		width: 100%;
		height: 250px;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.content {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		gap: 10px;
		justify-content: center;
		align-items: center;
		padding: 10px;

		.content-item {
			border-radius: 10px;
			overflow: hidden;
			border: 1px solid #f4f4f4;
			background-color: #fff;
			width: 100%;
			display: flex;
			align-items: center;
			overflow: hidden;
			gap: 5px;

			image {
				width: 300rpx;
				height: 200rpx;
			}

			.content-mid {
				flex: 1;
				display: flex;
				flex-direction: column;
				height: 100%;

				.content-title {
					// padding: 0 5px 0 5px;
					width: 100%;
					text-align: left;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					-o-text-overflow: ellipsis;
				}

				.price {
					color: red;
					font-size: 12px;
				}
			}

			.content-right {}




		}
	}

	.btn {
		// width: 60%;
		width: 100rpx;
		font-size: 12px;
		margin-bottom: 5px;
		background-color: #65AC75;
		padding: 5px 10px;
		border-radius: 10px;
		text-align: center;
		color: #fff;
	}
</style>