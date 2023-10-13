<template>
	<view>
		<view class="box">
			<view class="ite">
				<view>
					头像
				</view>
				<button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
					<image class="avatar" :src="message.headsculpture || defaultAvatarUrl"></image>
				</button>
			</view>
			<view class="ite">
				<view class="">
					会员名称
				</view>
				<view>
					<input type="nickname" style="text-align: right;" v-model="message.nickname" @blur="getName"
						class="weui-input" placeholder="请输入昵称" />
				</view>
			</view>

			<view class="ite">
				<view class="">
					手机号
				</view>
				<view class="">
					{{message.phone || '暂无'}}
				</view>
			</view>
			<view class="ite">
				<view class="">
					性别
				</view>
				<view class="df">
					<uni-data-checkbox selectedColor="#5BC267" selectedTextColor="#5BC267" v-model="sexsValue" :localdata="sexs" />
				</view>
			</view>
			<view class="ite">
				<view class="">
					<p>出生日期</p>
					<!-- <p style="font-size: 12px; color: #ccc;">一年只能修改一次</p> -->
				</view>
				<view class="">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" fields="day" @change="bindDateChange">

						{{date?date:'选择日期'}}
					</picker>
				</view>
			</view>
			<view style="height: 10px;">
				
			</view>
			<view class="btn" @click="submit">
				保存
			</view>
		</view>



	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		uploadUrl
	} from "@/config/global-config.js"
	import {
		ref
	} from "vue";


	const oneYear = ref(true) //是否超过一年
	const message = ref({}) //存储数据
	const defaultAvatarUrl = ref('/static/nologin.png')
	const sexsValue = ref('') //性别
	const date = ref('') //时间
	const sexs = ref([{
		text: '男',
		value: '1'
	}, {
		text: '女',
		value: '2'
	}])

	onShow(() => {
		message.value = uni.getStorageSync('userInfo')
		gapYeay() //是否超过一年
		if (message.value.sex) {

			sexsValue.value = message.value.sex
		}
		if (message.value.age) {
			date.value = message.value.age.split('T')[0]
		}
	})


	const submit = async () => {

		if (!oneYear.value && message.value.updatetime) {
			if (date.value != message.value.age.split('T')[0]) {
				return uni.showToast({
					title: '一年只能能修改出生日期一次',
					icon: "none"
				});
			}

		}

		let data = {
			"nickname": message.value.nickname, //昵称
			"headsculpture": message.value.headsculpture, //头像
			"id": message.value.id,
			"sex": sexsValue.value, //性别 1 男 2 女
			"age": date.value, //出生年月日
		}
		try {
			const res = await uni.$api.auth(data)
			uni.setStorageSync('userInfo', res.data)

			uni.showToast({
				title: '修改成功'
			})
		} catch (e) {
			//TODO handle the exception
		}


	}

	const bindDateChange = (e) => {
		if (oneYear.value) {

			date.valuee = e.target.value
		} else {
			uni.showToast({
				title: '一年只能修改一次出生日期',
				icon: 'none'
			})
		}
	}

	const getName = (e) => {
		console.log('1', e.detail.value)
		message.value.nickname = e.detail.value
	}
	const onChooseAvatar = (e) => {
		console.log(e);
		const {
			avatarUrl
		} = e.detail
		uploadImg(avatarUrl)

	}
	// 上传图片
	const uploadImg = (path) => {
		uni.uploadFile({
			// url: `https://xzds.junmeinongye.com/api/pgz-api/common/upload`,
			url: uploadUrl,
			filePath: path,
			name: 'file',
			success: (res) => {
				let newRes = JSON.parse(res.data)
				console.log(newRes)
				if (newRes.code == "200") {
					uni.showToast({
						title: '上传成功'
					})
					message.value.headsculpture = newRes.url
				} else {
					uni.showToast({
						title: '网络异常，稍后再试'
					})
				}
			}
		})
	}

	const gapYeay = () => {
		// 创建一个表示目标时间的 Date 对象
		// let targetDate = new Date('2021-04-27 13:45:58');
		let targetDate = new Date(message.value.updatetime);

		let now = new Date();

		let diff = now.getTime() - targetDate.getTime();

		let oneYearMs = 1000 * 60 * 60 * 24 * 365;
		console.log(diff, oneYearMs, targetDate, now);
		// 判断差值是否超过一年
		if (diff > oneYearMs) {
			console.log("当前时间离目标时间超过一年");
			oneYear.value = true
		} else {
			console.log("当前时间离目标时间不超过一年");
			oneYear.value = false
		}
	}
</script>



<style lang='scss'>
	/* @import url('message.css'); */

	.avatar-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		height: 100rpx;

	}

	.avatar {
		width: 100rpx;
		height: 100rpx;
	}

	.petName {

		padding: 0;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;


	}

	.petName_name {
		width: 150rpx;
	}

	.df {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.btn {
		width: 200rpx;
		font-size: 12px;
		margin: 0 auto;
		margin-bottom: 5px;
		background-color: #65AC75;
		padding: 5px 10px;
		border-radius: 25px;
		text-align: center;
		color: #fff;
		/* margin-top: 50px; */
		padding: 20rpx 30rpx;
	}

	.box {
		background-color: #fff;
		/* padding: 20px; */
		padding: 0 20px 0 20px;
		padding-bottom: 0;
		display: flex;
		flex-direction: column;
		/* gap: 10px; */
		padding-bottom: 50px
	}


	.ite {
		/* 	height: 70px;
		line-height: 70px;
		margin: 5px 10px; */
		display: flex;
		padding: 20px 0;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
	}

	.ite-l {
		width: 80px;
	}

	.ite-r {
		flex: 1;
		/* position: relative; */
	}

	.ite:last-child {
		border: 0;
	}

	image {
		width: 60px;
	}

	.ite1 {
		height: 55px;
		line-height: 55px;
		margin: 25px 0;
		background-color: #fff;
		color: red;
		text-align: center;
	}

	.btn-img {
		text-align: right;
	}

	.uni-form-item {
		/* 	height: 60rpx;
			
			line-height: 60rpx;
			padding: 10rpx 0;
			margin: 10rpx 0; */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}


	.select {
		background-color: #51AA38;
		padding: 5rpx 30rpx;
		margin: 10rpx 20rpx;
		/* position: relative; */
		border-radius: 10px;
		overflow: hidden;
		color: #fff;
	}

	.scroll {
		width: 95%;
		height: 90vh;
		margin: 5vh auto;
		// background-color: #CCCCCC;
	}

	.no-b {
		border: none;
	}
</style>