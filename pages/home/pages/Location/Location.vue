<template>
	<view class="ynq-Location">

		<!-- 字母区域 -->
		<view class="ynq-Letter">
			<view hover-class="Click-Latter" @tap="getLetter('ScrollTop')">*</view>
			<view v-for="(l,i) in LatterName" :key="i" hover-class="Click-Latter" @tap="getLetter(l)">{{l}}</view>
		</view>

		<view class="ynq-AutoLocation flex">
			<view class="ynq-AutoAddress">
				<!-- <text class="ynq ynq-dizhi"></text> -->
				<uv-icon name="empty-address" color="#87BE79" size="28"></uv-icon>
				<text>当前定位：</text>
				<text>{{CityName}}</text>
			</view>

			<!-- <view class="ynq-ReLocation">
				<text class="ynq ynq-ditudingwei"></text>
				<text>重新定位</text>
			</view> -->
		</view>

		<scroll-view scroll-y="true" class="ynq-ScrollView" :scroll-into-view="LetterId">
			<!-- 热门城市 -->
			<view class="ynq-HotCity" id="ScrollTop">
				<view class="ynq-HotCityTitle">
					<text class="ynq ynq-fire"></text>
					<text>热门城市</text>
				</view>

				<view class="ynq-HotCityList flex">
					<text class="radius-3" @tap="getStorage(item)" v-for="(item,index) in HotCity" :key="index">{{item}}</text>
				</view>
			</view>
			<!-- 城市列表 -->
			<view class="ynq-CityList">
				<block v-for="(item,index) in CityList" :key="index">
					<view class="ynq-CityLetter" :id="item.initial">{{item.initial}}</view>
					<view class="ynq-CityLine">
						<text @tap="getStorage(item_city.name)" v-for="(item_city,name_index) in item.list"
							:key="name_index">{{item_city.name}}</text>
					</view>
				</block>
			</view>
		</scroll-view>

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
	// import cityData from "@/json/city.json"
import cityData from '@/json/city.json';

	// var cityData = require('@/json/city.json')
	// console.log(cityData);

	const CityName = ref('北京')
	const HotCity = ref(['北京', '深圳', '上海', '成都', '广州', '金华'])
	const LatterName = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
		'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	])
	const CityList = ref(cityData.city) //引用json数据
	// const CityList = ref([]) //引用json数据
	const LetterId = ref('')


	//获取定位点
	const getLetter = (name) => {
		LetterId.value = name
		uni.pageScrollTo({
			selector: '#' + name,
			duration: 300
		})
	}
	//存储城市缓存
	const getStorage = (Name) => {
		uni.setStorage({
			key: 'City_Name',
			data: Name
		})
		CityName.value = Name
		//跳转返回
		// uni.navigateBack({
		// 	url: '/pages//index'
		// })
		uni.switchTab({
			url:'/pages/tabBar/home/home'
		})
	}
</script>



<style lang="scss" scoped>
	.ynq-Location {
		height: 100vh;
	}

	.ynq-AutoLocation {
		display: flex;
		width: calc(100% - 40rpx);
		background: rgba(250, 250, 250, .5);
		padding: 20rpx 20rpx;
		.ynq-AutoAddress{
			display: flex;
			align-items: center;
		}

		text.ynq {
			font-size: 32rpx;
			margin-right: 10rpx;
		}

		text {
			font-size: 30rpx;
		}
	}

	.ynq-HotCity {
		padding: 20rpx;
	}

	.ynq-HotCityTitle {
		padding: 0rpx 0rpx;

		text.ynq {
			margin-right: 10rpx;
			color: #ff0000;
			font-size: 32rpx;
		}

		text {
			font-size: 30rpx;
		}
	}

	.ynq-HotCityList {
		padding: 20rpx 20rpx 20rpx 0;
		flex-wrap: wrap !important;

		text {
			width: 32%;
			display: inline-block;
			text-align: center;
			background: rgba(200, 200, 200, .2);
			margin-bottom: 10rpx;
			font-size: 26rpx;
			padding: 20rpx 0;
		}
	}

	.ynq-Letter {
		position: fixed;
		right: 5rpx;
		top: 180rpx;
		width: 30rpx;
		z-index: 100;

		view {
			display: block;
			width: 30rpx;
			text-align: center;
			height: 35rpx;
			line-height: 35rpx;
			font-size: 22rpx;
			transition: ease .3s;
			-webkit-transition: ease .3s;
		}
	}

	.ynq-CityList {
		padding: 0px 40rpx 0 20rpx;

		.ynq-CityLetter {
			line-height: 30rpx;
			height: 40rpx;
			font-size: 24rpx;
			border-bottom: 1px solid #f7f7f7;
			padding-left: 10rpx;
			color: #909090;
		}

		.ynq-CityLine {
			margin: 20rpx 0px;

			text {
				display: block;
				line-height: 60rpx;
				padding: 0px 10rpx;
				font-size: 30rpx;
				color: #767676;

				&:nth-child(even) {
					background-color: rgba(200, 200, 200, .12);
				}
			}
		}
	}

	.ynq-ScrollView {
		height: calc(100vh - 160rpx);
	}

	.Click-Latter {
		font-size: 30rpx !important;
	}
</style>