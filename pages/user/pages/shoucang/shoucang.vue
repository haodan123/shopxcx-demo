<template>
	<view class="scPage">
		<view class="scHeader">
			<view class="canBuy">
				<view @tap="onChangeSelected()">
					<uni-icons v-if="selected" type="circle-filled" color="#76C071" size="30" />
					<uni-icons v-else type="circle" size="30" color="#999" />
				</view>
				仅看可售
			</view>

			<view class="cart" @click="toCart">
				<image src="/static/tabbar/gwc.png" mode=""></image>
				购物车
			</view>
		</view>

		<view class="scList">
			<view class="scItem" v-for="item in 4" :key="item">
				<view class="img">
					<image src="../../static/gg.png" mode=""></image>
				</view>
				<view class="scInfo">
					<view class="title">
						标题
					</view>
					<view class="uitls">
						<view class="money">
							<text style="color: red;">￥{{20.00}}/桶</text>
						</view>
						<view class="icons">
							<image @click="deletGoods(item)" src="@/static/user/shanchu.png" mode=""></image>
							<image @click="addGoods(item)" src="@/static/tabbar/gwc.png" mode=""></image>

						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- trash -->
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
	const selected = ref(false)

	// 选中可售
	const onChangeSelected = () => {
		selected.value = !selected.value
	}
	
	// 删除收藏
	const deletGoods = ()=>{
		uni.$msgBox('删除')
	}
	// 加入购物
	const addGoods = ()=>{
		uni.$msgBox('加入')
	}
	
	// 跳转到购物车
	const toCart = ()=>{
		uni.switchTab({
			url:'/pages/tabBar/cart/cart'
		})
	}
</script>

<style scoped lang="scss">
	.scPage {
		padding: 10px;
	}

	.scHeader {
		margin-bottom: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.canBuy {
			display: flex;
			align-items: center;
			gap: 10px;
		}

		.cart {
			display: flex;
			align-items: center;
			gap: 10px;

			image {
				width: 30px;
				height: 30px;
			}
		}
	}


	.scList {
		padding: 10px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		background-color: #fff;
	}

	.scItem {
		display: flex;
		gap: 10px;
		// align-items: center;
		border-bottom: 1px solid #ccc;
padding-bottom: 8px;

		.img {
			width: 80px;
			height: 80px;

			image {
				width: 100%;
				height: 100%;
				border-radius: 10px;
			}
		}

		.scInfo {
			color: #000;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex: 1;

			.uitls {
				display: flex;
				justify-content: space-between;

				.icons {
					display: flex;

					gap: 10px;

					image {
						width: 20px;
						height: 20px;
					}
				}
			}
		}
	}
</style>