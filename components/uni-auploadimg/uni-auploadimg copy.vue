<template>
	<view>
		<view class="imagegird">
			<view class="imgitem" v-for="(item,index) in fileList" :key="index">
				<image class="images" :src="item" mode="aspectFill" @click="preimg(index)"></image>
				<uni-icons class="icondel" type="minus-filled" size="25" color="red" @click="delimg(index)"></uni-icons>
			</view>
			<view class="imgitem" v-if="fileList.length<maxsize" @click="addimg">
				<uni-icons type="plusempty" size="30" color="#7a7a7a"></uni-icons>
				<view class="imgtext">选择文件</view>
			</view>
		</view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog content="确定删除此项吗" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name: 'uni-auploadimg',
		props: {
			//文件列表
			fileLists: {
				type: Array,
				default: []
			},
			//上传路径
			action: {
				type: String,
				default: ''
			},
			//最小文件数量
			minsize: {
				type: Number,
				default: 1
			},
			//最大文件数量
			maxsize: {
				type: Number,
				default: 9
			},
			//上传文件类型
			uptype: {
				type: Array,
				default: ['image']
			}
		},
		data() {
			return {
				fileList: this.fileLists,
				deleteindex: null
			};
		},
		created() {

		},
		methods: {
			delimg(index) {
				this.deleteindex = index
				this.open()
			},
			addimg() {
				this.filePic()
			},
			open() {
				this.$refs.popup.open()
			},
			/**
			 * 点击取消按钮触发
			 * @param {Object} done
			 */
			close() {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
				// ...
				this.$refs.popup.close()
			},
			/**
			 * 点击确认按钮触发
			 * @param {Object} done
			 * @param {Object} value
			 */
			confirm() {
				if (this.deleteindex != null) {
					this.fileList.splice(this.deleteindex, 1)
				}
				this.deleteindex = null
				this.$emit('onChange', this.fileList)
				this.$refs.popup.close()
			},
			// 上传图片
			filePic() {
				let _this = this
				uni.chooseMedia({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					mediaType: this.uptype, //文件类型
					success: function(res) {
						console.log(res)
						if (res.tempFiles[0].fileType == "video") {
							_this.uploadImg("video", res.tempFiles[0].tempFilePath, res.tempFiles[0]
								.thumbTempFilePath)
						} else {
							_this.uploadImg("image", res.tempFiles[0].tempFilePath)
						}

					}
				});
			},
			uploadImg(type, path, videopath) {
				uni.showLoading({
					title: '文件上传中'
				})
				let _this = this
				uni.uploadFile({
					url: _this.action,
					filePath: path,
					name: 'file',
					success: (res) => {
						let newRes = JSON.parse(res.data)
						console.log(newRes)
						if (newRes.code == "200") {
							uni.showToast({
								title: '上传成功'
							})
							if (type == "video") {
								let videourl = null
								videourl = newRes.url
								uni.uploadFile({
									url: _this.action,
									filePath: videopath,
									name: 'file',
									success: (res) => {
										let newRes = JSON.parse(res.data)
										// console.log(newRes)

										if (newRes.code == "200") {
											uni.showToast({
												title: '上传成功'
											})


											_this.fileList.push({
												url: videourl,
												preimg: newRes.url,
												type: type
											})


											this.$emit('onChange', _this.fileList)
										} else {
											uni.showToast({
												title: '网络异常，稍后再试'
											})
										}
										uni.hideLoading()
									},
									fail: (res) => {
										uni.hideLoading()
									}
								})
							} else {

								if (newRes.url.startsWith("http://")) {
									// url = url.replace("http://", "https://");
									console.log('http开头');
									newRes.url = newRes.url.replace("http://", "https://");
								}
								// console.log(newRes.url);
								_this.fileList.push(newRes.url)
							}
							// console.log(_this.fileList);
							this.$emit('onChange', _this.fileList)
						} else {
							uni.showToast({
								title: '网络异常，稍后再试'
							})
						}
						uni.hideLoading()
					},
					fail: (res) => {
						uni.hideLoading()
					}
				})

			},
			preimg(index) {
				// uni.previewImage({
				// 	current: index,
				// 	urls: this.fileList
				// })

				wx.previewMedia({
					sources: this.fileList, // 需要预览的资源列表
					current: index, // 当前显示的资源序号
					url: this.fileList[index] // 当前预览资源的url链接
				})
			}
		}
	};
</script>

<style lang="scss">
	.imagegird {
		// width: 100%;
		width: 340px;
		display: grid;
		/*  声明列的宽度  */
		grid-template-columns: repeat(3, 100px);

		// grid-template-rows: 100px 100px 100px;
		/*  声明行间距和列间距  */
		grid-gap: 5px;
		justify-content: center;
	}

	.imgitem {
		width: 100px;
		height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #f0f0f0;
		color: #7a7a7a;
		border-radius: 4px;

		.imgtext {
			margin-top: 5px;
		}

		.images {
			width: 100%;
			height: 100%;
			border-radius: 4px;
		}

		.icondel {
			position: absolute;
			margin-left: 60px;
			margin-bottom: 60px;
			background: white;
			border-radius: 50%;

		}
	}
</style>
