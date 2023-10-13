<template>
	<view class="myOrder">
		<view class="tabs">
			<uv-tabs :current="current" :list="list1" lineColor="#76C071" @click="tapTabs"></uv-tabs>
		</view>
		<view class="orderList" v-if="list.length>0">

			<view class="orderItem" v-for="(item,index) in 4" :key="index" @click.stop="goDetail(item)">
				<!-- 顶部 start-->
				<view class="itemHeader">
					<view class="time">
						2023-10-11 14:16:16
					</view>
					<view class="orderNum">
						订单:202030302302030230
					</view>
				</view>
				<!-- 顶部 end-->
				<!-- 中间部分 start -->

				<!-- 电商订单中间 -->
				<view class="itemMid-ds" v-if="index%2==0">
					<view class="imgBox">
						<image src="../../../../static/gg.png" class="img" v-for="item in 3" :key="item" mode=""></image>
					</view>
					<view class="price">
						已完成
					</view>
				</view>
				<!-- 认养订单中间 -->
				<view class="itemMid-ry" v-else>
					<view class="imgBox">
						<image src="../../../../static/gg.png" class="img" mode=""></image>
					</view>
					
					<view class="info">
						<view class="title">
							认养一头牛
						</view>
						<view class="subtitle">
							好牛子
						</view>
						<view class="price">
							共1件商品  合计 <text class="red">￥23.02</text>
						</view>
					</view>
					<view class="money">
						待支付 15.00
					</view>
				</view>

				<!-- 中间部分 end -->

				<!-- 下部分 start-->
				<view class="itemBtm">
					<view class="btm-left">
						<text v-if="index==0">电商订单</text>
						<text v-if="index==1">认养订单</text>
						<text v-if="index!==1&&index!==0">认种订单</text>
					</view>
					<view class="btm-right">
						<view class="over" v-if="index%2==0">
							<text>共3件商品 </text>
							<text>合计 </text>
							<text class="red">￥23.02</text>
						</view>
						<view class="noOver" v-else>
							<view class="noOverBtn" @click="toPay(1)">
								立即支付
							</view>
						</view>
					</view>
				</view>
				<!-- 下部分 end-->
			</view>
		</view>

		<uv-empty v-else mode="list" icon="https://cdn.uviewui.com/uview/empty/list.png"></uv-empty>
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
		name: '待支付',
		id: 1
	}, {
		name: '已支付',
		id: 2
	}, {
		name: '配送中',
		id: 3
	}, {
		name: '已完成',
		id: 4
	}])
	const list = ref([{}])

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
	
	// 去详情页面
	const goDetail = (item)=>{
		uni.navigateTo({
			url: `/pages/order/pages/orderDetail/orderDetail?id=${2}`
		})
	}
	
	// 去支付
	const toPay = (item)=>{
		if(true){
			uni.navigateTo({
				url: `/pages/order/pages/creatTdOrder/creatTdOrder?id=${1}`
			})
		}else{
			
		}
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
					// await uni.$api.cancel(data)
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
	.myOrder {
		// background-color: #F4F4F4;
		min-height: 100vh;
	}

	.tabs {
		background-color: #fff;
	}

	// 订单列表 start
	.orderList {
		padding: 10px;


	}


	.orderItem {
		margin-bottom: 10px;
		border-radius: 10px;
		padding: 10px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		gap: 10px;

	}

	.itemHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.time {}

		.orderNum {}
	}

	//电商 订单中间
	.itemMid-ds {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.imgBox {
			display: flex;
			gap: 5px;

			.img {
				width: 80px;
				height: 80px;
			}
		}
		.price{
			
		}
	}

	//认种 订单中间
	.itemMid-ry {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;

		.imgBox {
			.img {
				width: 80px;
				height: 80px;
			}
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 10px;
			color: #000;

			.title {
				color: #000;
			}

			.subtitle {
				color: #ccc;
			}

			.price {}
		}
		
		.money{
			
		}

	}

	.itemBtm {
		align-items: center;
		display: flex;
		justify-content: space-between;

		.btm-left {}

		.btm-right {

			//已完成的订单
			.over {}

			// 未完成的订单
			.noOver {
				.noOverBtn {
					background-color: #87BE79;
					padding: 3px 10px;
					color: #fff;
					border-radius: 15px;
				}
			}
		}
	}

	// 订单列表 end


	.text-show {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		/* 显示的行数 */
		-webkit-box-orient: vertical;
	}
</style>