<template>
	<view class="myOrder">
		<view class="tabs">
			<uv-tabs :current="current" :list="list1" lineColor="#76C071" @click="tapTabs"></uv-tabs>
		</view>
		<view class="content" v-if="list.length!==0">
			<!-- @/static/vip.png -->
			<block v-for="(item,index) in list" :key="item.id">
				<view class="content-item">

					<view class="order">
						<view class="title-l">
							<image height="30px" width="30px" src="@/static/gg.png" mode=""></image>
							<text v-if="item.refund_status=='1'" style="color: red;">已退款</text>
							<text v-else
								:class="{red:item.dstatus=='3'}">{{item.dstatus=='1'?'已支付':item.dstatus=='2'?'待支付':'已超时'}}</text>

							<view class="title-xq" v-if="item.seconds">
								<uni-countdown @timeup="timeOut" :show-day="false" :showh="false" :second="item.seconds"
									:show-colon="false" />
								后自动取消订单
							</view>
							<view class="title-xq" v-else>
								已在{{item.addtime}}确认
							</view>
						</view>
						<view class="title-r" :class="item.dtype=='1'?'tddd':''">
							{{item.dtype=='1'?'土地订单':'商城服务'}}
						</view>

					</view>
					<view class="shop-box">
						<view class="shop">
							<view class="shop-left">
								<!-- 商品图片 -->

								<uv-image v-if="item.dtype=='2'" src="@/static/bg1.jpg" mode="widthFix"
									width="100px" height="100px"></uv-image>
								<!-- 土地图片 -->
								<uv-image v-else src="https://cdn.uviewui.com/uview/album/1.jpg" mode="widthFix" width="100px"
									height="100px">
								</uv-image>

							</view>
							<!-- item.dtype=='1' 为地块订单 -->
							<view class="shop-right">
								<view class="guige ">
									<view class="text-show">
										{{ item.dtype=='1'?item.dpid:item.sname }}
									</view>
									<view class="msg text-show">
										{{ item.dtype=='1'?item.subtitle1:item.subtitle }}
									</view>
									<view class="price text-show" v-if="item.dstatus=='1'">
										{{'实付款'}}: ￥{{item.paidamount || 0}}
									</view>
									<view class="price text-show" v-if="item.dstatus!='1'">
										{{'应付金额'}}: ￥{{item.payable || 0}}
									</view>
								</view>
							</view>
						</view>
						<!-- 按钮 -->
						<view class="btn-box">
							<view class="btn-left">

							</view>
							<view class="custom-style">
								<!-- 退款的按钮 -->
								<block v-if="item.dstatus=='1'">
									<uv-button size="small" @click="tuikuan(item)" v-if="item.refund_status=='3'" class="custom-style"
										type="error" text="申请退款"></uv-button>
									<uv-button size="small" v-if="item.refund_status=='0'" class="custom-style" type="warning"
										text="退款审核中"></uv-button>
									<uv-button size="small" v-if="item.refund_status=='1'" class="custom-style" type="error"
										text="已退款"></uv-button>
									<uv-button size="small" v-if="item.refund_status=='2'" class="custom-style" type="error"
										text="拒绝退款"></uv-button>
								</block>
								<!-- 支付完成的两个按钮 -->

								<uv-button size="small" v-if="item.dstatus=='1'&& item.dtype=='1'" @click="toSuYuan(item)"
									class="custom-style" type="success" text="查看溯源">
								</uv-button>
								<uv-button v-if="item.dstatus=='1'||item.dstatus=='7'" size="small" @click="toDetail(item)"
									class="custom-style" type="success" text="订单详情"></uv-button>
								<!-- 待支付的两个按钮 -->
								<uv-button size="small" @click="deleteDd(item)" v-if="item.dstatus=='2'" class="custom-style"
									type="error" text="取消订单"></uv-button>
								<uv-button size="small" v-if="item.dstatus=='2'" @click="toBuy(item)" class="custom-style" type="success"
									text="立即支付">
								</uv-button>
							</view>
						</view>

					</view>
				</view>
			</block>


		</view>

		<uv-empty  v-else mode="list" icon="https://cdn.uviewui.com/uview/empty/list.png"></uv-empty>
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

	const current = ref(0)
	const list1 = ref([{
		name: '全部',
		id: 0
	}, {
		name: '已完成',
		id: 1
	}, {
		name: '待支付',
		id: 2
	}])
	const list = ref([{
		d: 12
	}])

	onLoad((e) => {
		console.log(e);
		current.value = +e.id
		console.log(current.value);
		getList()
	})

	// 倒计时结束 刷新页面
	const timeOut = () => {
		getList()
	}
	// 点击tab
	const tapTabs = (e) => {
		current.value = e.index
		// console.log(current.value);
		getList()
	}
	// 获取数据
	const getList = async () => {
		let data = {
			"yid": uni.getStorageSync('userInfo').id, //用户id
			"dstatus": current.value //订单状态
		}
		const res = await uni.$api.wodedingdan(data)
		list.value = res.data
		list.value.forEach(item => {
			// 未支付 处理时间
			if (item.dstatus == '2') {
				let datetime = new Date(item.addtime) //订单时间

				// console.log("datetime", datetime.getMinutes(), datetime.getSeconds())
				let date = new Date(); // 当前时间
				// console.log(date.getMinutes(), date.getSeconds())
				item.seconds = ((datetime.getMinutes() + 15) * 60 + datetime.getSeconds()) - (date
					.getMinutes() * 60 + date.getSeconds())
				// console.log(item.seconds)
			}
		})
		list.value = list.value.map(item => {
			if (item.seconds && item.seconds > 0) {
				return item
			}
			return item
		})
	}
	// 去退款
	const tuikuan = (item) => {
		uni.navigateTo({
			url: `/pages/user/pages/tuikuan/tuikuan?orderno=${item.orderno}&moy=${item.paidamount}`
		})
	}
	// 跳转溯源
	const toSuYuan = (item) => {
		uni.navigateTo({
			url: `/pages/user/pages/suYuan/suYuan?sydata=${JSON.stringify(item)}`
		})
	}
	// 去支付
	const toBuy = (e) => {
		// item.dtype=='1'?'土地订单':'农资订单'
		console.log(e);
		if (e.dtype == '1') {
			// 土地
			uni.navigateTo({
				url: `/pages/user/pages/confirmOrder/confirmOrder?zhifu=${true}&shopzhifu=${JSON.stringify(e)}`
			})
		} else {
			// 农资
			uni.navigateTo({
				url: `/pages/home/pages/confirmShop/confirmShop?zhifu=${true}&shopzhifu=${JSON.stringify(e)}`
			})
		}
	}
	// 取消订单
	const deleteDd = async (item) => {
		uni.showModal({
			title: '取消订单',
			content: '你确定要取消订单吗？',
			success: async function(res) {
				// console.log(res, orderId);
				if (res.confirm) {
					// 确认取消
					// 假取消  未接入微信支付时
					// let data = {
					// 	"yid": uni.getStorageSync('userInfo').id, //用户id
					// 	"id": item.id, //订单主键
					// 	"sid": item.sid, //商品id
					// 	"hid": item.hid, //优惠券id
					// 	"num": item.num, //商品数量
					// 	"did": item.did //土地id
					// }
					// await uni.$api.quxiaodingdan(data)
					// ================================
					// 已经介入微信支付
					let data = {
						id: item.id
					}
					await uni.$api.cancel(data)
					uni.showToast({
						title: '取消订单成功'
					})
					getList()
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});
	}
	// 跳转详情
	const toDetail = (e) => {
		// e.dtype=='1'?'土地订单':'农资订单'
		if (e.dtype == '1') {
			// 土地详情
			uni.navigateTo({
				url: `/pages/person/pages/tdddxq/tdddxq?detail=${JSON.stringify(e)}`
			})
		} else {
			// 农资详情
			uni.navigateTo({
				url: `/pages/person/pages/nzddxq/nzddxq?detail=${JSON.stringify(e)}`
			})
		}
	}
</script>



<style lang="scss">
	.btn-box {
		display: flex;
		justify-content: space-between;

		.btn-left {
			width: 30%;
		}
	}

	.custom-style {
		// width: 200rpx;
		display: flex;

		gap: 10px;
	}

	.myOrder {
		background-color: #F4F4F4;
		min-height: 100vh;
	}

	.tabs {
		background-color: #fff;
	}

	.content-item {
		margin: 8px 0;
		padding: 10px;
		background-color: #fff;
		border-radius: 20px;
	}

	.order {
		// padding: 15px 15px 0;
		background-color: #fff;
		display: flex;
		gap: 8px;
		align-items: center;
		justify-content: space-between;

		.title-l {
			display: flex;
			align-items: center;

			image {
				width: 20px;
				height: 20px;
				margin-right: 5px;
			}

			color: #000;
		}

		.title-xq {
			font-size: 12px;
			color: #ccc;
			margin-left: 5px;
			display: flex;
		}

		.title-r {
			font-size: 12px;
			color: #fff;
			padding: 5px;
			border-radius: 5px;
			background-color: #52AA38;

		}

		.tddd {
			background-color: #4AA4EA;
		}
	}

	.shop-box {
		background-color: #fff;
	}

	.shop {
		padding: 10px;
		display: flex;

	}

	.shop-right {
		flex: 1;
	}

	.shop-ite {
		display: flex;
	}

	.shop image {
		// position: relative;
		// top: 10px;
		width: 100px;
	}

	.shop .guige {
		margin: 10px 15px;
	}

	.red {
		color: red;
	}

	.guige .price {
		color: red;
		margin-bottom: 0;
	}


	.msg {
		color: #aeaeae;
		margin-bottom: 10px;
	}

	.price-btn {
		margin-top: 5px;
		background-color: #51AA38;
		text-align: center;
		width: 200rpx;
		height: 70rpx;
		line-height: 70rpx;
		border-radius: 40rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		background: #51AA38;

	}

	.text-show {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		/* 显示的行数 */
		-webkit-box-orient: vertical;
	}
</style>