<template>
	<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
		:circular="circular">
		<swiper-item v-for="(item, index) in schoolers" :key="index">
			<!-- <view style="" class="swiper-item uni-bg-red"> -->
			<image class="swiper-img" :src="item" mode=""></image>
			<!-- </view> -->
		</swiper-item>
	</swiper>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const props = defineProps({
		schoolers: {
			type: Array,
			required: true
		}
	})


	const indicatorDots = ref(true)
	const autoplay = ref(true)
	const interval = ref(2000)
	const duration = ref(500)
	const circular = ref(true)
	const changeIndicatorDots = (e) => {
		indicatorDots.value = !indicatorDots.value
	}
	const changeAutoplay = (e) => {
		autoplay.value = !autoplay.value
	}
	const intervalChange = (e) => {
		interval.value = e.target.value
	}
	const durationChange = (e) => {
		duration.value = e.target.value
	}
</script>


<style scoped>
	swiper {
		height: 100%;
	}

	.swiper-img {
		width: 100%;
		height: 100%;
	}
</style>