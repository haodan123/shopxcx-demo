<template>
	<view class="pageview">
		<view class="title">
			退款金额：
			<view style="color: #fc9a39;">
				￥{{moy||''}}
			</view>

		</view>
		<view class="bodybox">
			<view class="title">
				退款原因
			</view>
			<view style="margin-left: 20px;margin-top: 10px;">
				<uni-data-checkbox selectedColor="#fc9a39" selectedTextColor="#333" icon="left" mode="list" wrap v-model="radio" :localdata="range" @change="change"></uni-data-checkbox>
			</view>

			<textarea v-if="radio==4" v-model="fromdata.reason" class="textareatk" placeholder="请填写退款原因"
				maxlength="50"></textarea>
		</view>

		<button class="pagebt" @click="tuikuan">提交</button>
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
	const moy = ref()
	const fromdata = ref({
		reason: null,
		orderNo: null
	})

	const radio = ref(null)
	const range = ref([{
		"value": 0,
		"text": "不想要了"
	}, {
		"value": 1,
		"text": "拍错/拍多了"
	}, {
		"value": 2,
		"text": "地址信息填写错误"
	}, {
		"value": 3,
		"text": "少用/没用/错用优惠"
	}, {
		"value": 4,
		"text": "其他"
	}])

	onLoad((opt) => {
		moy.value = opt.moy

		fromdata.value.orderNo = opt.orderno
	})

	const change = (e) => {
		console.log(e ,radio.value);
		// if (radio.value == 4) {
		// 	fromdata.value.reason = ''
		// } else {
		// 	fromdata.value.reason = e.detail.data.text
		// }

	}
	// 我的订单
	const tuikuan = async () => {
		if (!fromdata.value.reason) {
			uni.showToast({
				title: '请填写退款原因',
				icon: 'none'
			})
			return
		}
		const data = {
			"orderNo": fromdata.value.orderNo, //订单编号
			"reason": fromdata.value.reason //退款原因
		}
		try {
			await uni.$api.tuikuan(data)
			// 
			uni.showToast({
				title: "申请退款成功"
			})
			// this.$api.prePage().getList();
			setTimeout(() => {
				uni.navigateBack({
					delta: 1
				})
			}, 800)


		} catch (e) {
			//TODO handle the exception
		}

	}
</script>



<style>
	page {
		background: white;
	}

	.pageview {
		margin: 15px;
	}

	.title {
		font-weight: bold;
		display: flex;
		margin-top: 15px;
		font-size: 17px;
	}

	.bodybox {}

	.textareatk {
		background: #ececec80;
		width: 300px;
		height: 100px;
		border-radius: 10px;
		padding: 15px 10px;
		margin: 10px auto;
	}

	.pagebt {
		width: 92%;
		background: #76C071;
		color: white;
		position: fixed;
		bottom: 20px;
	}
</style>