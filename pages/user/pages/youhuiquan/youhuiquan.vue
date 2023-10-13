<template>
	<view class="mycoupon">
		<view class="" style="background-color: #fff;">
			<uv-tabs :list="list1" lineColor="#76C071" @click="tapTabs"></uv-tabs>
		</view>
		<cards :List="list"></cards>

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
	const current = ref('')

	const list1 = ref([{
		name: '全部',
		id: ''
	}, {
		name: '未使用',
		id: 1
	}, {
		name: '已使用',
		id: 2
	}, {
		name: '已失效',
		id: 3
	}])
	const list = ref([1,2,3])

	onShow(() => {
		getList()
	})

	const getList = async () => {
		let data = {
			"yid": uni.getStorageSync('userInfo').id, //用户id
			status: current.value //1 未使用 2 已使用 3已失效 
		}
		// const res = await uni.$api.wodeyouhuiquan(data)
		// list.value= res.data
	}
	const tapTabs = (e) => {
		console.log(e);
		current.value = e.id
		getList()
	}
</script>

<style scoped lang="scss">
	.mycoupon {
		background-color: #f4f4f4;
		min-height: 100vh;
	}
</style>