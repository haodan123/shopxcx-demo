<template>
	<view class="pagesize">
		<scroll-view scroll-y="true" class="scrollbg">

			<view class="page">
				<swiper style="height: 400rpx; width:100%">
					<swiper-item style="height: 400rpx; width:100%" v-for="(img, key) in imgUrls" :key="key">
						<image style="height: 400rpx; width:100%" :src="img" />
					</swiper-item>
				</swiper>
			</view>

			<!-- v-if="obj.xinxi.name" -->
			<view class="swiper-view">
				<uv-tabs :current="current" :list="list1" @click="tabsclick" lineColor='#1bb888'
					activeStyle="color:#1bb888;font-weight:bold" lineWidth='70px' itemStyle="width:140px;height:45px">
				</uv-tabs>
				<swiper class="swiperview" :current="current" @change="swiperchange" easing-function='easeInCubic'>
					<swiper-item class="swiperitemview">
						<scroll-view scroll-y="true" class="scrollswiper">
							<cpxx :obj="obj"> </cpxx>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiperitemview">
						<scroll-view scroll-y="true" class="scrollswiper">
							<syda :obj="obj"> </syda>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	import syda from "./components/syda.vue"
	import cpxx from "./components/cpxx"
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		ref
	} from "vue"

	const imgUrls = ref(['https://pgz-static.shidongvr.com/temp/hzy.jpg'])

	const list1 = ref([{
		name: '商品介绍',
	}, {
		name: '溯源信息',
	}])
	const current = ref(0)

	const obj = ref({})

	onShow(() => {
		// getRequests()
	})

	const getRequests = async () => {
		let data = {
			id:1
		}
		const res = await uni.$post(`/sy/jg`, data) //加工
		obj.value = res.data
		obj.value.jid = obj.value.dk.lng
		obj.value.wid = obj.value.dk.lat
		// 经纬度
		// console.log(this.obj);
	}


	const tabsclick = (res) => {
		current.value = res.index
	}
	const swiperchange = (res) => {

		current.value = res.detail.current
	}
</script>



<style lang="scss">
	.pagesize {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.scrollbg {
		width: 100%;
		height: 100%;
	}



	.swiper-view {
		width: 90%;
		height: 90%;
		margin: 0 auto;
		padding: 10px;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.swiperview {
		width: 100%;
		height: 100%;
	}

	.swiperitemview {
		width: 100%;
		height: 2100px;
		// background: #007a3b;
	}

	.scrollswiper {
		width: 100%;
		height: 100%;
	}
</style>