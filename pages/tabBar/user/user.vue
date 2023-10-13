<template>
	<view class="page-person">
		<!-- 头部start -->
		<view class="top-box" style="background-image: url('/static/user/bctop.png');">
			<view class="box">
				<view class="vip">
					<image :src="userInfo.headsculpture || defaultAvatarUrl" mode="widthFix"></image>
					<view class="info">
						<view v-if="userInfo.nickname">{{userInfo.nickname || '请登录'}}</view>
						<view class="mt5 username" v-else @click="open">
							请登录
						</view>
						<view class="phone">
							13333333333
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

		<!-- 	<view class="order">
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
		</view> -->

		<view class="section">
			<!-- 我的订单 start -->
			<view class="card-box">
				<view class="title">
					<view class="title-left">
						我的订单
					</view>
					<view class="title-right">
						<!-- 查看更多 <uni-icons type="right" size="15"></uni-icons> -->

					</view>
				</view>
				<view class="myorder">
					<view class="myorder-item" @click="tapMyOrder(item)" v-for="(item,index) in MyOrders" :key="index">
						<view class="image">
							<image class="img" :src="item.imgurl" mode=""></image>
						</view>
						<text class="text">{{item.name}}</text>
					</view>
				</view>
			</view>

			<!-- 我的订单end -->
			<view class="card-box">
				<view class="title">
					<view class="title-left">
						常用工具
					</view>
					<view class="title-right">
						查看更多 <uni-icons type="right" size="15"></uni-icons>

					</view>
				</view>
				<view class="myutils">
					<view class="myorder-item" @click="tapMyInformation(item)" v-for="item in MyInformation" :key="item.index">
						<view class="image">
							<image :src="item.imgurl" mode=""></image>
						</view>
						<text class="text">{{item.name}}</text>
					</view>

					<button class="contact myorder-item" open-type="contact">

						<view class="image">
							<image src="/static/user/gj-kf.png" mode=""></image>
						</view>
						<text class="text">联系售后</text>
					</button>

				</view>
			</view>


			<view class="logout-box" v-if="userInfo.nickname">
				<uv-button @click="Logout" type="success" text="退出登录"></uv-button>

			</view>
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
			imgurl: '/static/user/all.png',
			pageurl: '/pages/order/pages/myOrder/myOrder?id=0'
		},
		{
			index: 1,
			name: '待支付',
			imgurl: '/static/user/dzf.png',
			pageurl: '/pages/order/pages/myOrder/myOrder?id=1'
		},
		{
			index: 2,
			name: '已支付',
			imgurl: '/static/user/yzf.png',
			pageurl: '/pages/order/pages/myOrder/myOrder?id=2'
		},
		{
			index: 3,
			name: '配送中',
			imgurl: '/static/user/psz.png',
			pageurl: '/pages/order/pages/myOrder/myOrder?id=3'
		},
		{
			index: 4,
			name: '已完成',
			imgurl: '/static/user/ywc.png',
			pageurl: '/pages/order/pages/myOrder/myOrder?id=4'
		}
	]

	// 工具数组
	const MyInformation = [{
			index: 0,
			name: '购物车',
			imgurl: '/static/user/gj-gwc.png',
			pageurl: '/pages/global/monitor/monitor'
		},
		{
			index: 1,
			name: '收藏夹',
			imgurl: '/static/user/gj-sc.png',
			pageurl: '/pages/user/pages/shoucang/shoucang'
		},
		{
			index: 2,
			name: '地址',
			imgurl: '/static/user/gj-dz.png',
			pageurl: '/pages/user/pages/address/address'
		},
		{
			index: 3,
			name: '优惠券',
			imgurl: '/static/user/gj-yhq.png',
			pageurl: '/pages/user/pages/myCoupon/myCoupon'
		},
		{
			index: 4,
			name: '我要开票',
			imgurl: '/static/user/gj-kp.png',
			pageurl: '/pages/user/pages/kaipiao/kaipiao'
		},
		{
			index: 5,
			name: '常用抬头',
			imgurl: '/static/user/gj-tt.png',
			pageurl: '/pages/user/pages/taitou/taitou'
		},
		{
			index: 6,
			name: '用户协议',
			imgurl: '/static/user/gj-yh.png',
			pageurl: '/pages/xieyi/pages/index/index'
		},
		{
			index: 7,
			name: '领券',
			imgurl: '/static/user/gj-lq.png',
			pageurl: '/pages/user/pages/youhuiquan/youhuiquan'
		}, {
			index: 8,
			name: '我的土地',
			imgurl: '/static/user/gj-rl.png',
			pageurl: '/pages/home/pages/mytudi/mytudi'
		},
		{
			index: 9,
			name: '我的认养',
			imgurl: '/static/user/gj-ry.png',
			pageurl: '/pages/home/pages/myrenyang/myrenyang'
		},
		{
			index: 10,
			name: '我的认种',
			imgurl: '/static/user/gj-rz.png',
			pageurl: '/pages/home/pages/myrenzhong/myrenzhong'
		},
		// {
		// 	index: 11,
		// 	name: '联系客服',
		// 	imgurl: '/static/user/gj-kf.png',
		// 	pageurl: '/pages/user/pages/collection/collection'
		// },
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
		// background-color: #F5F5F5;
		min-height: 100vh;
	}

	.section {
		padding: 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.top-box {
		padding: 20px;
		// border-radius: 15px;
		// margin: 5px;
		// background: #A8DFF6;
		// background: url('~@/static/user/bctop.png') center no-repeat;
		// background-image: url(~@/static/user/bctop.png);
	}

	.edu-box {
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 10px;

		.edu-item {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			border-right: 1px solid #fff;
			height: 70px;

			&:last-child {
				border: none;
			}
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
		// flex-direction: column;
		// gap: 10px;

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

		.username {}

		.phone {
			margin-top: 3px;
			color: #5a5858;
			font-size: 14px;
		}
	}

	.amount {
		margin-top: 10px;
	}

	.vipbox {

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

	// 我的订单 start
	.myorder {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 10px;

		.myorder-item {
			// width: calc(100% / 5);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			// margin-bottom: 10px;

			.image {
				border-radius: 50%;

				// width: 50px;
				// height: 50px;
				width: 40px;
				height: 40px;

				.img {
					// border-radius: 50%;
					width: 100%;
					height: 100%;
				}

				// image {
				// 	border-radius: 50%;
				// 	width: 100%;
				// 	height: 100%;
				// }
			}

			.text {
				margin-top: 5px;
				text-align: center;
				font-size: 12px;
			}
		}
	}

	//我的订单 end

	// 常用工具 start
	.myutils {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;

		.myorder-item {
			// width: calc(100% / 5);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			// margin-bottom: 10px;

			.image {
				border-radius: 50%;

				width: 50px;
				height: 50px;

				image {
					border-radius: 50%;
					width: 100%;
					height: 100%;
				}
			}

			.text {
				margin-top: 5px;
				text-align: center;
				font-size: 12px;
			}
		}
	}

	// 常用工具 end





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