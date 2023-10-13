<template>
	<view class="ttPage">

		<view class="ttList">
			<view class="listItem" v-for="item in 2" :key="item">
				<view class="listItem-left">
					<view class="">
						视动世纪北京科技有限公司
					</view>
					<view class="">
						01127282837328378XXt
					</view>
				</view>
				<!-- 	<view class="listItem-mid">
				
				</view> -->
				<view class="listItem-right">
					<!-- <view class="tag">
						
						{{item==1?'公司':'个人'}}
					</view> -->
					<uni-tag :inverted="true" text="公司" type="success" v-if="true" />
					<uni-tag :inverted="true" text="个人" type="success" v-else />

					<uni-icons @click="goTtAdd(item)" custom-prefix="ceshi" type="icon-xiugai" size="25"></uni-icons>
				</view>
			</view>
		</view>

		<view class="btn">
			<uv-button @click="goTtAdd" type="success" text="新增抬头"></uv-button>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'

	const goTtAdd = (item) => {
		uni.navigateTo({
			url: `/pages/user/pages/taitouAdd/taitouAdd?id=${item.id}`
		})
	}
</script>

<style scoped lang="scss">
	.ttPage {
		background-color: #f4f4f4;
		min-height: 100vh;
		// padding: 0 10px 10px 10px;
	}

	.ttList {

		display: flex;
		// align-items: center;
		flex-direction: column;
		gap: 10px;
		padding: 10px;
		// background: #fff;
		position: relative;
		border-bottom: 1px solid #f5f5f5;
	}

	.listItem {
		margin-top: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #fff;
		background-color: #fff;
		padding: 10px;
		border-radius: 10px;

		.listItem-left {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		.listItem-mid {}

		.listItem-right {
			display: flex;
			justify-content: center;
			flex-direction: column;
			gap: 10px;

			.tag {
				border: 1px solid #76C071;
				padding: 3px 10px;
				border-radius: 8px;
			}
		}
	}


	.btn {
		position: fixed;
		bottom: 10px;
		left: 10px;
		right: 10px;
	}
</style>