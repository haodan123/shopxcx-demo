<template>
	<view class="content b-t">
		<view class="list b-b" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
			<view class="wrapper">
				<view class="address-box">
					<text v-if="item.moren=='1'" class="tag">默认</text>
					<text class="address">{{item.address}} {{item.addressName}}</text>
				</view>
				<view class="u-box">
					<text class="name">{{item.name}}</text>
					<text class="mobile">{{item.mobile}}</text>
				</view>
			</view>
			<uni-icons type="icon-xiugai" custom-prefix="ceshi" color="#76C071" size="30"
				@click.stop="addAddress('edit', item)"></uni-icons>

			<!-- <text class="yticon icon-bianji" ></text> -->
		</view>


		<button class="add-btn" @click="addAddress('add')">新增地址</button>
	</view>
</template>
<script setup>
	import {
		ref
	} from "vue";
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	const source = ref(0) //判断是否选择地址
	const addressList = ref([{
		name: '刘晓晓',
		mobile: '18666666666',
		addressName: '贵族皇仕牛排(东城店)',
		address: '北京市东城区',
		area: 'B区',
		default: true
	}, {
		name: '刘大大',
		mobile: '18667766666',
		addressName: '龙回1区12号楼',
		address: '山东省济南市历城区',
		area: '西单元302',
		default: false,
	}])

	onLoad((option) => {
		source.value = option.source;
	})
	onShow(() => {
		getList()
	})

	// 获取数据
	const getList = async () => {
		let data = {
			"loginid": uni.getStorageSync('userInfo').id
		}
		// const res = await uni.$api.address(data)
		// this.addressList = res.data
	}


	//选择地址
	const checkAddress = (item) => {
		if (this.source == 1) {
			uni.$emit('SELECT_ADDRESS', {
				addressInfo: item
			});
			// 选择地址 的时候把下面复制到订单页面
			// uni.$once('SELECT_ADDRESS', (e) => {
			// 	console.log(e.addressInfo);
			// });
			uni.navigateBack()
		}
	}
	// 新增或修改地址
	const addAddress = (type, item) => {
		uni.navigateTo({
			url: `/pages/user/pages/addressManage/addressManage?type=${type}&data=${JSON.stringify(item)}`
		})
	}
</script>



<style lang='scss'>
	page {
		padding-bottom: 120upx;
	}

	.content {
		position: relative;
		padding: 10px;
	}

	.list {

		display: flex;
		align-items: center;
		padding: 20upx 30upx;
		background: #fff;
		position: relative;
		border-radius: 10px;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.address-box {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #f5f5f5;

		.tag {
			width: 54px;
			text-align: center;
			font-size: 24upx;
			color: red;
			margin-right: 10upx;
			background: #fffafb;
			border: 1px solid red;
			border-radius: 4upx;
			padding: 4upx 10upx;
			line-height: 1;
		}

		.address {
			font-size: 30upx;
			/* color: #51AA38; */
		}
	}

	.u-box {
		flex: 1;
		font-size: 28upx;
		/* color: #51AA38; */
		margin-top: 16rpx;

		.name {
			margin-right: 30upx;
		}
	}

	.icon-bianji {
		display: flex;
		align-items: center;
		height: 80upx;
		font-size: 40upx;
		color: #909399;
		padding-left: 30upx;
	}

	.add-btn {
		position: fixed;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		background-color: #51AA38;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>