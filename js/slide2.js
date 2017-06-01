/*第二个轮播器*/
var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical',
    loop: true,
	//自动播放
	autoplay: 5000,
	//播放速速
	speed: 2000,
	//用户sweep操作后可以继续轮播
	autoplayDisableOnInteraction: false,
	effect : 'flip',
});