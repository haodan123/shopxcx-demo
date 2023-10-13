<template>
	<view class="kpPage">
		<view class="" style="background-color: #fff;">

			<uv-tabs :current="current" :list="list1" lineColor="#76C071" @click="tapTabs"></uv-tabs>
		</view>
		<view class="kp-content">
			<view class="kp-item" v-for="(item,index) in list" :key="index">
				<!-- 上面 -->
				<view class="kp-top">
					<view class="kp-top-left">
						<view v-if="current==0" @click="tapChecked(item)">
							<uni-icons v-if="item.checked" type="circle-filled" color="#76C071" size="30" />
							<uni-icons v-else type="circle" size="30" color="#999" />
						</view>
						<text>2023-02-02 15:00</text>
					</view>
					<view class="kp-top-right">
						订单:02022020202020
					</view>

				</view>
				<!-- 中间 -->
				<view class="kp-mid">
					<view class="kp-mid-left">
						<view class="imgBox" v-for="item in 3" :key="item">
							<image src="@/static/bg1.jpg" mode=""></image>
						</view>
					</view>
					<view class="kp-mid-right">
						<view class="" v-if="current==0">
							共3件商品》
						</view>
						<view class="" v-else>
							已提交
						</view>
					</view>
				</view>
				<!-- 下面 -->
				<view class="kp-btm">
					<view class="">

					</view>
					<view class="">
						共计3件商品 合计 <text style="color: red;">￥32.02</text>
					</view>
				</view>
			</view>

		</view>

		<view style="height: 100px;">

		</view>
		<!-- 底部 -->
		<view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }" v-if="current==0">
			<view class="all" @click="onChangeSelectedAll">
				<uni-icons v-if="allChecked" type="circle-filled" color="#76C071" size="30" />
				<uni-icons v-else type="circle" size="30" color="#999" />
				全选
			</view>
			<view class="info">
				<view class="">
					共计3个订单 合计 <text class="red">￥32.02</text>
				</view>
				<view class="">
					按实际开票金额为准
				</view>
			</view>

			<view class="btn">
				<uv-button @click="goKp" type="success" text="去开票"></uv-button>
			</view>

		</view>
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

	const {
		safeAreaInsets
	} = uni.getSystemInfoSync()

	const current = ref(0)
	const list1 = ref([{
		name: '待开票订单',
	}, {
		name: '已提交订单',
	}])
	const list = ref([{
		checked: false,

	}, {
		checked: false,

	}, {
		checked: false,

	}])


	onShow(() => {
		// getList()
	})

	// 选中
	const tapChecked = (item) => {
		item.checked = !item.checked
	}

	// 全选状态
	const allChecked = computed(() => {
		return list.value.length && list.value.every((v) => v.checked)
	})
	// 点击全选
	const onChangeSelectedAll = () => {
		// console.log(allChecked.value);
		// 全选状态取反
		const allChecked1 = !allChecked.value
		// console.log(allChecked1);

		list.value.forEach((item) => {
			item.checked = allChecked1
		})
	}
	// 去开票
	const goKp = ()=>{
		uni.navigateTo({
			url:`/pages/user/pages/kaipiaoAdd/kaipiaoAdd`
		})
	}


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
</script>

<style scoped lang="scss">
	.kpPage {
		background-color: #f4f4f4;
		min-height: 100vh;
	}

	.kp-content {
		padding: 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.kp-item {
		// margin-bottom: 10px;
		background-color: #fff;
		border-radius: 10px;
		padding: 5px;
		overflow: hidden;
		border: 1px solid #f4f4f4;
		font-size: 14px;
		display: flex;
		flex-direction: column;
		gap: 8px;

		.kp-top {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.kp-top-left {
				display: flex;
				align-items: center;
			}

			.kp-top-right {}
		}

		.kp-mid {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.kp-mid-left {
				display: flex;
				align-items: center;
				gap: 3px;

				.imgBox {
					width: 80px;
					height: 80px;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.kp-mid-right {}
		}

		.kp-btm {
			display: flex;
			justify-content: space-between;
		}
	}

	//底部
	.toolbar {
		position: fixed;
		left: 0;
		right: 0;
		// bottom: calc(var(--window-bottom));
		bottom: 0;
		z-index: 1;
		height: 100rpx;
		padding: 0 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1rpx solid #ededed;
		border-bottom: 1rpx solid #ededed;
		background-color: #fff;
		font-size: 14px;
	}
</style>