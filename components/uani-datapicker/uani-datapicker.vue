<template>
	<view>
		<view @click.stop.prevent="openpop()" class="select-box">
			<uni-easyinput disabled-class="custom-disabled-class" :styles="styles" v-model="inputtext"
				:placeholder="placeholder" suffixIcon="arrowdown" disabled />
			<!-- <span class="icon-clear icon1"></span> -->
			<uni-icons v-if="clear&&inputtext" type="clear" color="#c0c4cc" class="icon1" size="22" @click.stop.prevent="clearValue"></uni-icons>

		</view>
		<!-- <uni-popup ref="popup" type="bottom" @maskClick="close()" @touchmove.stop.prevent="preventHandler"> -->
		<view class="uni-data-tree-cover" v-if="isOpened" @click="close"></view>
		<view class="uni-data-tree-dialog" :class="{'uni-data-tree-dialog-show':isOpened}" v-if="isOpened">
			<uni-transition :duration="200" :mode-class="['slide-bottom']" :show='showTrans'>
				<view class="popupbox">
					<view class="title">
						<span style="line-height: 44px;">
							{{placeholder}}
						</span>
					</view>
					<view class="popfor" v-if="poplist.length>0">
						<view v-for="(item,index) in poplist" :key="index">
							<view class="popitem" @click="onchange(item)">
								<uni-icons v-if="modelValue==item.value" type="circle-filled" color="#0062ff" size="20" />
								<uni-icons v-else type="circle" size="20" color="#999" />
								<view class="poptext">
									{{item.text}}
								</view>
							</view>
							<view class="line">
							</view>
						</view>
					</view>
					<view class="poploading" v-if="poplist.length<=0">
						<view class="emptying">
							{{emptytext}}
						</view>
					</view>
				</view>
			</uni-transition>
		</view>
		<!-- </uni-popup> -->
	</view>
</template>

<script setup>
	import {
		nextTick,
		onMounted,
		ref,
		watch
	} from "vue";

	const isOpened = ref(false)
	const showTrans = ref(false)
	const popup = ref()
	const poplist = ref([])
	const inputtext = ref('')
	const isloading = ref(true)
	const isempty = ref(false)
	const emit = defineEmits(['input', 'onSelect', 'click', 'popupclosed', 'update:modelValue'])
	const styles = {
		disableColor: '#fff',
		color: '#000',
		// borderColor: '#2979FF'

	}
	const props = defineProps({
		clear: {
			type: Boolean,
			default: false
		},
		value: { //动态key值 取数组对象的value值
			type: [String, Number],
			default: ''
		},
		modelValue: {
			type: [String, Number],
			default: ''
		},
		defaulttext: { //默认显示的文本
			type: [String, Number],
			default: ''
		},
		custext: { //自定义显示的文本 数组传custext
			type: Boolean,
			default: false
		},
		placeholder: { //默认提示文本
			type: String,
			default: '请选择'
		},
		emptytext: { //空数据显示文本
			type: String,
			default: '无 数 据'
		},
		localdata: { //动态监听数组
			type: Array,
			default: () => []
		},
		saoma: {
			type: Function,
			default: () => {}
		}
	})
	watch(() => props.localdata, (newval, oldval) => {
		poplist.value = newval
		//如果是数组变化为空清除绑定value值
		if (poplist.value.length <= 0) {
			inputtext.value = ''
			emit('input', null)
		}
	}, {
		deep: true
	})
	watch(() => props.modelValue, (newval, oldval) => {
		// console.log(newval);
		const findval = poplist.value.find(item => item.value == newval)
		// console.log(findval);
		// console.log('dddd', newval);
		onchange(findval)
	}, {
		deep: true
	})
	onMounted(() => {
		inputtext.value = props.defaulttext
	})
	const clearValue = () => {
		// console.log(111);
		emit('input', '')
		emit('update:modelValue', '')
		emit('onSelect', '')
		setTimeout(() => {

			close()
		})
	}
	//防止滑动穿透
	const preventHandler = () => {
		return
	}
	const onchange = (e) => {
		// console.log(e);
		let content
		if (!e) {
			// 修改的数据为空时
			inputtext.value = ''
			content = ''
		} else {
			content = e.value
		}
		if (props.custext) {
			inputtext.value = e.custext
		} else {
			nextTick(() => {
				if (e) {
					inputtext.value = e.text
				}
			})
		}



		emit('input', content)
		emit('update:modelValue', content)
		emit('onSelect', e)
		close()
	}

	/**
	 * 点击取消按钮触发
	 * @param {Object} done
	 */
	const close = () => {
		// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
		// ...
		// popup.value.close()
		isOpened.value = false
		showTrans.value = false
		emit('popupclosed') //关闭弹窗事件
	}
	const openpop = () => {
		showTrans.value = true
		isOpened.value = true
		emit('click')
		// popup.value.open()
		poplist.value = props.localdata
	}
</script>


<style lang="scss">
	.icon1 {
		z-index: 99;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 30px;
		// width: 30px;
		// height: 30px;
	}

	.select-box {
		width: 100%;
		position: relative;
	}

	.title {
		width: 100%;
		text-align: center;
		// padding: 0 10px;
	}

	.popfor {
		overflow-y: scroll;
	}

	.uni-data-tree-cover {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .4);
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		z-index: 100;
	}

	.uni-data-tree-dialog {
		position: fixed;
		left: 0;
		/* #ifndef APP-NVUE */
		// top: 20%;
		top: 20%;
		/* #endif */
		/* #ifdef APP-NVUE */
		top: 200px;
		/* #endif */
		right: 0;
		bottom: 0;
		background-color: #FFFFFF;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		z-index: 102;
		overflow: hidden;
		/* #ifdef APP-NVUE */
		width: 750rpx;
		/* #endif */
		transition: top 0.3s ease-in-out;
	}

	.uni-data-tree-dialog-show {
		top: 20%;
		transition: top 0.3s ease-in-out;
	}

	.popupbox {

		// height: 55vh;
		background: white;
		display: flex;
		flex-direction: column;
		padding: 15px 10px;
		border-radius: 15px 15px 0 0;
		// margin-top: 20px;
	}

	.popitem {
		font-size: 16px;
		min-height: 30px;
		padding: 5px 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.poptext {
		margin-left: 5px;
		padding-bottom: 2px;
	}

	.popitem:active {
		background: #f7f7f7;
	}

	.poploading {
		width: 100%;
		height: 100%;
		// position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.emptying {
		color: #7a7a7a;
		font-size: 20px;
		margin-right: 30px;
		margin-bottom: 30px;
	}

	.loading {
		width: 30px;
		height: 30px;
		border: 2px solid #7a7a7a;
		border-top-color: transparent;
		border-radius: 100%;
		margin-right: 30px;
		margin-bottom: 30px;
		animation: circle infinite 0.75s linear;
	}

	.line {
		background: rgba(0, 0, 0, 0.1);
		width: 85%;
		height: 1px;
		margin: 0 auto;
	}

	/* 	// 转转转动画 */
	@keyframes circle {
		0% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.disable {
		&:disabled {
			background-color: #fff !important;
		}
	}

	.uni-easyinput {
		color: #000 !important;
	}

	.uni-easyinput ::v-deep .is-disabled {
		background-color: #fff !important;
		color: #000 !important;
	}

	.custom-disabled-class {
		color: #000;
		background-color: red;
	}
</style>