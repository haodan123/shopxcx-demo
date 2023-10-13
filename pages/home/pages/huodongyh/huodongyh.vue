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


		<!-- 内容start -->
		<view class="content">
			<view class="goods-item" v-for="(item, index) in 10" :key="index" @click="tospGoods(item)">
				<image class="img" src="@/static/bg1.jpg"></image>
				<view class="goods-info">
					<view class="goods-title">
						双黄土鸡蛋
					</view>
					<view class="goods-yuan">
						原价: <text class="heng"> 110.00</text>
					</view>

					<view class="goods-numbox">
						<view class="price">
							￥100.00
						</view>
						<view class="greenText" v-if="index%2==0">
							限时优惠
						</view>
						<view class="redText" v-else>
							满减满赔
						</view>
					</view>
				</view>
			</view>
		</view>

	<!-- 内容end -->




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

	const list = ref([]) //右边的数据

	onShow(() => {
		// console.log(theme);
	})


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


	// 获取的内容
	const getList = async () => {
		let data = {
			"classa": topActive.value //类目id
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
		// padding: 10px;
		// background-color: #f4f4f4;
		min-height: 100vh;
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


	// 内容
	.content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
		padding: 10px;

		.goods-item {
			border-radius: 10px;
			overflow: hidden;
			background-color: #F8F8F8;

			.img {
				height: 300rpx;
				// width: 300rpx;
				width: 100%;
			}

			.goods-info {
				padding: 5px;

				.goods-title {
					color: #000;
				}

				.goods-yuan {
					color: #717171;

					.heng {
						text-decoration: line-through;
					}
				}

				.goods-numbox {
					display: flex;
					justify-content: space-between;

					.price {
						color: red;
					}

					.greenText {
						border: 1px solid palegreen;
						color: palegreen;
					}

					.redText {
						border: 1px solid red;
						color: red;
					}
				}


			}
		}
	}
</style>