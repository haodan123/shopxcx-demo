<template>
	<view class="renyangtjPage">
		<view class="header">
			<view class="title">
				认养推荐
			</view>
			<view class="title-r" @click="more">
				<!-- 查看更多 -->
			</view>
		</view>
		<view class="content">
			<!-- v-for="item in list.slice(0,10)" -->
			<view class="content-item" v-for="item in 4" :key="item">
				<image src="@/static/bg1.jpg" mode=""></image>
				<view class="content-mid">
					<view class="content-title">
						{{'认养一只猪'}}
					</view>
					<view class="content-subtitle">
						{{'生长周期100天'}}
					</view>
					<view class="price">
						<!-- ￥300.00~￥500.00 -->
						{{'￥'}}1000
					</view>
				</view>
				<view class="content-right">
					<view class="btn">
						{{'立即认养'}}
					</view>
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

	const more = () => {

	}
</script>


<style lang="scss">
	.renyangtjPage {
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
		flex-direction: column;
		gap: 10px;
		justify-content: center;
		align-items: center;

		.content-item {
			background-color: #fff;
			// border: 1px solid #CCCCCD;
			// width: 48.7%;
			width: 96%;
			display: flex;
			// justify-content: center;
			align-items: center;
			// border-radius: 10px;
			overflow: hidden;
			gap: 5px;
			// padding: 5px;

			image {
				width: 300rpx;
				height: 200rpx;
			}

			.content-mid {
				flex: 1;
				display: flex;
				flex-direction: column;
				height: 100%;

				.content-title {
					// padding: 0 5px 0 5px;
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
			}

			.content-right {}




		}
	}

	.btn {
		// width: 60%;
		width: 100rpx;
		font-size: 12px;
		margin-bottom: 5px;
		background-color: #65AC75;
		padding: 5px 10px;
		border-radius: 10px;
		text-align: center;
		color: #fff;
	}
</style>