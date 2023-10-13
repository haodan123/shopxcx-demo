<template>
	<view class="homePage">

		<view class="layoutry">

			<view class="layout-left">
				<view class="aside-item" @click="doAside(item.id)" :class="{'active':item.id==leftActive}"
					v-for="item in leftArr" :key="item.id">
					{{item.name}}
				</view>
			</view>
			<view class="layout-right">
				<view class="search">
					<uv-search @custom="search" v-model="keyword" @search="search" :showAction="true" actionText="搜索"
						:animation="true">
					</uv-search>
				</view>
				<block v-if="list.length!==0">
					<view class="shopry-item" v-for="item in 5" :key="item.id">
						<image class="img" src="@/static/bg1.jpg" mode=""></image>
						<view class="shopry-box">
							<view class="title">
								{{'花生油每桶5L'}}
							</view>
							<view class="buyBox">
								<view class="price">
									￥{{1000}}
								</view>
								<view class="btn">
									立即认养
								</view>
							</view>


						</view>
					</view>
				</block>
				<uv-empty v-else mode="list" icon="https://cdn.uviewui.com/uview/empty/list.png"></uv-empty>

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
	import bg from "@/static/bg1.jpg"

	const keyword = ref('') //搜索值
	const leftActive = ref(0) //左边的选中

	const leftArr = ref([{
			name: '蔬菜认养',
			id: 0
		},
		{
			name: '水果认养',
			id: 1
		},
		{
			name: '农具认养',
			id: 2
		},
		{
			name: '研学认养',
			id: 3
		}
	])
	const list = ref([1]) //右边的数据

	// 搜索事件
	const search = async (e) => {
		console.log(keyword.value);
		let data = {
			// "classa": leftActive.value,//类目id
			"sname": keyword.value //商品名称
		}
		// const res = await uni.$api.dianshang(data)
		// list.value = res.data
	}
	// 点击左边侧边栏
	const doAside = (id) => {
		leftActive.value = id
		getList()
	}
	// 获取左侧的侧边栏
	const getLeft = async () => {
		// const res = await uni.$api.leimu()
		// leftArr.value = res.data
		// leftActive.value = res.data[0].id
		getList()
	}
	// 获取右边的内容
	const getList = async () => {
		let data = {
			"classa": leftActive.value //类目id
		}
		// const res = await uni.$api.dianshang(data)
		// list.value = res.data
	}
</script>

<style scoped lang="scss">
	.homePage {
		// background-color: #F4F4F4;
		min-height: 100vh;
		display: flex;
		// gap: 10px;
		// flex-direction: column;
	}

	.layoutry {
		display: flex;
		height: 100%;
		min-height: calc(100vh);

		.layout-left {
			width: 120px;
			min-height: calc(100vh);
			background-color: #faf6fc;
			border-right: 1px solid #ccc;
			// background-color: red;
		}

		.layout-right {
			min-height: calc(100vh);
			min-width: calc(100vw - 140px);
			background-color: #fff;
			flex: 1;
			padding: 10px;
		}
	}

	.aside-item {
		position: relative;
		padding: 15px 10px;
		text-align: center;
		color: #000;
		// background-color: #fff;
		background-color: #faf6fc;
	}

	.active {
		color: #50AA38;
		width: 102px;
		position: relative;
		// background-color: #50AA38;
		background-color: #fff;

		&::before {
			content: "";
			height: 30px;
			width: 5px;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			background-color: #50AA38;
		}
	}


	.shopry-item {
		// width: 100%;
		margin-top: 10px;

		.img {
			width: 100%;
			height: 150px;
			border-radius: 10px;
		}

		.shopry-box {
			padding: 10px 0;

			.title {
				color: #000;
			}

			.buyBox {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.price {
					color: red;
				}

				.btn {
					background-color: red;
					border-radius: 20px;
					color: #fff;
					padding: 2px 10px;
				}
			}
		}

	}
</style>