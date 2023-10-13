<template>
	<view class="details">
		<!-- 轮播图 -->
		<view class="slideshow">
			<win-slideshow :schoolers="bannerList"></win-slideshow>
		</view>
		<!-- 详情 -->
		<uni-card margin='10px 0' padding="10px 0">
			<view class="content-top">
				<view class="tLeft">
					<view class="">
						<text>认养一只猪</text>
						<!-- <text class="ml" style="color: #ccc;">起</text> -->
					</view>
					<view class="xq">
						<text>每一个被认领的猪猪都会挂上耳标</text>
						<!-- <text class="ml">({{shopObj.marea }})</text> -->
					</view>
				</view>
				<view class="tRight">
					<!-- <image src="/static/like.png" mode=""></image> -->
					<!-- <image src="/static/dislike.png" mode=""></image> -->

				</view>
			</view>
			<view class="content-mid">
				{{shopObj.subtitle}}
			</view>
			<view class="content-btm">
				<view class="">
					生长周期:365天
				</view>
				<view class="">
					剩余周期:20天
				</view>
			</view>

		</uni-card>



		<!-- 详细流程 -->
		<uni-card margin='10px 0' padding="10px 0">
			<view class="title-box">
				<view class="title-left">
					详细流程
				</view>
			</view>
			<bctos-rich-text :nodes="shopObj.detailed"></bctos-rich-text>

			<!-- 	<view class="" v-html="'商品详情来啦'">
				
			</view> -->
		</uni-card>
		
		<!-- 认养说明 -->
		<uni-card margin='10px 0' padding="10px 0">
			<view class="title-box">
				<view class="title-left">
					认养说明
				</view>
			</view>
			<bctos-rich-text :nodes="shopObj.detailed"></bctos-rich-text>
		
			<!-- 	<view class="" v-html="'商品详情来啦'">
				
			</view> -->
		</uni-card>
		
		
		<!-- 认养收获 -->
		<uni-card margin='10px 0' padding="10px 0">
			<view class="title-box">
				<view class="title-left">
					认养收获
				</view>
			</view>
			<bctos-rich-text :nodes="shopObj.detailed"></bctos-rich-text>
		
			<!-- 	<view class="" v-html="'商品详情来啦'">
				
			</view> -->
		</uni-card>


	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import bg from "@/static/bg1.jpg"
	import {
		ref
	} from "vue";
	const shopid = ref('')
	const bannerList = ref([
		bg, bg, bg, bg, bg
	])
	const shopObj = ref({})
	const num = ref(1) //购买的数量
	const phone = ref() //园区手机号

	onLoad(({
		id
	}) => {
		shopid.value = id

		// console.log('富文本', this.shopObj.detailed);
	})

	onShow(() => {
		getData()
	})



	const getData = async () => {
		let data = {
			id: shopid.value
		}
		const res = await uni.$api.shangpinxiangqing(data)
		shopObj.value = res.data[0]
		// 	let banner = shopObj.value.rotation.split(",")
		// 	const bannerbox = banner.map(item => {
		// 		return imageUrl .value+ item
		// 	})
		// 	bannerList .value= bannerbox
	}
</script>


<style lang="scss">
	.details {
		min-height: 100vh;
		background-color: #f4f4f4;
		padding-bottom: 110rpx;
	}

	.slideshow {
		height: 600rpx;
	}

	.content-btm {
		// width: 100%;
		padding: 5px;
		border: 1px solid #ccc;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}

	.content-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 16px;

		.tLeft {
			.ml {
				margin-left: 10px;
			}

			color: #000;

			.xq {
				margin: 10px 0 0 0;
				color: #000;
				font-weight: 700;
			}
		}

		.tRight {
			width: 50rpx;
			height: 50rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.content-mid {
		color: #ccc;
		margin: 10px 0;
	}

	// .content-btm {
	// 	display: flex;
	// 	justify-content: space-between;
	// 	align-items: center;
	// }

	.title-box {
		margin-bottom: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.title-left {
			font-size: 16px;
			color: #000;
		}

	}

	// 认领模式
	.rlms-box {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 10px;

		.rlms-item {
			text-align: center;
			border-radius: 10px;
			flex: 1;
			padding: 10px 5px;
			background-color: #f4f4f4;

			.title {
				font-size: 16px;
				color: #000;
			}

			.price {
				font-size: 14px;
				color: #51AA38;
			}

			.content {
				font-size: 14px;
				color: #ccc;
			}
		}

		// 选中的认领模式
		.rlms-active {
			background-color: #66ff7e;

			.content {
				color: #fff;
			}
		}
	}
</style>