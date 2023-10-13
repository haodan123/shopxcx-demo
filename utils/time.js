
export const getDate = () => {
	let data = new Date();
	let year = data.getFullYear();
	let month = data.getMonth() + 1;
	let day = data.getUTCDate();
	let hours = data.getHours() < 10 ? "0" + data.getHours() : data.getHours(); //时
	let min = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes(); //分
	let second = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds();
	let datepage = year + "-" + month + "-" + day + ' ' + hours + ":" + min + ":" + second
	return datepage
}
