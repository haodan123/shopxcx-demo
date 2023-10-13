<template>
	<view class='xieyiPage'>
		<uni-card margin='10px 0' padding="10px 0" v-for="(item,index) in xyList" :key="index">
			<view class="xieyi-item">
				<view class="xieyi-left">
					{{item.name}}
				</view>
				<view class="xieyi-right" @click="toUrl(item.pageUrl)">
					查看<uni-icons type="arrow-right" color="red" size="20"></uni-icons>

				</view>
			</view>
		</uni-card>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	const xyList = [{
		pageUrl: '/pages/xieyi/pages/shouhou/shouhou',
		name:'售后协议'
	},{
		pageUrl: '/pages/xieyi/pages/zhifu/zhifu',
		name:'支付协议'
	},{
		pageUrl: '/pages/xieyi/pages/renling/renling',
		name:'认领协议'
	},{
		pageUrl: '/pages/xieyi/pages/renzhong/renzhong',
		name:'认种协议'
	},{
		pageUrl: '/pages/xieyi/pages/renyang/renyang',
		name:'认养协议'
	}]
	
	const toUrl=(url)=>{
		uni.navigateTo({
			url:url
		})
	}
</script>

<style scoped lang="scss">
	.xieyiPage {
		height: 100vh;
		background-color: #F4F4F4;
	}
	.xieyi-item{
		display: flex;
		justify-content: space-between;
		.xieyi-right{
			color: red;
			display: flex;
			align-items: center;
		}
	}
</style>