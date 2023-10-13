<template>
	<view class="homePage">
		<!-- 上面的背景色 start-->
		<view class="home-bc">

		</view>
		<!-- 上面的背景色 end-->

		<!-- 搜索start -->
		<view class="topbar">
			<view class="topinfo">
				<view class="location" @click="toLocation">
					<uv-icon name="empty-address" color="#ffffff" size="28"></uv-icon>
					<!-- 达州 -->
					{{city}}
					<uv-icon name="arrow-down" color="#ffffff" size="20"></uv-icon>
				</view>

				<button class="contact kefu" open-type="contact">
					<uv-icon name="server-man" color="#ffffff" size="28"></uv-icon>

				</button>
				<!-- <view class="kefu">
					<uv-icon name="server-man" color="#ffffff" size="28"></uv-icon>
				</view> -->

			</view>
			<view class="search">
				<!-- <uv-search bgColor="#fff" borderColor="#87BE79" @custom="search" v-model="keyword" @search="search"
					:showAction="true" actionText="搜索" :animation="true"> -->
				<uv-search bgColor="#fff" borderColor="#ffffff" @custom="search" v-model="keyword" @search="search"
					:showAction="true" actionText="搜索" :animation="true">
				</uv-search>
			</view>
		</view>
		<!-- 搜索end -->

		<!-- 轮播 start -->
		<view class="swiperbox">
			<swiper class="swiper-item" :indicator-dots="true" autoplay="true" circular interval="2000" duration="500">
				<swiper-item v-for="(item,index) in bannerList" :key="index">
					<image class="swiper-item-img" :src="item" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 轮播 end-->

		<!-- 认领tabbar start -->
		<view class="card-box">
			<view class="navbar">
				<view class="navbar-item" @click="toRoute(item)" v-for="(item,index) in rlList" :key="index">
					<view class="image-ny">
						<image :src="item.imgurl" mode=""></image>
					</view>
					<text class="text">{{item.name}}</text>
				</view>
			</view>
		</view>
		<!-- 认领tabbar end -->

		<!-- 活动商品 start -->
		<view class="card-box">
			<view class="title">
				<view class="title-left">
					活动商品
				</view>
				<view class="title-right" @click="toHuodong">
					更多 <uni-icons type="right" size="15"></uni-icons>

				</view>
			</view>

			<uv-scroll-list :indicator="true" indicatorColor="#fff0f0" indicatorActiveColor="#4390B7">

				<view class="event-goods">
					<view class="goods-item" v-for="(item, index) in list" :key="index" @click="tospGoods(item)">
						<image class="img" :src="item.image"></image>
						<view class="goods-info">
							<view class="goods-title">
								双黄土鸡蛋
							</view>
							<view class="goods-yuan">
								原价: <text class="heng"> 110.00</text>
							</view>

							<view class="goods-numbox">
								<view class="price">
									￥100.00
								</view>
								<view class="greenText" v-if="index%2==0">
									限时优惠
								</view>
								<view class="redText" v-else>
									满减满赔
								</view>
							</view>
						</view>
					</view>
				</view>

			</uv-scroll-list>


		</view>
		<!-- 活动商品 end -->

		<!-- 分类 start -->
		<view class="card-box">
			<view class="title">
				<view class="title-left">
					全部分类
				</view>
				<!-- 	<view class="title-right">
				</view> -->
			</view>
			<view class="navbar">
				<view class="navbar-item" v-for="(item,index) in 15" :key="index">
					<view class="image">
						<image :src="bg" mode=""></image>
					</view>
					<text class="text">蔬菜豆制品</text>
				</view>
			</view>
		</view>

		<!-- 分类 end -->

		<!-- 内容start -->
		<view class="content">
			<view class="content-item" v-for="(item,index) in 10" :key="index" @click="tospGoods(item)">
				<view class="image">
					<image :src="bg" mode=""></image>
				</view>
				<view class="content-info">
					<view class="inof-title">
						大蒜 带皮

						<view class="info-buy">
							<view class="info-money">
								￥20.00
							</view>
							<view class="info-cart" @click="addCart">
								<uni-icons type="cart" color="#87BE79" size="30"></uni-icons>

							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 内容end -->

	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		ref
	} from "vue";
	import bg from "@/static/bg1.jpg"

	const list = [{
		image: "https://via.placeholder.com/200x200.png/3c9cff/fff"
	}, {
		image: "https://via.placeholder.com/200x200.png/f9ae3d/fff"
	}, {
		image: "https://via.placeholder.com/200x200.png/5ac725/fff"
	}]

	// 轮播图数组
	const bannerList = ref([
		"http://pgz-cctvnp2.shidongvr.com:443/profile/upload/2023/10/08/677c64b3-61e3-435e-85b2-80b1f42db95b.png",
		"http://pgz-cctvnp2.shidongvr.com:443/profile/upload/2023/10/08/232b6e84-3a2e-427d-b465-20dbb237d3ad.png",
		"http://pgz-cctvnp2.shidongvr.com:443/profile/upload/2023/10/08/6471d835-4f86-4000-91f6-3500ee534639.png",
	])


	// 认领数组
	const rlList = ref([{
			index: 1,
			name: '禽畜认养',
			imgurl: '/static/home/two-ry.png',
			pageurl: '/pages/home/pages/renyang/renyang'
		}, {
			index: 2,
			name: '菜园认领',
			imgurl: '/static/home/two-rl.png',
			pageurl: '/pages/home/pages/tudi/tudi'
		},
		{
			index: 3,
			name: '果树认种',
			imgurl: '/static/home/two-rz.png',
			pageurl: '/pages/home/pages/renzhong/renzhong'
		},
		{
			index: 4,
			name: '直播溯源',
			imgurl: '/static/home/two-zb.png',
			pageurl: '/pages/home/pages/zhiboList/zhiboList'
		}, {
			index: 5,
			name: '环境溯源',
			imgurl: '/static/home/two-hj.png',
			pageurl: '/pages/home/pages/huanjingck/huanjingck'
		},
	])



	const keyword = ref('')

	onShow(() => {
		getCityName()
	})

	// 跳转路由
	const toRoute = (item) => {
		uni.navigateTo({
			url: item.pageurl
		})
	}

	const search = () => {
		console.log('搜索');
	}

	onLoad(() => {
		getLocationAuth()

	})
	
	// 去商品详情页
	const tospGoods = (item)=>{
		uni.navigateTo({
			url:`/pages/goods/pages/spGoods/spGoods?id=${12}`
		})
	}

	// 

	// 加入购物车
	const addCart = (item) => {

	}

	//去活动页面
	const toHuodong = () => {
		uni.navigateTo({
			url: '/pages/home/pages/huodongyh/huodongyh'
		})
	}


	const city = ref('') //城市名
	//获得城市缓存
	const getCityName = () => {
		// let _that = this;
		setTimeout(function() {
			uni.getStorage({
				key: 'City_Name',
				success(res) {
					// _that.CityName = res.data
					console.log(res);
					city.value = res.data
				}
			})
		}, 500)
	}

	const toLocation = () => {
		uni.navigateTo({
			url: '/pages/home/pages/Location/Location'
		})
	}

	//获取定位
	const getLocationAuth = () => {
		uni.getLocation({
			type: 'gcj02',
			success(res) {
				let lat = res.latitude;
				let lng = res.longitude;
				let key = 'OYMBZ-A6F6V-XAWPF-UQT3N-S4LVO-FEBYJ';
				uni.request({
					url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + lat + ',' + lng + '&key=' + key,
					method: "GET",
					success(ress) {
						let data = ress.data; //获取到所有定位的数据
						let CityName = ress.data.result.address_component.city;
						console.log(ress)
						uni.setStorage({
							key: 'City_Name',
							data: CityName
						})
					},
					fail() {
						uni.showToast({
							'title': '对不起，数据获取失败！',
							'icon': 'none'
						})
					}
				})
			},
			fail(err) {
				if (err.errMsg === 'getLocation:fail:ERROR_NOCELL&WIFI_LOCATIONSWITCHOFF' || err.errMsg ===
					'getLocation:fail system permission denied') {
					uni.showModal({
						content: '请开启手机定位服务',
						showCancel: false
					})
				} else if (err.errMsg === 'getLocation:fail:system permission denied') {
					uni.showModal({
						content: '请给微信开启定位权限',
						showCancel: false
					})
				}
				// uni.showToast({
				// 	'title': '对不起，获取位置失败！',
				// 	'icon': 'none'
				// })
			}
		})
	}
