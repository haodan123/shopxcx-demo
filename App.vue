<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//默认显示主题
			// let dark = uni.getStorageSync('theme') || 'dark';
			// console.log(uni.createSelectorQuery().select('page'));
			// window.document.documentElement.setAttribute("data-theme", dark);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/static/css/iconfont.css";
	@import '@/styles/index.scss';

	
	
	uni-page-body {
		background-color: #F5F5F5 !important;
		min-height: 100% !important;
		height: auto !important;
	}
	page {
		background-color: #efeff4;
		height: 100%;
		font-size: 28rpx;
		/* line-height: 1.8; */
	}
</style>