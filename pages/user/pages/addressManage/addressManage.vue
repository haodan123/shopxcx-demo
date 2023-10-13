<template>
	<view class="content">
		<view class="section">
			<view class="row b-b">
				<text class="tit">收货人</text>
				<input class="input" type="text" v-model="addressData.name" placeholder="收货人姓名"
					placeholder-class="placeholder" />
			</view>
			<view class="row b-b">
				<text class="tit">手机号</text>
				<input class="input" type="number" v-model="addressData.mobile" placeholder="收货人手机号码"
					placeholder-class="placeholder" />
			</view>
			<view class="row b-b">
				<text class="tit">地址</text>
				<text @click="chooseLocation" class="input">
					{{addressData.address}}
				</text>
				<text class="yticon icon-shouhuodizhi"></text>
			</view>
			<view class="row b-b">
				<text class="tit">详细地址</text>
				<input class="input" type="text" v-model="addressData.addressName" placeholder="详细地址"
					placeholder-class="placeholder" />
			</view>

			<view class="row default-row">
				<text class="tit">设为默认</text>
				<switch :checked="addressData.moren=='1'" color="#68A849" @change="switchChange" />
			</view>
		</view>

		<button class="add-btn" @click="confirm">提交</button>
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
	const addressData = ref({
		// shname: '',
		// shphone: '',
		// shaddress: '在地图选择',
		// address: '',
		// xxaddress: '',
		// moren: false,

		name: '',
		mobile: '',
		addressName: '',
		address: '在地图选择',
		moren: 1


		// name: '刘晓晓',
		// mobile: '18666666666',
		// addressName: '贵族皇仕牛排(东城店)',
		// address: '北京市东城区',
		// area: 'B区',
		// default: true,
		// moren: 1
	})
	// 判断新增还是修改
	const manageType = ref('')

	onLoad((option) => {
		let title = '新增收货地址';
		if (option.type === 'edit') {
			title = '编辑收货地址'

			addressData.value = JSON.parse(option.data)
		}
		manageType.value = option.type;
		uni.setNavigationBarTitle({
			title
		})
	})

	const switchChange = (e) => {
		console.log(e.detail.value);
		addressData.value.moren = e.detail.value;
	}

	//地图选择地址
	const chooseLocation = async () => {
		uni.chooseLocation({
			success: (data) => {
				console.log(data);
				// this.addressData.addressName = data.name;
				addressData.value.shaddress = data.address;
				addressData.value.xxaddress = data.name;
			}
		})
	}

	//提交
	const confirm = async () => {
		let data = addressData.value;
		data.moren = addressData.value.moren ? 1 : 0 //1默认 2不默认
		data.loginid = uni.getStorageSync('userInfo').id //用户id

		if (!data.shname) {
			msgBox('请填写收货人姓名');
			return;
		}
		if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.shphone)) {
			msgBox('请输入正确的手机号码');
			return;
		}
		if (!data.shaddress) {
			msgBox('请在地图选择所在位置');
			return;
		}
		if (!data.xxaddress) {
			msgBox('请填写详细地址');
			return;
		}
		if (this.manageType == 'edit') {
			// 修改地址
			const res = await uni.$api.xiugai(data)
		} else {
			// 新增地址
			const res = await uni.$api.xinaddress(data)
		}

		msgBox(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
		setTimeout(() => {
			uni.navigateBack()
		}, 800)
	}

	const msgBox = (text) => {
		uni.showToast({
			title: text,
			icon: 'none'
		})
	}
</script>



<style lang="scss">
	.section {
		background-color: #fff;
		border-radius: 20px;
		// width: 95%;
		width: 90%;
		margin: 20px auto;
		overflow: hidden;
		padding: 0 15px;

	}

	.row {
		display: flex;
		align-items: center;
		position: relative;
		// padding: 0 30upx;
		// padding: 0 15px;
		height: 55px;
		background: #fff;
		border-bottom: 1px solid #ccc;

		&:last-child {
			border: none;
		}

		.tit {
			flex-shrink: 0;
			width: 130upx;
			font-size: 30upx;
			color: #51AA38;
		}

		.input {
			flex: 1;
			font-size: 30upx;
			color: #000;
		}

		.icon-shouhuodizhi {
			font-size: 36upx;
			color: #000;
		}
	}

	.default-row {
		margin-top: 16upx;

		.tit {
			flex: 1;
		}

		switch {
			transform: translateX(16upx) scale(.9);
		}
	}

	.add-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: 14px;
		color: #fff;
		background-color: #51AA38;
		border-radius: 10upx;
		// box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>