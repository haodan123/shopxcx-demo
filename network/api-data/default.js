import {
	$get,
	$post
} from "@/network/request.js"

// 公共参数
const data1 = {
	// LoginKey: globalData.loginKey,
	// AppType: globalData.appType,
	// SystemID: globalData.systemID,
	// OperatorID: 330
}
export default {
	//登录
	login: data => $post('login', {
		...data1,
		...data
	}),
	// 权限
	module: data => $post('module', {
		...data1,
		...data
	}),
	// 猪栏
	lan: data => $post('lan', {
		...data1,
		...data
	}),
	// 入栏
	rulan: data => $post('rulan', {
		...data1,
		...data
	}),
	
	// 转栏记录
	zhuanlan: data => $post('zhuanlan', {
		...data1,
		...data
	}),
	// 转栏新增
	xzzhuanlan: data => $post('xzzhuanlan', {
		...data1,
		...data
	}),
	// 耳标查询
	zzbianhao: data => $post('zzbianhao', {
		...data1,
		...data
	}), 
	// 防疫新增 
	fyxingzeng: data => $post('fyxingzeng', {
		...data1,
		...data
	}),
	// 防疫 
	dengji: data => $post('dengji', {
		...data1,
		...data
	}),
	// 诊疗记录 
	zhenliao: data => $post('zhenliao', {
		...data1,
		...data
	}),
	// 诊疗新增
	zlxinzeng: data => $post('zlxinzeng', {
		...data1,
		...data
	}),
	// 入库
	ruku: data => $post('ruku', {
		...data1,
		...data
	}),
	// 出库
	chuku: data => $post('chuku', {
		...data1,
		...data
	}),
	// 饲料查询
	siliao: data => $post('siliao', {
		...data1,
		...data
	}),
	// 疫苗查询
	yimiao: data => $post('yimiao', {
		...data1,
		...data
	}),
	// 药物查询
	yaowu: data => $post('yaowu', {
		...data1,
		...data
	}),
	// 存栏查询
	cunlan: data => $post('cunlan', {
		...data1,
		...data
	}),
	// 猪群查询
	zhuqun: data => $post('zhuqun', {
		...data1,
		...data
	}),
	// 猪场查询
	zhuchang: data => $post('zhuchang', {
		...data1,
		...data
	}),
	// 人员查询
	renyuan: data => $post('renyuan', {
		...data1,
		...data
	}),
	// 投喂查询
	touwei: data => $post('touwei', {
		...data1,
		...data
	}),
	// 饲料配方
	siliaopeifang: data => $post('siliaopeifang', {
		...data1,
		...data
	}),
	// 投喂新增
	twxinzeng: data => $post('twxinzeng', {
		...data1,
		...data
	}),
	// 养殖资源
	ziyuan: data => $post('ziyuan', {
		...data1,
		...data
	}),
	// 盘点新增
	pdxinzeng: data => $post('pdxinzeng', {
		...data1,
		...data
	}),
	// 盘点查询
	pandian: data => $post('pandian', {
		...data1,
		...data
	}),
	// 供应商查询
	gys: data => $post('gys', {
		...data1,
		...data
	}),
	// 种猪查询
	zzchaxun: data => $post('zzchaxun', {
		...data1,
		...data
	}),
	// 屠宰
	tuzhai: data => $post('tuzhai', {
		...data1,
		...data
	}),
	// 销售x
	xioashou: data => $post('xioashou', {
		...data1,
		...data
	}),
	// 行业信息
	hangye: data => $post('hangye', {
		...data1,
		...data
	}),
	// 出栏记录
	chulaijil: data => $post('chulaijil', {
		...data1,
		...data
	}),
	// 出栏新增
	chulanxinz: data => $post('chulanxinz', {
		...data1,
		...data
	}),
	// 未出栏的耳标
	weichulan: data => $post('weichulan', {
		...data1,
		...data
	}),
	// 农资类型
	rukuleix: data => $post('rukuleix', {
		...data1,
		...data
	}),
// 入库新增
rukuxinzeng: data => $post('rukuxinzeng', {
		...data1,
		...data
	}),
	// 入库列表
	rukuleix: data => $post('rukuleix', {
		...data1,
		...data
	}),
		//货物名称
		chahuowu: data => $post('chahuowu', {
		...data1,
		...data
	}),
	// 出库新增
	chukuxinzeng: data => $post('chukuxinzeng', {
		...data1,
		...data
	}),
	// 查询许愿
	sssschaxun: data => $post('sssschaxun', {
		...data1,
		...data
	}),
	// 供应商
	caigou: data => $post('caigou', {
		...data1,
		...data
	}),
	//养殖分析
	yangzhifenxi: data => $post('yangzhifenxi', {
		...data1,
		...data
	}),
	// 销售分析
	xiaoshoufx: data => $post('xiaoshoufx', {
		...data1,
		...data
	}),
	// 环控信息
	huankongxinxi: data => $post('huankongxinxi', {
		...data1,
		...data
	}),
}