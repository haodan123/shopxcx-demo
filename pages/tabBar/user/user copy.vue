<template>
	<view class="page-person">
		<!-- 头部start -->
		<view class="top-box">
			<view class="box">
				<view class="vip">
					<image :src="userInfo.headsculpture || defaultAvatarUrl" mode="widthFix"></image>
					<view class="info">
						<view v-if="userInfo.nickname">{{userInfo.nickname || '请登录'}}</view>
						<view class="mt5" v-else @click="open">
							请登录
						</view>

					</view>
				</view>
				<view class="vipbox" v-if="userInfo.nickname">
					<uni-icons @click="toSetting" type="gear" size="40"></uni-icons>
				</view>

			</view>
			<!-- 额度start -->
			<view class="edu-box" v-if="userInfo.nickname">
				<view class="edu-item">
					<p>0.00</p>
					<p>钱包余额</p>
				</view>
				<view class="edu-item">
					<p>0.00</p>
					<p>欠款</p>
				</view>
				<view class="edu-item">
					<p>5张</p>
					<p>我的优惠券</p>
				</view>
			</view>
			<!-- 额度end -->
		</view>
		<!-- 头部end -->

		<view class="order">
			<view class="title dd-box">
				<view class="">
					我的订单
				</view>
			</view>
			<view class="content">
				<view @click="tapMyOrder(item)" v-for="item in MyOrders" :key="item.index">
					<image :src="item.imgurl" mode="widthFix"></image>
					<view>
						{{item.name}}
					</view>
				</view>

			</view>
		</view>
		<view class="order">
			<view class="title">常用工具</view>
			<view class="content2">
				<view @click="tapMyInformation(item)" v-for="item in MyInformation" :key="item.index">
					<image :src="item.imgurl" mode="widthFix"></image>
					<view>
						{{item.name}}
					</view>
				</view>
			</view>

		</view>

		<view class="logout-box" v-if="userInfo.nickname">
			<uv-button @click="Logout" type="success" text="退出登录"></uv-button>

		</view>
		<uni-popup ref="popup" type="bottom" backgroundColor="#fff">
			<view class="popobox">
				<button class="ensure" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信授权登录</button>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		onMounted,
		ref
	} from "vue";
	import nologin from '@/static/user/nologin.png'

	// 未登录图片
	const defaultAvatarUrl = nologin
	// 订单数组
	const MyOrders = [{
			index: 0,
			name: '全部订单',
			imgurl: '/static/user/pay1.png',
			pageurl: '/pages/user/pages/myOrder/myOrder?id=0'
		},
		{
			index: 1,
			name: '待支付',
			imgurl: '/static/user/pay1.png',
			pageurl: '/pages/user/pages/myOrder/myOrder?id=2'
		},
		{
			index: 2,
			name: '配送中',
			imgurl: '/static/user/pay.png',
			pageurl: '/pages/user/pages/myOrder/myOrder?id=1'
		},
		{
			index: 3,
			name: '已完成',
			imgurl: '/static/user/pay.png',
			pageurl: '/pages/user/pages/myOrder/myOrder?id=1'
		}
	]

	// 工具数组
	const MyInformation = [{
			index: 0,
			name: '购物车',
			imgurl: '/static/tabbar/gouwuche-a.png',
			pageurl: '/pages/global/monitor/monitor'
		},
		{
			index: 1,
			name: '收藏夹',
			imgurl: '/static/user/location.png',
			pageurl: '/pages/user/pages/address/address'
		},
		{
			index: 2,
			name: '地址',
			imgurl: '/static/user/location.png',
			pageurl: '/pages/user/pages/address/address'
		},
		{
			index: 3,
			name: '优惠券',
			imgurl: '/static/user/card.png',
			pageurl: '/pages/user/pages/youhuiquan/youhuiquan'
		},
		{
			index: 4,
			name: '我要开票',
			imgurl: '/static/user/car.png',
			pageurl: '/pages/user/pages/kaipiao/kaipiao'
		},
		{
			index: 5,
			name: '常用抬头',
			imgurl: '/static/user/car.png',
			pageurl: '/pages/user/pages/taitou/taitou'
		},
		{
			index: 6,
			name: '用户协议',
			imgurl: '/static/user/car.png',
			pageurl: '/pages/xieyi/pages/index/index'
		}, {
			index: 7,
			name: '联系客服',
			imgurl: '/static/user/car.png',
			pageurl: '/pages/user/pages/collection/collection'
		},
	]

	// 点击订单
	const tapMyOrder = (item) => {
		uni.navigateTo({
			url: item.pageurl
		})
	}

	// 点击工具
	const tapMyInformation = (item) => {
		uni.navigateTo({
			url: item.pageurl
		})
	}

	// 去设置个人信息
	const toSetting = () => {
		// if (!uni.getStorageSync('userInfo').id) {
		// 	uni.showToast({
		// 		title: '登录后查看',
		// 		icon: 'none'
		// 	})

		// 	return
		// }
		uni.navigateTo({
			url: '/pages/user/pages/setting/setting'
		})
	}

	// 用户信息
	const userInfo = ref({
		nickname: '利长远'
	})

	// 弹窗dom
	const popup = ref(null)

	onShow(() => {


	})
	onMounted(() => {
		// 登录后解开注释
		// if (!uni.getStorageSync('userInfo').id) {
		// 	open()
		// 	// loginid = null
		// }
		// userInfo.value = uni.getStorageSync('userInfo')
	})



	// 退出登录
	const Logout = () => {
		uni.showModal({
			title: '提示',
			content: '你确定要退出登录吗？',
			success: function(res) {
				if (res.confirm) {
					uni.removeStorageSync('userInfo')
					userInfo.value = {}
					// that.showToast({
					// 	'退出登录成功'
					// })
					uni.showToast({
						title: '退出登录成功' || '',
						icon: 'none'
					});

					// uni.removeStorageSync('userInfo')
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});
	}


	// 关闭弹窗
	const close = () => {
		popup.value.close()
		// this.show = false
	}
	// 打开弹窗
	const open = () => {
		// this.show = true
		popup.value.open()
	}
</script>

<style scoped lang="scss">
	.page-person {
		background-color: #F5F5F5;
		min-height: 100vh;
	}

	.top-box {
		padding: 20px;
		border-radius: 15px;
		margin: 5px;
		background: #fff;
	}

	.edu-box {
		margin-top: 10px;
		display: flex;
		justify-content: space-around;

		.edu-item {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
	}

	.box {
		/* margin: 20px; */

		display: flex;
		/* flex-direction: column; */
		justify-content: space-between;
		font-size: 30rpx;


		/* justify-content: end; */
	}


	.vip {
		/* padding: 20px; */
		display: flex;

	}

	.vip image {
		width: 70px;
		height: 70px;
		border-radius: 35px;
	}

	.info {
		display: flex;
		flex-direction: column;
		margin-left: 15px;
		justify-content: center;

		font-weight: bold;
	}

	.amount {
		margin-top: 10px;
	}

	.vipbox {
		/* 	width: 100%;
	margin-top: 5px;
	margin-left: 85px;
	display: flex;
	flex-direction: column; */
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.mt5 {
		margin-top: 5px;
	}

	.vipbox-li {
		display: flex;
		flex-direction: row;
		font-weight: bold;
		align-items: center;

	}

	.vipbox-bottom {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.vipimg {
		position: absolute;
		width: 50px;
		right: 20px;
	}

	.vipbox-bottom>view {
		font-weight: bold;
	}

	.order {
		margin: 20px;
		padding: 20px;
		background-color: #fff;
		border-radius: 15px;
	}

	.order .title {
		margin-bottom: 15px;
	}

	.order .content,
	.order .contents {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.order .content>view,
	.order .contents>view {
		/* width: 30%; */
		flex: 1;
		text-align: center;
		font-size: 12px;
	}

	.content2 {
		display: flex;
		flex-wrap: wrap;
	}

	.content2>view {
		width: 25%;
		text-align: center;
		font-size: 12px;
		margin-bottom: 20rpx;
	}

	.dancontent {
		display: flex;
		font-size: 12px;
		margin-bottom: 10px;
		text-align: center;
	}

	.order image {
		width: 30px;
	}

	.contents {
		margin-bottom: 30px !important;
	}

	.dd-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.dd-box-r {
		display: flex;
		font-size: 12px;
	}


	.logout-box {
		width: 150px;
		margin: 0 auto;
		margin-top: 10px;
	}

	.popobox {
		width: 100vw;
		padding: 10px;
		/* border-radius: 10px; */
		background-color: #fff
	}

	.ensure {
		width: 80%;
		height: 80rpx;
		background: #07C160;
		color: #FFFFFF;
		margin: 0 auto;
		line-height: 80rpx;
	}
</style>