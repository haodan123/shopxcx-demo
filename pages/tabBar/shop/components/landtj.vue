<template>
	<view class="landtjPage">
		<view class="header">
			<view class="title">
				土地推荐
			</view>
			<view class="title-r" @click="more">
				<!-- 查看更多 -->
			</view>
		</view>
		<view class="content">
			<!-- v-for="item in list.slice(0,10)" -->
			<view class="content-item" v-for="item in 4" :key="item">
				<image src="@/static/bg1.jpg" mode=""></image>
				<view class="content-title">
					{{'大豆土地'}}
				</view>
				<view class="price">
					<!-- ￥300.00~￥500.00 -->
					{{'￥'}}1000
				</view>
				<view class="btn">
					<!-- 立即认领 -->
					{{'立即认领'}}
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	
	const more = ()=>{
		
	}
</script>


<style lang="scss">
	.landtjPage {
		background-color: #fff;
		padding: 5px;
		// margin: 10px 0;
	}

	.header {
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		padding: 5px 0;

		.title {
			font-weight: 700;
			color: #000;
		}

		.title-r {
			color: red;
		}
	}

	.content {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;

		.content-item {
			background-color: #fff;
			border: 1px solid #CCCCCD;
			// width: 48.7%;
			width: 48%;
			display: flex;
			flex-direction: column;
			// justify-content: center;
			align-items: center;
			border-radius: 10px;
			overflow: hidden;
			gap: 5px;
			// padding: 5px;

			image {
				width: 100%;
				height: 300rpx;
			}

			.content-title {
				padding: 0 5px 0 5px;
				width: 100%;
				text-align: left;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				-o-text-overflow: ellipsis;
			}

			.price {
				color: red;
				font-size: 12px;
			}

			.btn {
				width: 60%;
				font-size: 12px;
				margin-bottom: 5px;
				background-color: #65AC75;
				padding: 5px 10px;
				border-radius: 25px;
				text-align: center;
				color: #fff;
			}
		}
	}
</style>