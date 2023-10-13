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
					<view class="xq">
						<text>认养一只猪</text>
						<!-- <text class="ml" style="color: #ccc;">起</text> -->
					</view>
					<view class="">
						<!-- <text>每一个被认领的猪猪都会挂上耳标</text> -->
						<!-- <text class="ml">({{shopData.marea }})</text> -->
					</view>
				</view>
				<view class="tRight">
					<!-- <image src="/static/like.png" mode=""></image> -->
					<!-- <image src="/static/dislike.png" mode=""></image> -->

				</view>
			</view>
			<view class="content-mid">
				{{shopData.subtitle||'每一个被认领的猪猪都会挂上耳标'}}
			</view>
			
			<view class="price red">
				 ￥100.20
			</view>
			<view class="content-btm">
				<view class="">
					生长周期:365天
				</view>
				<view class="">
					库存:20
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
			<bctos-rich-text :nodes="shopData.detailed"></bctos-rich-text>

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
			<bctos-rich-text :nodes="shopData.detailed"></bctos-rich-text>
		
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
			<bctos-rich-text :nodes="shopData.detailed"></bctos-rich-text>
		
			
		</uni-card>


		<!-- 下面的导航栏 -->
		<goodNav type="ny"  @buy="buy" text="立即认养"></goodNav>

	</view>
</template>

<script setup>
	import goodNav from '@/components/goodNav/goodNav.vue'
	
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
		'/static/gg.png'
	])
	const shopData = ref({})
	// const phone = ref() //园区手机号

	onLoad(({
		id
	}) => {
		shopid.value = id

		// console.log('富文本', this.shopData.detailed);
	})

	onShow(() => {
		getData()
	})



	const getData = async () => {
		let data = {
			id: shopid.value
		}
		// const res = await uni.$api.shangpinxiangqing(data)
		// shopData.value = res.data[0]
		// 	let banner = shopData.value.rotation.split(",")
		// 	const bannerbox = banner.map(item => {
		// 		return imageUrl .value+ item
		// 	})
		// 	bannerList .value= bannerbox
	}
	
	// 立即购买
	const buy = () => {
		console.log('sssss');
		// if (!uni.getStorageSync('userInfo').id) {
		// 	uni.showToast({
		// 		title: '登录后查看',
		// 		icon: 'none'
		// 	})
		// 	setTimeout(() => {
		// 		uni.switchTab({
		// 			url: '/pages/tabBar/user/user'
		// 		})
		// 	}, 500)
		// 	return
		// }
		// console.log(JSON.stringify(shopData.value));
		shopData.value.detailed = ''
		uni.navigateTo({
			url: `/pages/order/pages/creatRyOrder/creatRyOrder?shop=${JSON.stringify(shopData.value)}`
		})
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
	.price{
		margin-bottom: 10px;
		font-size: 16px;
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

</style>