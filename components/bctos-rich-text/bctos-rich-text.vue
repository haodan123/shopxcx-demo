<template>
	<view>
		<view v-for="(content, index) in contentArr" :key="index">
			<rich-text :nodes="content"></rich-text>
			<video v-if="videoArr[index] !== null" :src="videoArr[index]" controls :style="{ width }"></video>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		ref,
		watch
	} from "vue";
	const props = defineProps({
		nodes: {},
		width: {
			type: String,
			default: '100%'
		}
	})

	const contentArr = ref([])
	const videoArr = ref([])

	watch(() => props.nodes, () => {
		parseVideo()
	})

onShow(()=>{
	parseVideo()
})
	const parseVideo = () => {
		if (typeof props.nodes != 'string') {
			//不是HTML字符串格式的暂不处理
			contentArr.value[0] = props.nodes;
			videoArr.value[0] = null;
			return false;
		}

		//同步解决如果图片太大超出手机显示界面的问题
		let nodes = props.nodes.replace(/\<img/g, '<img style="max-width:98%!important;height:auto;"');
		let arr = nodes.split('</video>');
		let reg = /<video([\s\S]*)/g;

		for (let i in arr) {
			var item = arr[i];
			var urlMatch = item.match(/<video[\s\S]*src=\"(.*?)\"/);
			if (urlMatch && urlMatch.length > 1) {
				videoArr.value[i] = urlMatch[1];
			} else {
				videoArr.value[i] = null;
			}

			contentArr.value[i] = item.replace(reg, '');
		}
		// this.$forceUpdate()
	}
</script>

<style scoped>

</style>