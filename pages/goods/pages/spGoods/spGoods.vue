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
						<text style="color: red;">￥{{shopData.danjia||'暂无'}}/{{shopData.danwei||'暂无'}}</text>
						<!-- <text class="ml" style="color: #ccc;">起</text> -->
					</view>
					<view class="xq">
						<text>{{shopData.sname||'暂无'}}</text>
						<!-- <text class="ml">({{shopData.marea }})</text> -->
					</view>
				</view>
				<view class="tRight">
					<!-- 查看溯源 -->
				</view>
			</view>
			<view class="content-mid">
				{{shopData.subtitle||'暂无'}}
			</view>
			<view class="content-top">
				<view class="tLeft">
					<view class="content-mid">
						库存:{{100}}
					</view>
				</view>
				<view class="tRight2">
					<uni-number-box class="shop-num" :integer='false' :min="1" :max="100" v-model="count" />
				</view>
			</view>
			
			<view class="lookSy">
				<view class="">
					
				</view>
				<view class="sy-btn" @click="toSpSy(1)">
					查看溯源
				</view>
			</view>

		</uni-card>



		<!-- 商品详情 -->
		<uni-card margin='10px 0' padding="10px 0">
			<view class="title-box">
				<view class="title-left">
					商品详情
				</view>
			</view>
			<bctos-rich-text :nodes="shopData.detailed||'暂无'"></bctos-rich-text>

			<!-- 	<view class="" v-html="'商品详情来啦'">
				
			</view> -->
		</uni-card>


		<!-- 下面的导航栏 -->
		<goodNav type="sp" @cart="cart" @buy="buy" text="立即购买"></goodNav>

	</view>
</template>

<script setup>
	import goodNav from '@/components/goodNav/goodNav.vue'

	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		ref
	} from "vue";
	const bannerList = ref(['/static/gg.png'])
	const shopid = ref('')

	const shopData = ref({})
	const count = ref(1)

	onLoad(({
		id
	}) => {
		shopid.value = id
	})

	onShow(() => {
		getData()
		// console.log('下边距', uni.$safeBtm);

	})

	const getData = async () => {
		let data = {
			id: shopid.value
		}
		// const res = await uni.$api.shangpinxiangqing(data)
		// this.shopData = res.data[0]
		// let banner = this.shopData.rotation.split(",")
		// const bannerbox = banner.map(item => {
		// 	return this.imageUrl + item
		// })
		// this.bannerList = bannerbox
	}
	
	// 查看溯源
	const toSpSy = (id)=>{
		uni.navigateTo({
			url:`/pages/suyuan/pages/spsy/spsy?id=${1}`
		})
	}
	
	// 加入购物车
	const cart = () => {
		console.log('购物车');
		uni.$msgBox('加入购物车成功')
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
		console.log('购买');
		shopData.value.count = count.value //把购买的数量添加进去
		// console.log(JSON.stringify(shopData.value));
		shopData.value.detailed = ''
		uni.navigateTo({
			url: `/pages/order/pages/creatSpOrder/creatSpOrder?shop=${JSON.stringify(shopData.value)}`
		})
	}
</script>



<style lang="scss">
	.details {
		min-height: 100vh;
		// background-color: #f4f4f4;
		padding-bottom: 110rpx;
	}

	.slideshow {
		height: 600rpx;
		background-color: #fff;
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
			width: 100px;
			height: 50px;

		}
	}

	.content-mid {
		color: #ccc;
		margin: 10px 0;
	}

	.content-btm {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

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

	
	.lookSy{
		display: flex;
		justify-content: space-between;
		.sy-btn {
			background-color: #87BE79;
			padding: 3px 10px;
			color: #fff;
			border-radius: 15px;
			width: 80px;
			text-align: center;
		}
	}
</style>