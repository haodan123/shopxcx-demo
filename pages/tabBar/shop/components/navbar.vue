<template>
	<view class="navbar-page">
		<view class="navbar-box">
			<view @click="toRoute(item.pageurl)"  class="navbar-item" v-for="(item,index) in Mynavbar" :key="index">
				<image :src="item.imgurl" alt="" ></image>
				<view>{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script setup >
import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import bg from "@/static/bg1.jpg"
	const  Mynavbar=[{
			index: 0,
			name: '我的土地',
			imgurl: bg,
			pageurl: '/pages/home/pages/mytudi/mytudi'
		},
		{
			index: 1,
			name: '我的认养',
			imgurl: bg,
			pageurl: '/pages/home/pages/myrenyang/myrenyang'
		},
		{
			index: 2,
			name: '我的认种',
			imgurl: bg,
			pageurl: '/pages/home/pages/myrenzhong/myrenzhong'
		},
		{
			index: 3,
			name: '活动优惠',
			imgurl: bg,
			pageurl: '/pages/home/pages/huodongyh/huodongyh'
		},
		{
			index: 4,
			name: '我要认领',
			imgurl: bg,
			pageurl: '/pages/home/pages/tudi/tudi'
		},
		{
			index: 5,
			name: '我要认养',
			imgurl: bg,
			pageurl: '/pages/home/pages/renyang/renyang'
		},
		{
			index: 6,
			name: '我要认种',
			imgurl: bg,
			pageurl: '/pages/home/pages/renzhong/renzhong'
		},
		{
			index: 7,
			name: '环境查看',
			imgurl: bg,
			pageurl: '/pages/home/pages/huanjingck/huanjingck'
		},
	]
	
	const toRoute = (url)=>{
		uni.navigateTo({
			url:url
		})
	}
</script>


<style lang="scss" scoped>
	.navbar-page {
		background-color: #fff;
		padding: 15px 10px;
		margin: 0 5px;
		border-radius: 5px;
	}

	.navbar-box {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.navbar-item {
		width: 22%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 12px;

		image {
			height: 40px;
			width: 40px;
		}

	}
</style>
