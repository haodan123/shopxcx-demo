<template>
	<view class="cgq">
		<view class="cgq-item">
			<view class="title">
				土壤温度
			</view>
			<view class="content">
				<view class="left">
					{{srecord||0}}
				</view>
				<view class="right">
					<image src="/static/cgq/trwd.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="cgq-item">
			<view class="title">
				土壤湿度
			</view>
			<view class="content">
				<view class="left">
					{{shumidity||0}}
				</view>
				<view class="right">
					<image src="/static/cgq/trsd.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="cgq-item">
			<view class="title">
				环境温度
			</view>
			<view class="content">
				<view class="left">
					<!-- 30 -->
					{{humidity||0}}
				</view>
				<view class="right">
					<image src="/static/cgq/hjwd.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="cgq-item">
			<view class="title">
				环境温度
			</view>
			<view class="content">
				<view class="left">
					<!-- 30 -->
					{{ record||0}}
				</view>
				<view class="right">
					<image src="/static/cgq/hjsd.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="cgq-item">
			<view class="title">
				二氧化碳浓度
			</view>
			<view class="content">
				<view class="left">
					30
				</view>
				<view class="right">
					<image src="/static/cgq/eyht.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="cgq-item">
			<view class="title">
				光照强度
			</view>
			<view class="content">
				<view class="left">
					30
				</view>
				<view class="right">
					<image src="/static/cgq/gzqd.png" mode=""></image>
				</view>
				
			</view>
		</view>
		<view class="cgq-item">
			<view class="title">
				氨气浓度
			</view>
			<view class="content">
				<view class="left">
					30
				</view>
				<view class="right">
					<image src="/static/cgq/aqnd.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="cgq-item">
			<view class="title">
				PM2.5
			</view>
			<view class="content">
				<view class="left">
					{{pm||0}}
				</view>
				<view class="right">
					<image src="/static/cgq/pm.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="cgq-item">
			<view class="title">
				土壤电导率
			</view>
			<view class="content">
				<view class="left">
				{{ec||0}}
				</view>
				<view class="right">
					<image src="/static/cgq/ddl.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script setup>
	const props = defineProps(['atmosphere','record','humidity','pm','srecord','shumidity','ec'])
</script>


<style lang="scss">
	.cgq {
		background-color: #f4f4f4;
		padding: 5px;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		width: 100%;
	}

	.cgq-item {
		// border: 1px solid #CCCCCD;
		background-color: #fff;
		padding: 10px;
		width: 42%;
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
</style>
