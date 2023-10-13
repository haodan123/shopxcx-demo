<template>
	<view class="shopping">
		<view class="search">
			<uv-search @custom="search" v-model="keyword" @search="search" :showAction="true" actionText="搜索"
				:animation="true">
			</uv-search>
		</view>
		<view class="shoptypeBox">
			<!-- <scroll-view scroll-x> -->
			<uv-scroll-list :indicator="false">

				<view class="shoptype">
					<view class="typeItem" v-for="(item,index) in 10" :key="index" @click="tapTopBar(index)">
						<view class="typeItemimg">
							<image class="img" src="../../../static/bg1.jpg" mode=""></image>
						</view>
						<view class="typeItemBtm" :class="{topActive:index==topActive}">
							果蔬鲜花
						</view>
					</view>

				</view>
			</uv-scroll-list>

			<!-- </scroll-view> -->
			<view class="typeAll" @click="open">
				<!-- 全部 -->
				<text class="mt">全</text>
				<text>部</text>
				<uni-icons type="download" color="#000" size="15"></uni-icons>
			</view>
		</view>



		<view class="layout">

			<view class="layout-left">
				<view class="aside-item" @click="doAside(item.id)" :class="{'active':item.id==leftActive}"
					v-for="item in leftArr" :key="item.id">
					{{item.name}}
				</view>
			</view>
			<view class="layout-right">
				<block v-if="list.length!==0">
					<view class="shop-item" v-for="item in list" :key="item.id" @click="tospGoods(item)">
						<image src="@/static/bg1.jpg" mode=""></image>
						<view class="shop-box">
							<view class="title">
								{{'花生油每桶5L'}}
							</view>
							<view class="info">
								<view class="price">
									￥{{1000}}
								</view>
								<view class="btn">
									<uni-icons type="star-filled" @click="isLike(item.id)" v-if="true" color="#ffca3e"
										size="30"></uni-icons>
									<uni-icons v-else type="star" @click="isLike(item.id)" size="30"></uni-icons>
									<uni-icons @click="addCart(item.id)" type="plus-filled" color="#76C071" size="30"></uni-icons>

								</view>
							</view>


						</view>
					</view>
				</block>
				<uv-empty v-else mode="list" icon="https://cdn.uviewui.com/uview/empty/list.png"></uv-empty>

			</view>
		</view>
		<typePopup :active="topActive" :show='popup' @useType="useType" @close="close"></typePopup>

	</view>
</template>


<script setup>
	import typePopup from "@/components/typePopup/typePopup.vue"
	// import typePopup from "./components/typePopup.vue"
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		ref
	} from "vue";

	const topActive = ref(0) //上面的选中

	// 弹窗的选中
	const useType = (index) => {
		topActive.value = index
		close()

	}
	// 点击上方
	const tapTopBar = async (index) => {
		topActive.value = index
	}

	const popup = ref(false) //弹窗
	const keyword = ref('') //搜索值
	const leftActive = ref(0) //左边的选中
	const leftArr = ref([{
			name: '蔬菜种子',
			id: 0
		},
		{
			name: '水果种苗',
			id: 1
		},
		{
			name: '农具租赁',
			id: 2
		},
		{
			name: '研学体验',
			id: 3
		}
	])
	const list = ref([1]) //右边的数据

	onShow(() => {
		// console.log(theme);
	})
	// 点击了喜欢
	const isLike = (item) => {
		uni.showToast({
			title: '点击了喜欢',
			icon: 'none'
		})
	}
	// 点击了喜欢
	const addCart = (item) => {
		uni.showToast({
			title: '点击了加入购物车',
			icon: 'none'
		})
	}

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

	
	// 去商品详情页
	const tospGoods = (item)=>{
		uni.navigateTo({
			url:`/pages/goods/pages/spGoods/spGoods?id=${12}`
		})
	}

	const open = () => {
		popup.value = true
	}
	const close = () => {
		popup.value = false
	}
</script>


<style lang="scss">
	.search {
		background-color: #fff;
		padding: 10px;
	}

	.shopping {
		// background-color: #f4f4f4;
		min-height: 100vh;
	}

	.layout {
		display: flex;
		height: 100%;
		min-height: calc(100vh - 50px);

		.layout-left {
			width: 120px;
			min-height: calc(100vh - 50px);
			position: relative;
			background-color: #faf6fc;
			border-right: 1px solid #ccc;
			// background-color: red;
		}

		.layout-right {
			min-height: calc(100vh - 50px);
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



	.shop-item {
		// border: 1px solid #ccc;
		display: flex;
		// padding: 5px;
		border-radius: 8px;
		gap: 5px;
		// align-items: center;

		image {
			width: 80px;
			height: 80px;
			border-radius: 10px;
		}

		.shop-box {
			flex: 1;
			padding: 5px;
			display: flex;
			flex-direction: column;
			// align-items: center;
			justify-content: space-between;
			gap: 5px;
			border-bottom: 1px solid #ccc;
		}

		.title {
			color: #000;
		}


		.text {
			color: #ccc;
		}

		.info {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.price {
				color: red;
			}

		}

		.btn {
			padding: 5px 0px;
			color: #fff;
			// margin: 0 auto;
		}
	}

	.shoptypeBox {
		position: relative;
		border-bottom: 1px solid #ccc;
		padding-top: 10px;

		.typeAll {
			width: 30px;
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: #fff;
			display: flex;
			align-items: center;
			flex-direction: column;
			font-size: 13px;
			border-left: 1px solid #ccc;

			.mt {
				margin-top: 10px;
			}
		}
	}

	.shoptype {

		// background-color: #faf6fc;
		// height: 50px;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 33px 0 10px;
		gap: 10px;
		// position: relative;

		white-space: nowrap;


		.typeItem {
			// display: inline-block;  //2、滚动区域里的每一个子元素设置为行内块元素
			display: flex;
			flex-direction: column;
			gap: 5px;
			align-items: center;
			justify-content: center;

			.typeItemTop {}

			.typeItemimg {
				width: 30px;
				height: 30px;

				.img {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.typeItemBtm {
				color: #000;
				font-size: 12px;

			}

			// 选中上面的选项
			.topActive {
				// color: #50AA38;
				color: #fff;
				border-radius: 8px;
				padding: 0 3px;
				background-color: #50AA38;
			}

			&:last-child {
				// padding-right: 33px;
			}
		}



	}

	.popupBox {
		height: 100vh;
		position: fixed;
		top: 54px;
		left: 0;
		right: 0;

		.popupContent {
			// height: 30vh;
			background-color: #fff;
			border-bottom-left-radius: 8px;
			border-bottom-right-radius: 8px;
			display: flex;
			flex-direction: column;

			.allName {
				padding-left: 20px;
			}

			.contentInfo {
				display: grid;
				grid-template-columns: repeat(5, 1fr);
				gap: 10px;

				.contentItem {

					// width: calc(100% / 5);
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					margin-bottom: 10px;

					.image {
						border-radius: 50%;

						width: 50px;
						height: 50px;

						image {
							border-radius: 50%;
							width: 100%;
							height: 100%;
						}
					}

					.text {
						margin-top: 5px;
						text-align: center;
						font-size: 12px;
					}
				}
			}

			.contentClose {
				border-top: 1px solid #ccc;
				// height: 30px;
				text-align: center;
				padding: 7px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.mask {
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
		}

		.masknone {
			height: 0%;
			background-color: rgba(0, 0, 0, 0);
		}

	}
</style>