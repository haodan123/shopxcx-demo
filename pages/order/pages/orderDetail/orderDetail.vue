<template>
	<view class="pageOrder">
		<!-- 商品信息 -->
		<view class="card-box">

			<view class="spBox">

				<view class="sp-top">
					<view class="state">
						<image src="../../../../static/gg.png" mode=""></image>
						已完成
					</view>
					<view class="time">
						已在2023年1月20日完成
					</view>

				</view>
				<view class="sp-content">

					<view class="image">
						<image src="../../../../static/gg.png" class="img" mode=""></image>
					</view>

					<view class="content-info">

						<view class="title1">
							吴京花生油
						</view>
						<view class="subtitle">
							副标题
						</view>
						<view class="prive">
							实付款:￥23.02
						</view>
					</view>
				</view>
				<view class="sp-btm">
					<view class=""></view>
					<view class="sy-btn" @click="toSuyuan(1)">
						查看溯源
					</view>
				</view>
			</view>

		</view>
		<!-- 收货信息 -->
		<view class="card-box">
			<view class="title">
				<view class="title-left">
					收货信息
				</view>
			</view>

			<view class="address-box">
				<view class="address-item">
					<uni-icons type="phone" size="24" color="#51AA38"></uni-icons>
					<text>名称</text>
					<text>{{'13333333333'}}</text>
				</view>
				<view class="address-item">
					<uni-icons type="location" size="24" color="#51AA38"></uni-icons>
					<text>{{'地址'}}</text>
				</view>
			</view>
		</view>

		<!-- 订单信息 -->
		<view class="card-box">
			<view class="title">
				<view class="title-left">
					订单信息
				</view>
			</view>

			<view class="orderxx">

				<view class="xx-item">
					<view class="">
						订单编号
					</view>
					<view class="">
						23232323232323
					</view>
				</view>
				<view class="xx-item">
					<view class="">
						订单类型
					</view>
					<view class="">
						23232323232323
					</view>
				</view>
				<view class="xx-item">
					<view class="">
						优惠券
					</view>
					<view class="">
						23232323232323
					</view>
				</view>
				<view class="xx-item">
					<view class="">
						优惠金额
					</view>
					<view class="">
						23232323232323
					</view>
				</view>
				<view class="xx-item">
					<view class="">
						实付款
					</view>
					<view class="">
						23232323232323
					</view>
				</view>
				<view class="xx-item">
					<view class="">
						应付款
					</view>
					<view class="">
						23232323232323
					</view>
				</view>
				<view class="xx-item">
					<view class="">
						创建时间
					</view>
					<view class="">
						23232323232323
					</view>
				</view>
				<view class="xx-item">
					<view class="">
						微信支付
					</view>
					<view class="">
						23232323232323
					</view>
				</view>
				<view class="xx-item">
					<view class="">
						支付流水号
					</view>
					<view class="">
						23232323232323
					</view>
				</view>
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
		ref
	} from "vue";

	// 查看溯源
	const toSuyuan = (item) => {
		if (true) {
			uni.navigateTo({
				url: '/pages/suyuan/pages/spsy/spsy'
			})
		} else {
			uni.navigateTo({
				url: '/pages/suyuan/pages/tdsy/tdsy'
			})
		}



	}
</script>

<style scoped lang="scss">
	.pageOrder {
		padding: 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	// 商品信息 start

	.spBox {
		display: flex;
		flex-direction: column;
		gap: 10xp;
	}

	.sp-top {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.state {
			display: flex;
			align-items: center;

			image {
				width: 20px;
				height: 20px;
			}
		}

		.time {
			color: #ccc;
		}
	}

	.sp-content {
		margin: 10px 0;
		display: flex;
		gap: 10px;
		align-items: center;

		.image {
			color: #000;
			width: 80px;
			height: 80px;

			.img {
				width: 100%;
				height: 100%;
				border-radius: 8px;
			}
		}

		.content-info {
			display: flex;
			flex-direction: column;
			gap: 10px;


		}

		.title1 {}

		.subtitle {
			color: #ccc;
		}

		.price {}
	}

	.sp-btm {
		display: flex;
		justify-content: space-between;

		.sy-btn {
			background-color: #87BE79;
			padding: 3px 10px;
			color: #fff;
			border-radius: 15px;
		}
	}

	// 商品信息 end



	// 订单详情 start
	.orderxx {
		padding: 0 5px;
		display: flex;
		flex-direction: column;
		gap: 10px;

		.xx-item {
			display: flex;
			justify-content: space-between;
		}
	}

	// 订单详情 end
	// 地址 start
	.address-box {
		display: flex;
		flex-direction: column;
		gap: 10px;

		.address-item {
			display: flex;
			align-items: center;
			gap: 10px;
		}
	}

	// 地址 end
</style>