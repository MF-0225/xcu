/*修改topNav*/
flag = 3;
mvList.style.left = 3 * lis[0].offsetWidth + 'px';
 
var aboutUsclientW = document.documentElement.clientWidth,
	aboutUsclientH = document.documentElement.clientHeight,
	abuBox = document.getElementById('abuBox'),
	particles_js = document.getElementById('particles-js');
particles_js.style.position = 'fixed';
/*打开网页直接把获取到的浏览器窗口宽高赋值给背景的宽高*/
particles_js.style.height = aboutUsclientH + 'px';
particles_js.style.width = aboutUsclientW + 'px';
/*打开网页，获取浏览器窗口高度来设置left、top的值*/
abuBox.style.left = (aboutUsclientW - abuBox.offsetWidth) / 2 + 'px';
abuBox.style.top = (aboutUsclientH - abuBox.offsetHeight) / 2 + 'px';
window.onresize = function() {
	/*浏览器窗口发生变化时候，刷新浏览器窗口值大小*/
	aboutUsclientW = document.documentElement.clientWidth;
	aboutUsclientH = document.documentElement.clientHeight;
	/*修改背景的大小*/
	particles_js.style.height = aboutUsclientH + 'px';
	particles_js.style.width = aboutUsclientW + 'px';
	/*修改填写区域的left、top值，使其居中*/
	abuBox.style.left = (aboutUsclientW - abuBox.offsetWidth) / 2 + 'px';
	abuBox.style.top = (aboutUsclientH - abuBox.offsetHeight) / 2 + 'px';

}

/*控制输入框样式*/
var inp1 = document.getElementById('inp1'),
	inp2 = document.getElementById('inp2'),
	userWords = document.getElementById('userWords');
inp1.onfocus = function() {
	if(this.value == '姓名') this.value = '';
	this.style.color = 'aqua';

}
inp1.onblur = function() {
	if(this.value == '') {
		this.value = '姓名';
		this.style.color = 'gray';
	}
}
inp2.onfocus = function() {
	if(this.value == 'Email') this.value = '';
	this.style.color = 'aqua';

}
inp2.onblur = function() {
	if(this.value == '') {
		this.value = 'Email';
		this.style.color = 'gray';
	}
}
userWords.onfocus = function() {
	if(this.value == '您的意见，就是对我们最大的支持!') this.value = '';
	this.style.color = 'aqua';

}
userWords.onblur = function() {
	if(this.value == '') {
		this.value = '您的意见，就是对我们最大的支持!';
		this.style.color = 'gray';
	}
}