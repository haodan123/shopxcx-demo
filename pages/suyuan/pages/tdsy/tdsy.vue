<template>
	<view class="suYuan">

		<uv-empty v-if="list.length<=0" mode="list" icon="https://cdn.uviewui.com/uview/empty/list.png"></uv-empty>

		<view class="ulist" v-for="item in list" :key="item.id">
			<view class="line">
			</view>
			<view class="ulistitem">
				<view class="u-left">采集内容：</view>
				<view class="u-right">{{item.bname||'暂无'}}</view>
			</view>
			<view class="ulistitem">
				<view class="u-left">采集时间：</view>
				<view class="u-right">{{item.addtime||'暂无'}}</view>
			</view>
			<view class="ulistitem">
				<view class="u-left">操作人：</view>
				<view class="u-right">{{item.name||'暂无'}}</view>
			</view>
			<view class="ulistitem">
				<view class="u-left">采集图片：</view>
				<view class="u-right">
					<image @click="preimg(item.tupian)" :src="'https://pgz-static.shidongvr.com/temp/hzy.jpg'" style="width: 200px;height: 200px;"></image>

					<!-- <uAlbum multipleSize='100' :urls="[item.tupian]"></uAlbum> -->
				</view>

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
		ref
	} from "vue";
	const list = ref([1])
	const sydata = ref({})

	onLoad(({
		sydata
	}) => {
		sydata.value = JSON.parse(sydata)

		// getList()
	})

	const getList = async () => {
		let data = {
			"greenhouseid": this.sydata.tid, //地块id
			"addtime": this.sydata.addtime //订单生成时间
		}
		const res = await uni.$api.chakansuyuan(data)
		this.list = res.data
		console.log(this.list);
	}

	const preimg = (e) => {
		uni.previewImage({
			urls: [e], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
			current: 0, // 当前显示图片的http链接，默认是第一个
		})
	}
</script>




<style scoped lang="scss">
	.suYuan {
		min-height: 100vh;
		background-color: #f4f4f4;
	}

	.sy-item {
		background-color: #fff;
		display: flex;
		gap: 10px;
		flex-direction: column;
		margin: 10px 0;
		padding: 10px;
	}

	.title-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #000;
	}

	.btm-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #000;
	}

	.u-left {
		width: 90px;
		color: #414141;
	}

	.u-right {
		flex: 1;
		color: #0c0c0c;
		word-wrap: break-word;
		word-break: break-all;
	}

	.ulistitem {
		display: flex;
		padding: 0 20px;
		margin-bottom: 6px;
	}

	.ulist {
		display: flex;
		flex-direction: column;
		width: 95%;
		margin: 10px auto;
		padding: 10px 0;
		background: white;
		border-radius: 8px;
		font-size: 15px;
	}

	.line {
		width: 5px;
		height: 20px;
		background: #5BC267;
		border-radius: 2px;
		position: relative;
		top: 10px;
		left: 10px;
		margin-bottom: -10px;
	}
</style>