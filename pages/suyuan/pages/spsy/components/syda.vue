<template>
	<view class="zuixia">
		<view class="view-top">
			<view class="view-name">种植位置</view>
			<view class="view-xuxian"></view>
			<image class="view-xiala" src="@/pages/suyuan/static/icon/xialaanniu.png">
			</image>
		</view>

		<!-- <ditu2 v-if="obj.jid" :jid="obj.jid+''" :wid="obj.wid+''"></ditu2> -->
		<ditu2 :jid="obj.jid+''" :wid="obj.wid+''"></ditu2>

		<view class="view-top">
			<view class="view-name">种植流程</view>
			<view class="view-xuxian"></view>
			<image class="view-xiala" src="@/pages/suyuan/static/icon/xialaanniu.png">
			</image>
		</view>
		<!-- 	<view class="cppc">
			产品批次：{{obj.productBatch || '暂无'}}
		</view> -->
		<view class="sc-view">
			<u-steps current="6" :dot="true" direction="column" activeColor='#1ab888'>
				<u-steps-item active-color='#1ab888' v-for="(item,index) in  obj.zzlc" :key="index">
					<view class="step_slot" slot="desc">
						<view class="stepp-name">
							<view>{{item.name}}</view>
							<view class="step-time">{{item.createtime}}</view>
						</view>
						<view class="line">
						</view>
						<view class="step-text">
							<text class="left">操作人：</text><text>{{item.person||'暂无'}} </text>
						</view>
						<view class="img-step" v-if="item.picture">
							<image @click="preimg(item.picture)" :src="item.picture"></image>
						</view>
						<view class="step-text" v-else>
							<text class="left">暂无图片</text>
						</view>
					</view>
				</u-steps-item>
				<!-- <u-steps-item active-color='#1ab888'>
				</u-steps-item> -->
			</u-steps>


			<view class="view-top">
				<view class="view-name">加工流程</view>
				<view class="view-xuxian"></view>
				<!-- <image class="view-xiala" src="../../../../static/images/public/xialaanniu.png" > -->
				<image class="view-xiala" src="@/pages/suyuan/static/icon/xialaanniu.png">
				</image>
			</view>

			<view class="sc-view">
				<u-steps current="6" :dot="true" direction="column" activeColor='#1ab888'>
					<u-steps-item active-color='#1ab888' v-for="(item,index) in  obj.jg" :key="index">
						<view class="step_slot" slot="desc">
							<view class="stepp-name">
								<view>{{item.bzname}}</view>
								<view class="step-time">{{item.createtime}}</view>
							</view>
							<view class="line">
							</view>
							<view class="step-text">
								<text class="left">操作人：</text><text>{{item.person||'暂无'}} </text>
							</view>
							<view class="img-step" v-if="item.img">
								<image @click="preimg(item.img)" :src="item.img"></image>
							</view>
							<view class="step-text" v-else>
								<text class="left">暂无图片</text>
							</view>
						</view>
					</u-steps-item>
				</u-steps>

			</view>


			<view class="view-top">
				<view class="view-name">直播溯源</view>
				<view class="view-xuxian"></view>
				<!-- <image class="view-xiala" src="../../../../static/images/public/xialaanniu.png" > -->
				<image class="view-xiala" src="@/pages/suyuan/static/icon/xialaanniu.png">
				</image>
			</view>

			<zhibo></zhibo>

			<view class="view-top">
				<view class="view-name">物联网溯源</view>
				<view class="view-xuxian"></view>
				<!-- <image class="view-xiala" src="../../../../static/images/public/xialaanniu.png" > -->
				<image class="view-xiala" src="@/pages/suyuan/static/icon/xialaanniu.png">
				</image>
			</view>


			<view class="cgq">
				<view class="cgq-item">
					<view class="title">
						土壤温度
					</view>
					<view class="content">
						<view class="left">
							<!-- {{obj.sensordata.humidity||0}}℃ -->
							{{0}}℃
						</view>
						<view class="right">
							<image src="@/pages/suyuan/static/cgq/trwd.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="cgq-item">
					<view class="title">
						土壤湿度
					</view>
					<view class="content">
						<view class="left">
							<!-- {{obj.sensordata.humidity||0}} %RH -->
							{{o0}} %RH
						</view>
						<view class="right">
							<image src="@/pages/suyuan/static/cgq/trsd.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="cgq-item">
					<view class="title">
						温度
					</view>
					<view class="content">
						<view class="left">
							<!-- 30 -->
							<!-- {{obj.sensordata.temp||0}}℃ -->
							{{0}}℃
						</view>
						<view class="right">
							<image src="@/pages/suyuan/static/cgq/hjwd.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="cgq-item">
					<view class="title">
						湿度
					</view>
					<view class="content">
						<view class="left">
							<!-- 30 -->
							<!-- {{ obj.sensordata.humidity||0}} %RH -->
							{{ 0}} %RH
						</view>
						<view class="right">
							<image src="@/pages/suyuan/static/cgq/hjsd.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="cgq-item">
					<view class="title">
						风向
					</view>
					<view class="content">
						<view class="left">
							<!-- {{obj.sensordata.humidity||0}} -->
							{{0}}
						</view>
						<view class="right">
							<image src="@/pages/suyuan/static/cgq/eyht.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="cgq-item">
					<view class="title">
						光照强度
					</view>
					<view class="content">
						<view class="left">
							<!-- {{obj.sensordata.light||0}}Lux -->
							{{0}}Lux
						</view>
						<view class="right">
							<image src="@/pages/suyuan/static/cgq/gzqd.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="cgq-item">
					<view class="title">
						风速
					</view>
					<view class="content">
						<view class="left">
							<!-- {{obj.sensordata.humidity||0}} -->
							{{0}}
						</view>
						<view class="right">
							<image src="@/pages/suyuan/static/cgq/aqnd.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="cgq-item">
					<view class="title">
						PM2.5
					</view>
					<view class="content">
						<view class="left">
							<!-- {{obj.sensordata.pm25||0}}pm -->
							{{0}}pm
						</view>
						<view class="right">
							<image src="@/pages/suyuan/static/cgq/pm.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>



		</view>
	</view>
