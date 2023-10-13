<template>
	<view class="content_list">
		<view class="" style="text-align: center;background: #fff;">
			使用优惠券
		</view>
		<scroll-view scroll-y="true" class="scroll_view_style">
			<cards @toUse="toUseyh" :List="cardsList"></cards>
		</scroll-view>
	</view>
</template>

<script setup>
	import cards from "@/components/cards/cards.vue"
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		ref
	} from "vue";

	const emit = defineEmits(['useCoupon'])
	const props = defineProps({
		money: {
			type: Number | String,
			defined: 0
		}
	})

	// 使用优惠券
	const toUseyh = (item) => {
		emit('useCoupon', item)
	}

	onShow(() => {

	})
	const cardsList = ref([{}, {}])
	const getData = async () => {
		let data = {
			// "yid": uni.getStorageSync('userInfo').id, //用户id
			// "jine": jine, //订单金额
			// "type": "1" //订单类型  1 土地 2 农资
		}
		// const res = await uni.$api.keyongyouhuiquan(data)
		// crads.value = res.data
	}
</script>

<style scoped lang="scss">
	.content_list {
		height: 760rpx;
		padding: 10px;
		overflow-x: hidden;
		background-color: #f4f4f4;

		.scroll_view_style {
			height: 100%;
		}
	}
</style>