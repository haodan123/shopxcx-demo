<template>
	<view class="addressPage ">
		<view class="addressBox">

			<view class="addressItem" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
				<view class="addInfo">
					<view class="info-top">
						<text class="name">{{item.name}}</text>
						<text class="mobile">{{item.mobile}}</text>

					</view>
					<view class="info-btm">
						<text v-if="item.moren=='1'" class="tag">默认</text>
						<text class="address">{{item.address}} {{item.addressName}}</text>
					</view>
				</view>
				<view class="edit">
					<uni-icons type="icon-xiugai" custom-prefix="ceshi" color="#ccc" size="30"
						@click.stop="addAddress('edit', item)"></uni-icons>
				</view>

			</view>


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
		default: true,
		moren:1
	}, {
		name: '刘大大',
		mobile: '18667766666',
		addressName: '龙回1区12号楼',
		address: '山东省济南市历城区',
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
		if (source.value== 1) {
			// console.log(item);
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
	.addressPage {
		padding: 10px;
	}

	.addressBox {
		padding: 10px;
		background-color: #fff;
		border-radius: 10px;
	}

	.addressItem {
		display: flex;
		justify-content: space-between;
		padding: 5px 0;
		border-bottom: 1px solid #ccc;
		align-items: center;

gap: 10px;

	}

	.addInfo {
		.info-top {
			display: flex;
			gap: 20px;
			margin-bottom: 10px;

		}
		.tag{
			width: 54px;
			text-align: center;
			font-size: 24upx;
			color: red;
			/* margin-right: 10upx; */
			margin-right: 10px;
			background: #fffafb;
			border: 1px solid red;
			border-radius: 4upx;
			padding: 4upx 10upx;
			line-height: 1;
			
		}

		.info-btm {
			
		}
	}

	.edit {
		width: 40px;
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