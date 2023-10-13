<template>
	<view class="homePage">
		<!-- 轮播图 -->
		<swiper class="banner" :indicator-dots="true" autoplay="true" interval="2000" duration="500">
			<swiper-item v-for="(item,index) in bannerList" :key="index">
				<image class="swiper-item-img" :src="item" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<!-- <chuanganqi></chuanganqi> -->
		<!-- 首页navbar -->
		<view class="navbar">
			<navBar></navBar>
		</view>
		<!-- 土地推荐 -->
		<view class="landtj">
			<landtj></landtj>
		</view>
		<!-- 认养推荐 -->
		<view class="renyangtj">
			<renyangtj></renyangtj>
		</view>
		<!-- 认种推荐 -->
		<view class="renzhongtj">
			<renzhongtj></renzhongtj>
		</view>
		
	</view>
</template>

<script setup>
	import navBar from "@/pages/tabBar/shop/components/navbar.vue"
	import landtj from "@/pages/tabBar/shop/components/landtj.vue"
	import renyangtj from "@/pages/tabBar/shop/components/renyangtj.vue"
	// import renzhongtj from "@/pages/tabBar/home/components/renzhongtj.vue"
	import renzhongtj from "./components/renzhongtj.vue"
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		ref
	} from "vue";
	import bg from "@/static/bg1.jpg"
	const bannerList = ref([bg, bg])
</script>

<style scoped lang="scss">
	.homePage {
		background-color: #F4F4F4;
		min-height: 100vh;
		display: flex;
		gap: 10px;
		flex-direction: column;
	}

	// 轮播图start
	.banner {
		width: 100%;
		// height: 300rpx;
		height: 400rpx;
	}

	.swiper-item-img {
		width: 100%;
		height: 100%;
	}

	// 轮播图end
</style>