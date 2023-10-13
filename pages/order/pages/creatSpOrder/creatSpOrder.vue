<template>
	<view class="pageOrder">

		<!--商品信息 start -->
		<view class="card-box">

			<view class="spBox">

				<view class="sp-top">
					<view class="state">
						<image src="../../../../static/gg.png" mode=""></image>
						待支付
					</view>
					<view class="time">
						<!-- 已在2023年1月20日完成 -->
						<uni-countdown @timeup="timeOut" :show-day="false" :showh="false" :second="seconds" :show-colon="false" />
						后自动取消订单
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
			</view>

		</view>
		<!-- 商品信息end -->

		<!-- 收货信息  start-->
		<view class="card-box">
			<view class="title">
				<view class="title-left">
					收货信息
				</view>
				<view class="title-right" @click="toAddress">
					<!-- 收货信息 -->
					{{addressData.name?'更换地址':'选择地址' }}
					<uni-icons type="right" size="18" color="#999"></uni-icons>
				</view>
			</view>

			<view class="address-box" v-if="addressData.name">
				<view class="address-item">
					<uni-icons type="phone" size="24" color="#51AA38"></uni-icons>
					<text>{{addressData.name}}</text>
					<text>{{addressData.mobile}}</text>
				</view>
				<view class="address-item">
					<uni-icons type="location" size="24" color="#51AA38"></uni-icons>
					<text>{{addressData.address }}{{addressData.addressName}}</text>
				</view>
			</view>
		</view>
		<!-- 收货信息  end-->

		<!-- 优惠 start-->

		<view class="card-box">
			<view class="title notbm">
				<view class="title-left">
					优惠信息
				</view>
				<view class="title-right" @click="toYouhui">
					<view slot="right-icon">

						<text style="color: red;" v-if="true">选择优惠券</text>
						<text style="color: red;" v-else>￥{{youhui.ymoney}}</text>
						<uni-icons type="right" size="18" color="#999"></uni-icons>
					</view>
				</view>
			</view>

		</view>
		<!-- 优惠end -->

		<!-- 支付信息 start -->
		<view class="card-box">
			<view class="title">
				<view class="title-left">
					总计 :<text style="color: red;">￥{{paidamount}} </text>
				</view>
			</view>
			<view class="xieyi">
				<radio-group @click="xieyiChange">
					<radio :value="1" :checked="xieyiValue" />
				</radio-group>

				已阅读并同意《<span style="color: red;" @click="toXieyi">支付协议</span>》
			</view>
		</view>
		<!-- 支付信息 end -->


		<!-- 底部栏 start -->
		<view class="toolbar">
			<view class="toolbarbtn" @click="pay">
				立即支付
			</view>
			<view class="toolbarbtn" @click="huodaoPay">
				货到付款
			</view>
		</view>
		<!-- 底部栏 end -->


		<!--地址弹窗和 服务说明弹窗 -->
		<uni-popup ref="popup" :type="popupType" style="width: 100%;" background-color="#fff">
			<coupon @useCoupon="useCoupon" v-if="popupName=='coupon'"></coupon>
			<!-- <AddressPanel @close="popup.close()" v-if="popupName=='address'"></AddressPanel> -->
			<!-- <ServicePanel @close="popup.close()" v-if="popupName=='service'"></ServicePanel> -->
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

	const popup = ref()
	const popupType = ref('bottom')
	const popupName = ref('coupon')

	const seconds = ref()

	const xieyiValue = ref(false) //协议的按钮

	// 地址数据
	const addressData = ref({
		name: '',
		mobile: '',
		addressName: '',
		address: '',
		moren: 1
	})

	// 优惠券数据
	const couponData = ref({

	})

	onShow(() => {
		uni.$once('SELECT_ADDRESS', (e) => {
			// console.log(e.addressInfo);
			addressData.value = e.addressInfo
		});
	})


	onLoad(() => {
		let datetime = new Date() //订单时间

		// console.log("datetime", datetime.getMinutes(), datetime.getSeconds())
		let date = new Date(); // 当前时间
		// console.log(date.getMinutes(), date.getSeconds())
		seconds.value = ((datetime.getMinutes() + 15) * 60 + datetime.getSeconds()) - (date
			.getMinutes() * 60 + date.getSeconds())
	})

	// 立即支付
	const pay = () => {

	}

	// 货到付款
	const huodaoPay = () => {

	}

	// 选中协议
	const xieyiChange = () => {
		xieyiValue.value = !xieyiValue.value
	}

	const toXieyi = () => {
		uni.navigateTo({
			url: '/pages/xieyi/pages/zhifu/zhifu'
		})
	}


	// 关闭弹窗
	const closePopup = () => {
		popup.value.close()
	}


	// 选中优惠券
	const useCoupon = (item) => {
		closePopup()
	}

	// 选择优惠券
	const toYouhui = () => {
		popup.value.open()
		popupType.value = 'bottom'
		popupName.value = 'coupon'
	}

	// 选择地址
	const toAddress = () => {
		uni.navigateTo({
			url: `/pages/user/pages/address/address?source=${1}`
		})
	}
	// 时间到了结束订单
	const timeOut = () => {

	}

	// 支付的金额

	const paidamount = computed(() => {
		// 实付金额
		// let price = this.rlmsArr[this.rlmsActive].price * this.rlzqAvtive // 当前总价
		console.log(price);
		let price = 100 // 实付金额
		if (couponData.value.ymoney) {
			// 如果有优惠券
			let paidamount = (Number(price)) - Number(couponData.value.ymoney) //总价钱减去优惠价钱
			if (paidamount <= 0) {
				paidamount = 0.01
			}
			// return this.roundItOff(paidamount)
			return uni.$toFixed(paidamount)
		} else {
			// 没有优惠券
			return uni.$toFixed(price)
		}
	})
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
			display: flex;
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




	.toolbar {
		position: fixed;
		bottom: 33px;
		// width: 100%;
		left: 0;
		right: 0;
		padding: 0 30px 0;
		display: flex;
		gap: 10px;

		justify-content: center;

		.toolbarbtn {
			text-align: center;
			width: 150px;
			border-radius: 20px;
			padding: 10px;
			background-color: #87BE79;
			color: #fff;
		}
	}


	// 协议
	.xieyi {
		display: flex;
		// gap: 10px;
		background-color: #F1F7FA;
	}
</style>