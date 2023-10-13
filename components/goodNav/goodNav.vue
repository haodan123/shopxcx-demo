<template>
	<!-- <view> -->
	<view class="group" :style="{ paddingBottom: btmpd+ 'px' }">
		<view class="group-left">
			<view class="gl-item" @click="toNav" v-if="type=='ny'">
				<uni-icons type="home" size="20" color="#999"></uni-icons>
				<view class="gli-title">首页</view>
			</view>
			
			<!-- <view class="gl-item" @click="toNav" v-if="type=='ny'">
				<uni-icons type="home" size="20" color="#999"></uni-icons>
				<view class="gli-title"></view>
			</view> -->

			<view class="gl-item" @click="isLike" v-if="type=='sp'">
				<!-- <uni-icons type="home" size="20" color="#999"></uni-icons> -->
				<uni-icons type="star-filled"  v-if="false" color="#ffca3e" size="20"></uni-icons>
				<uni-icons v-else type="star"  size="20"></uni-icons>

				<view class="gli-title">收藏</view>
			</view>

			<button class="contact gl-item" open-type="contact" >
				<uni-icons type="headphones" size="20" color="#999"></uni-icons>
				<view class="gli-title">客服</view>
			</button>
			<!-- 	<view class="gl-item" @click="selectClick">
				
			</view> -->
		</view>
		<view class="group-right">

			<view @click="cart" v-if="type=='sp'"  class="red rbtn">{{'加入购物车'||''}}</view>
			<view @click="buy"  v-if="type=='sp'" class="green rbtn">{{'立即购买'||''}}</view>
			<view @click="buy"  v-if="type=='ny'" class="green rbtn">{{text||''}}</view>
		</view>
	</view>
	<!-- </view> -->
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		onMounted,
		ref
	} from "vue";

	const props = defineProps({
		text: {
			type: String,
			default: '立即认领'
		},
		phone: {
			type: Number,
			default: 13333333
		},
		type: {
			type: String,  //sp代表商品电商    ny代表农业电商
			default: ''
		}
	})
	const emit = defineEmits(['buy','cart'])


	const btmpd = ref(0)
	onShow(() => {

	})
	onMounted(() => {
		btmpd.value = uni.$safeBtm
	})

	const selectClick = () => {
		console.log(props.phone);
		const phoneNumber = props.phone; // 电话号码
		uni.makePhoneCall({
			phoneNumber: phoneNumber
		});

	}
	// 跳转页面
	const toNav = (index) => {
		// console.log('da赢');
		uni.switchTab({
			url: '/pages/tabBar/home/home'
		})
	}
	const day = () => {
		// console.log('da赢');
	}
	
	// 点击收藏
	const isLike = ()=>{
		
	}
	
	// 加入购物车
	const cart = ()=>{
		emit('cart')
	}
	// 立即购买
	const buy = () => {
		console.log('点击');
		emit("buy", "")
	}
</script>



<style lang="scss">
	.group {
		width: 100%;
		height: 100rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		border-top: 0.5px solid #ccc;
		align-items: center;
	}

	.group-left {
		width: 40%;
		display: flex;
		justify-content: center;
	}

	.gl-item {
		display: flex;
		flex-wrap: wrap;
		width: 40%;
		justify-content: center;
	}

	.gl-item>image {
		width: 50rpx;
		height: 50rpx;
	}

	.gli-title {
		width: 100%;
		font-size: 12px;
		text-align: center;
	}

	.group-right {
		width: 60%;
		display: flex;
		justify-content: space-around;
	}

	.group-right>view {
		width: 200rpx;
		height: 80rpx;
		line-height: 80rpx;
		/* border-radius: 40rpx; */
		font-size: 28rpx;
		color: #FFFFFF;
		border-radius: 20px;
		text-align: center;
	}

	.group-right .red{
		background: #ff0000;

	}


	.group-right .green {
		/* background: #ffa200; */
		background-color: #51AA38;
	}
</style>