</script>

<style scoped lang="scss">
	.homePage {
		position: relative;
		// background-color: #F4F4F4;
		min-height: 100vh;
		display: flex;
		gap: 10px;
		flex-direction: column;
		padding: 10px;
	}

	.home-bc {
		background-color: #4390B7;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 30vh;
		z-index: -1;
		border-bottom-left-radius: 30px;
		border-bottom-right-radius: 30px;
	}

	// 顶部
	.topbar {
		display: flex;
		flex-direction: column;
		gap: 5px;
		z-index: 9;

		.topinfo {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.location {
				display: flex;
				align-items: center;
				gap: 5px;
			}

			.kefu {}
		}
	}

	// 轮播图start
	.swiper-item {
		width: 100%;
		// height: 300rpx;
		height: 350rpx;
		border-radius: 10px;
		overflow: hidden;
	}

	.swiper-item-img {
		width: 100%;
		height: 100%;
	}

	// 轮播图end




	// navbar
	.navbar {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 10px;

		.navbar-item {
			// width: calc(100% / 5);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			// margin-bottom: 10px;

			.image-ny {
				width: 50px;
				height: 50px;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.image {
				border-radius: 50%;

				width: 50px;
				height: 50px;

				image {
					border-radius: 50%;
					width: 100%;
					height: 100%;
				}
			}

			.text {
				margin-top: 5px;
				text-align: center;
				font-size: 12px;
			}
		}
	}

	// 商品 start
	.event-goods {
		display: flex;
		gap: 10px;

		.goods-item {
			border-radius: 10px;
			overflow: hidden;
			background-color: #F8F8F8;

			.img {
				height: 300rpx;
				width: 300rpx;
			}

			.goods-info {
				padding: 5px;

				.goods-title {
					color: #000;
				}

				.goods-yuan {
					color: #717171;

					.heng {
						text-decoration: line-through;
					}
				}

				.goods-numbox {
					display: flex;
					justify-content: space-between;

					.price {
						color: red;
					}

					.greenText {
						border: 1px solid palegreen;
						color: palegreen;
					}

					.redText {
						border: 1px solid red;
						color: red;
					}
				}


			}
		}
	}

	//商品 end

	// 内容
	.content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;

		.content-item {
			background-color: #fff;
			border-radius: 10px;
			overflow: hidden;

			// display: grid;
			.image {
				height: 180px;
				width: 100%;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.content-info {
				padding: 10px;

				.info-title {
					font-size: 16px;
				}

				.info-buy {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.info-money {
						color: red;
					}

					.info-cart {}
				}
			}
		}
	}
</style>