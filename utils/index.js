
//四舍五入方法，num为处理的数值，point为保留位数
const toFixed = (num, point=2) => {
	//取要保留位数后的一位
	var endNum = parseInt(num * Math.pow(10, (point + 1))) % 10;
	if (endNum <= 4) {
		return parseInt(num * Math.pow(10, point)) / Math.pow(10, point);
	} else {
		return (parseInt(num * Math.pow(10, point)) + 1) / Math.pow(10, point);
	}
}
// 四舍五入
const roundItOff = (num, decimal = 2) => {
	num = num.toString()
	const index = num.indexOf('.')
	if (index !== -1) {
		num = num.substring(0, decimal + index + 1)
	} else {
		num = num.substring(0)
	}
	//截取后保留两位小数
	return parseFloat(num).toFixed(decimal)
}


uni.$toFixed = toFixed