</template>


<script setup>
	import ditu2 from "./ditu2.vue"
	import zhibo from "./zhibo.vue"
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		ref
	} from "vue"
	const props = defineProps({
		obj: {
			type: Object,
			default: () => {}
		}
	})


	const preimg = (imgcurrent) => {
		uni.previewImage({
			// current: imgcurrent,
			urls: imgcurrent,
			success: function(res) {
				console.log(res)
			},
			fail: function(res) {
				console.log(res)
			},
			complete: function(res) {
				console.log(res)
			}
		})
	}
</script>



<style lang="scss">
	.zuixia {
		padding-bottom: 100px;
	}

	.left {
		width: 23%;
	}

	.step_slot {
		// width: 300px;
		width: 100%;
		background: rgba(#efefef, 0.5);
		display: flex;
		flex-direction: column;
		padding: 10px;
		margin: 5px;

		.stepp-name {
			width: 90%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-right: 15px;
			font-size: 15px;
			font-weight: 600;

			.step-time {
				color: #1ab888;
				font-size: 12px;
			}
		}

		.line {
			width: 90%;
			height: 1px;
			background: #aabcb8;
			margin-top: 5px;
		}

		.step-text {
			margin-top: 5px;
			font-size: 12px;
			display: flex;
			flex-direction: row;
		}

		.img-step {
			width: 90%;
			margin-top: 5px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			image {
				width: 250px;
				height: 200px;
				border-radius: 8px;
			}
		}
	}


	.view-top {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-bottom: 15px;
		padding: 0 10px;
		margin-top: 15px;

		.view-name {
			// height: 20px;
			// height: 36px;
			padding: 8px 13px;
			font-size: 15px;
			font-weight: 400;
			background: #1ab888;
			color: #FFF;
			border-radius: 8px;
		}

		.view-xuxian {
			flex: 1;
			border: 1px dashed #1ab888;
		}

		.view-xiala {
			width: 15px;
			height: 15px;
			padding: 5px;
			background: #1ab888;
			border-radius: 50%;
			border: 5px solid #d2ebe5;
		}
	}

	.content {
		width: 93%;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;

		.spjg {
			display: flex;
			flex-flow: column;
			height: 100rpx;
			justify-content: space-around;
			font-size: 12px;

			view:last-child {
				// color: #1ab888;
				// font-weight: 800;
			}
		}

		.ytb {
			width: 100rpx;
			height: 100rpx;
			line-height: 93rpx;
			border: 3px solid #1ab888;
			color: #1ab888;
			border-radius: 50rpx;
			text-align: center;
		}
	}

	// 传感器start
	.cgq {
		background-color: #f4f4f4;
		padding: 5px;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		flex-direction: row;
		// width: 100%;
		width: 95%;
		justify-content: space-between;
		font-size: 14px;
	}

	.cgq-item {
		// border: 1px solid #CCCCCD;
		background-color: #fff;
		padding: 10px;
		width: 41%;
		display: flex;
		flex-direction: column;
		// justify-content: center;
		// align-items: center;
		border-radius: 10px;
		overflow: hidden;
		gap: 5px;

	}

	.title {
		color: #000;
		font-size: 18px;
		text-align: center;
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.left {
		color: #65CF8D;
	}

	.right {
		width: 40px;
		height: 40px;

		image {
			width: 100%;
			height: 100%;
		}
	}

	// 传感器end
</style>