<template>
	<view class="pageview">
		<view class="cpxx-view">
			<view class="cpxx-item">
				<image src="@/pages/suyuan/static/icon/chanpin.png"></image>
				<view class="text1">商品名称</view>
				<!-- <view class="text2">{{obj.sp.spname||'暂无'}}</view> -->
				<view class="text2">{{'暂无'}}</view>
			</view>
			<view class="cpxx-item">
				<image src="@/pages/suyuan/static/icon/riqi.png"></image>
				<view class="text1">商品质量</view>
				<!-- <view class="text2">{{obj.sp.zl||'暂无'}}</view> -->
				<view class="text2">{{'暂无'}}</view>
			</view>
			<view class="cpxx-item">
				<image src="@/pages/suyuan/static/icon/riqi.png"></image>
				<view class="text1">重量</view>
				<!-- <view class="text2">{{obj.sp.spweight||'暂无'}}</view> -->
				<view class="text2">{{'暂无'}}</view>
			</view>
		</view>
		<view class="loation-view">
			<image src="@/pages/suyuan/static/icon/weizhi.png"></image>
			<view class="loation-text">企业名称</view>
			<!-- <view class="loation-adress">{{obj.qy.qyname||'暂无'}}</view> -->
			<view class="loation-adress">{{'暂无'}}</view>
		</view>
		<view class="loation-view">
			<image src="@/pages/suyuan/static/icon/weizhi.png"></image>
			<view class="loation-text">园区位置</view>
			<!-- <view class="loation-adress">{{obj.qy.qyaddress||'暂无'}} </view> -->
			<view class="loation-adress">{{'暂无'}} </view>
		</view>

		<view class="view-top">
			<view class="view-name">企业介绍</view>
			<view class="view-xuxian"></view>
			<image class="view-xiala" src="@/pages/suyuan/static/icon/xialaanniu.png"></image>
		</view>
		<!-- <rich-text class="scqy-view" :nodes="obj.qy.qyintroduce"></rich-text> -->
		<rich-text class="scqy-view" :nodes="'介绍'"></rich-text>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	const props = defineProps({
		obj: {
			type: Object,
			default: () => {}
		}
	})
</script>




<style lang="scss">
	.pageview {
		font-family: 'UniDreamLED';

		.cpxx-view {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			justify-content: space-around;
			align-items: center;
			margin: 10px 0 5px;


			.cpxx-item {
				min-height: 127px;
				width: 100px;
				padding: 10px;
				background: rgba(#efefef, 0.5);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-radius: 8px;

				image {
					width: 40rpx;
					height: 40rpx;
					padding: 10px;
					background: #dbf4ec;
					border-radius: 50%;
				}

				.text1 {
					font-size: 12px;
					color: #919191;
					margin-top: 5px;
				}

				.text2 {
					margin-top: 5px;
					font-size: 12px;
					color: #000000;
					font-weight: 600;
				}
			}
		}


		.loation-view {
			width: 100%;
			background: rgba(#efefef, 0.5);
			padding: 10px;
			display: flex;
			flex-direction: row;
			// justify-content: start;
			align-items: center;
			margin-top: 10px;

			image {
				width: 40rpx;
				height: 40rpx;
				padding: 10px;
				background: #dbf4ec;
				border-radius: 50%;
			}

			.loation-text {
				// width: 50px;
				width: auto;
				// height: 30px;
				// height: 20px;
				padding: 5px;
				text-align: center;
				color: white;
				font-size: 13px;
				background: #1ab888;
				border-radius: 4px;
				margin-left: 10px;
			}

			.loation-adress {
				flex: 1;
				margin: 0 10px 0 10px;
				padding-right: 5px;
				font-size: 13px;
				color: #000000;
				font-weight: 600;
			}
		}
	}


	.scqy-view {
		width: 100%;
		background: rgba(#efefef, 0.5);
		border-radius: 8px;

		.scqy-inview {
			margin: 10px;
			padding: 5px 0;
		}
	}


	.view-top {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 15px 0;
		padding: 0 10px;

		.view-name {
			// height: 20px;
			// height: 36px;
			padding: 8px 13px;
			font-size: 15px;
			font-weight: 400;
			background: #1ab888;
			color: #FFF;
			border-radius: 8px;
		}

		.view-xuxian {
			flex: 1;
			border: 1px dashed #1ab888;
		}

		.view-xiala {
			width: 15px;
			height: 15px;
			padding: 5px;
			background: #1ab888;
			border-radius: 50%;
			border: 5px solid #d2ebe5;
		}
	}


	uni-rich-text image {
		max-width: 100% !important;
	}
</style>