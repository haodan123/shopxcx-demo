<template>
	<view class="kpPage">
		<view class="formContent">
			<uni-forms ref="form" :model="formdata" :rules="rules" labelPosition="left" label-width='80px'>


				<view style="font-size: 16px; color: #000;margin-bottom: 10px;">发票详情:</view>
				<uni-forms-item label="抬头类型:" name="code" required="">
					<view class="flexcenter">

						<uni-data-checkbox selectedColor="#76C071" v-model="formdata.type"
							:localdata="radioArr"></uni-data-checkbox>
					</view>

				</uni-forms-item>

				<!-- 企业单位start -->
				<block v-if="formdata.type==0">

					<uni-forms-item label="公司名称:" name="gsname" required="">
						<uni-easyinput v-model="formdata.gsname" placeholder="请输入公司名称" />
					</uni-forms-item>
					<uni-forms-item label="公司税号:" name="gssh" required="">
						<uni-easyinput v-model="formdata.gssh" placeholder="请输入公司税号" />
					</uni-forms-item>
					<uni-forms-item label="公司地址:">
						<uni-easyinput v-model="formdata.address" placeholder="请输入公司地址" />
					</uni-forms-item>
					<uni-forms-item label="公司电话:">
						<uni-easyinput v-model="formdata.gsphone" placeholder="请输入公司电话" />
					</uni-forms-item>
					<uni-forms-item label="开户行:">
						<uni-easyinput v-model="formdata.khh" placeholder="请输入开户行" />
					</uni-forms-item>
					<uni-forms-item label="开户行账号:">
						<uni-easyinput v-model="formdata.khhzh" placeholder="请输入开户行账号" />
					</uni-forms-item>
				</block>
				<!-- 企业单位end -->

				<!-- 个人start -->
				<block v-if="formdata.type==1">
					<uni-forms-item label="发票抬头:" name="fptt" required="">
						<uni-easyinput v-model="formdata.fptt" placeholder="请输入发票抬头" />
					</uni-forms-item>

					<uni-forms-item label="税号:" name="grsh" required="">
						<uni-easyinput v-model="formdata.grsh" placeholder="请输入税号" />
					</uni-forms-item>
					<uni-forms-item label="开户银行:">
						<uni-easyinput v-model="formdata.khyh" placeholder="请输入开户银行" />
					</uni-forms-item>
					<uni-forms-item label="银行账号:">
						<uni-easyinput v-model="formdata.yhzh" placeholder="请输入银行账号" />
					</uni-forms-item>
					<uni-forms-item label="企业地址:">
						<uni-easyinput v-model="formdata.qyaddress" placeholder="请输入企业地址" />
					</uni-forms-item>
					<uni-forms-item label="企业电话:">
						<uni-easyinput v-model="formdata.qyphone" placeholder="请输入企业电话" />
					</uni-forms-item>
				</block>
				<!-- 个人end -->

				<uni-forms-item label="金额:" required>
					<uni-easyinput v-model="formdata.money" placeholder="根据订单自动计算" disabled />
				</uni-forms-item>
				<view style="font-size: 16px; color: #000;margin-bottom: 10px;">接收方式:</view>
				<uni-forms-item label="电子邮箱:" name="email" required="">
					<uni-easyinput v-model="formdata.email" placeholder="请输入电子邮箱" />
				</uni-forms-item>
				<uni-forms-item label="联系电话:" name="phone" required>
					<uni-easyinput v-model="formdata.phone" placeholder="请输入联系电话" />
				</uni-forms-item>
			</uni-forms>
		</view>


		<view style="height: 50px;">

		</view>
		<!-- <button class="pagebt" @click="submit('form')">保存</button> -->
		<view class="" style="position: fixed;bottom: 10px;left: 10px; right: 10px;z-index: 99;">

			<uv-button type="success" text="保存" @click="submit"></uv-button>
		</view>
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

	const form = ref(null)

	const formdata = ref({
		type: 0, //抬头类型
		gsname: '', //公司名称
		gssh: '', //公司税号
		address: '', //公司地址
		gsphone: '', //公司电话
		khh: '', //开户行
		khhzh: '', //开户行账号
		money: '', //金额
		email: '', //电子邮箱
		phone: '', //联系电话

		fptt: '', //发票抬头
		grsh: '', //税号
		khyh: '', //开户银行
		yhzh: '', //银行账号
		qyaddress: '', //企业地址
		qyphone: '', //企业电话
	})
	const radioArr = ref([{
		text: '企业单位',
		value: 0
	}, {
		text: '个人/非企业单位',
		value: 1
	}])

	const rules = ref({
		gsname: {
			rules: [{
				required: true,
				errorMessage: '请输入公司名称',
			}]
		},
		gssh: {
			rules: [{
				required: true,
				errorMessage: '请输入公司税号',
			}]
		},
		email: {
			rules: [{
				required: true,
				errorMessage: '请输入电子邮箱',
			}]
		},
		phone: {
			rules: [{
				required: true,
				errorMessage: '请输入联系方式',
			}]
		}
	})

	const submit = async () => {
		try {
			await form.value.validate()
		} catch (e) {
			//TODO handle the exception
			console.log(e);
		}


	}
</script>

<style scoped lang="scss">
	.flexcenter {
		display: flex;
		align-items: center;
		height: 100%;
	}

	.kpPage {
		// background-color: #f4f4f4;
		background-color: #fff;
		min-height: 100vh;
		padding: 10px;
	}

	.formContent {
		// background-color: #fff;
		// width: 95%;
		width: 100%;
		// padding: 10px;
		margin: 0 auto;
	}
</style>