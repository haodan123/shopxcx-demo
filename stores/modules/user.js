import {
	defineStore
} from 'pinia'

import {
	ref
} from "vue"

export const useUserStore = defineStore('useUser', () => {
	const user = ref()
	const setUser = (val) => {
		user.value = val
	}
	const clearUser = () => {
		user.value = null
	}
	return {
		user,setUser,clearUser
	}
}, {
	persist: {
		storage: {
			getItem(key) {
				return uni.getStorageSync(key)
			},
			setItem(key, value) {
				uni.setStorageSync(key, value)
			},
		},
	},
})