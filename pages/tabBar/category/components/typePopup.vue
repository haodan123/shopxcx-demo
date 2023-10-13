<template>
	<view class="" @touchmove.stop.prevent="moveHandle">
		<!--!!!!!!此页面样式在父组件里修改  否则不生效  原因未知 -->
		<uni-transition @touchmove.stop.prevent="moveHandle" custom-class="popupBox" :mode-class="['fade', 'slide-top']" :duration="300" :show="show">

			<view class="popupContent">
				<view class="allName">
					全部分类 
				</view>
				<view class="contentInfo">
					<view class="contentItem" v-for="(item,index) in 10" :key="index">
						<view class="image">
							<image src="https://cdn.uviewui.com/uview/empty/list.png" mode=""></image>
						</view>
						<text class="text">蔬菜豆制品</text>
					</view>
				</view>
				<view class="contentClose" @click="close">
					点击收起<uni-icons type="top" size="15"></uni-icons>

				</view>
			</view>
			<view class="mask" @touchmove.stop.prevent="moveHandle" :class="[!show?'masknone':'']" @click="close">

			</view>
		</uni-transition>
	</view>


</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		watch
	} from "vue";
	const props = defineProps({
		show: {
			type: Boolean,
			default: false
		}
	})
	const moveHandle=()=> {
				return false
			}
	watch(() => props.show, (new1) => {
		console.log(222, new1);
	})
	const emit = defineEmits(['close'])
	const close = () => {
		emit('close')
	}
</script>

<style scoped lang="scss">
	.popupBox {
		height: 100vh;
		position: fixed;
		top: 54px;
		left: 0;
		right: 0;

		.popupContent {
			height: 30vh;
			background-color: #fff;
			border-bottom-left-radius: 8px;
			border-bottom-right-radius: 8px;
			display: flex;
			flex-direction: column;

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
					// margin-bottom: 10px;

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
				height: 30px;
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