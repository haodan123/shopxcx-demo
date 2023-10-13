<template>
	<view>
		<view>
			<map :id="maps" :latitude="latitude" :longitude="longitude" :markers="covers"
				style="width: 100%; height: 400rpx;"></map>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		onMounted,ref
	} from "vue";
	const props = defineProps({
		jid: {
			type: String,
			default: ''
		},
		wid: {
			type: String,
			default: ''
		}
	})
	const maps = ref('1')
	const markers = ref([])
	const tu = '@/pages/suyuan/static/icon/biaodian.png'
	const latitude = ref(30.41)
	const longitude = ref(104.55)
	const covers = ref([])

	onMounted(() => {
		// getditu()
	})

	const getditu = () => {
		console.log(props.wid, props.jid)
		// this.longitude= this.jid,
		latitude.value = props.wid
		longitude.value = props.jid
		covers.value = [{
			latitude: wid.value,
			longitude: jid.value,
			iconPath: '@/pages/suyuan/static/icon/biaodian.png'
		}]
	}
</script>


<style scoped lang="scss">

</style>