import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import pinia from "@/stores/index"
import {uploadUrl,imgUrl} from "@/config/global-config.js"
import '@/network/request.js'
import '@/utils/index.js'

// uni.getSystemInfoSync().safeAreaInsets.bottom
uni.$safeTop = uni.getSystemInfoSync().safeAreaInsets.top
uni.$safeBtm = uni.getSystemInfoSync().safeAreaInsets.bottom

uni.$uploadUrl=uploadUrl
uni.$imgUrl=imgUrl


uni.$msgBox = (text)=>{
	uni.showToast({
		title:text,
		icon:'none'
	})
}



export function createApp() {
	const app = createSSRApp(App)




	app.use(pinia);
	return {
		app,
		pinia
	}
}
// #endif