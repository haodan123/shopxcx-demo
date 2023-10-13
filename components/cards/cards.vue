<template>
	<view class="main">
		<view class="card" v-for="(item,index) in List" :key="index">
			<view class="card-left">
				<view class="card-price">
					<view class="money">
						￥{{item.ymoney|| '20'}}
					</view>
					<view class="use-money" v-if="item.conditions=='0'">
						{{item.conditions||'无门槛'}}
					</view>
					<view class="use-money" v-else>

						满{{item.conditions}}可用
					</view>
				</view>
				<view class="card-vip">
					<view class="title">
						{{item.yname||'暂无'}}
					</view>
					<view class="lqyh">
						{{item.addtime}} ~ {{item.validity||'2023-0202~2024-02-02'}} 有效
					</view>
					<view class="content" style="width: auto;">
						<view class="" v-if="item.ytype=='1'">
							{{'土地优惠'}}
						</view>
						<view class="" v-else>
							{{'农资优惠'}}
						</view>
						<view class="">
							<!-- 1 未使用 2 已使用 3已失效 4 删除 -->
							<u-button v-if="item.status=='1'" @click="toUse" type="success" text="立即使用"></u-button>
							<!-- 确认订单使用 -->
							<u-button v-if="item.status=='5'" @click="toUsehqy(item)" type="success" text="立即使用"></u-button>
							<u-button v-if="item.status=='6'" disabled type="success" text="不可使用"></u-button>
							<u-button v-if="item.status=='2'" disabled type="success" text="已使用"></u-button>
							<u-button v-if="item.status=='3'" disabled type="success" text="已失效"></u-button>

							<u-button @click="linqu(item.id)" v-if="item.status=='0'" type="success" text="立即领取">
							</u-button>
							<u-button v-if="item.status=='4'" disabled type="success" text="已领取"></u-button>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view v-if="List.length == 0">
			<uv-empty mode="list" icon="https://cdn.uviewui.com/uview/empty/list.png"></uv-empty>

		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'

	const props = defineProps({
		List: {
			type: Array,
			default: () => []
		}
	})

	onShow(() => {
		// console.log('优惠券');
	})

	// 立即使用
	const toUse = () => {

		// uni.navigateTo({
		// 	url: '/pages/home/pages/recommendedLand/recommendedLand'
		// })
	}
	const toUsehqy = (item) => {
		this.$emit('toUse', item)
	}
	// 立即领取
	const linqu = async (id) => {

		let data = {
			"yid": uni.getStorageSync('userInfo').id, //用户id
			"hid": id //优惠券id
		}
		this.$emit('linqu', data)

	}
	// 返回上一级
	const openback = () => {
		uni.navigateBack(1)
	}
</script>



<style lang='scss'>
	.card {
		display: flex;
		justify-content: space-between;
		/* margin: 10px 0; */
		/* background-color: #fff; */

		padding: 5px 5px;
		/* font-size: 14px; */
	}

	.card-left {
		width: 100%;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		border-radius: 10px;
		border: 1px solid #87BE79;
		background-color: #fff;
	}

	.card>view {
		display: flex;
		color: #000;
		/* margin: 10px 0; */
	}

	.card-price {
		width: 93px;
		text-align: center;
		border-right: 1px dashed #87BE79;
		padding: 10px 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.money {
		/* position: relative;
		left: 12px; */
		font-size: 22px;
		/* font-weight: 700; */
		color: #df2b41;
		margin-bottom: 10px;
	}

	.card-vip {
		padding: 10px 30px;
		width: 100%;
	}

	.title {
		font-size: 16px;
		margin: 0 0 3px;
		padding-bottom: 5px;
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.btn {
		/* padding: 5px 15px; */
		background-color: #51AA38;
		color: #fff;
	}

	.lqyh {
		font-size: 12px;
		color: #ccc;
		margin-bottom: 8px;
	}
</style>