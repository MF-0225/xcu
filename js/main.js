/*try {
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		alert(1)
	} else {
		//    window.location.href = "index.html"
		//地址可以是相对路径或绝对路径
	}
} catch(e) {}*/

var mySwiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	loop: true,
	// 如果需要分页器
	pagination: '.swiper-pagination',
	// 如果需要前进后退按钮
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	//水平轮播
	direction: 'horizontal',
	//自动播放
	autoplay: 5000,
	//播放速速
	speed: 2000,
	//分页器点击切换
	paginationClickable: true,
	//用户sweep操作后可以继续轮播
	autoplayDisableOnInteraction: false,
});

/*导航栏鼠标hover事件*/

var outer = document.getElementById("outer"),
	mvList = document.getElementById("mvList"),
	lis = outer.getElementsByTagName("li"),
	timer = null,
	flag = 0;

function clear() {
	for(var i = 0; i < lis.length; i++) {
		lis[i].className = "";
	}
}

function move(n) {
	var s = 0,
		maxS = 50,
		begin = mvList.offsetLeft;
	end = n * lis[0].offsetWidth,
		change = end - begin;
	clearInterval(timer);
	timer = setInterval(function() {
		s++;
		if(s >= maxS) {
			clearInterval(timer);
		}
		mvList.style.left = Tween.Bounce.easeOut(s, begin, change, maxS) + "px";
	}, 10);
}
var urlArr = ['index.html', 'gallery.html', 'map.html', 'aboutUs.html'];
for(var i = 0; i < lis.length; i++) {
	lis[i].aa = i;
	lis[i].onmouseover = function() {
		clear();
		this.className = "active";
		move(this.aa);
	}

	lis[i].onmouseout = function() {
		clear();
		lis[flag].className = "active";
		move(flag);
	}

	lis[i].onclick = function() {
		window.location.href = urlArr[this.aa];
	}
}

/*控制滚轮滑到视频播放部分，播放视频*/
var videos = document.getElementById("videos"),
	returnTop = document.getElementById("returnTop"),
	topBox = document.getElementById("topBox"),
	memoirs = document.getElementById("memoirs"),
	ps = memoirs.getElementsByTagName("p"),
	photoWall = document.getElementById('photoWall');

window.onscroll = function(e) {
	var e = e || window.event;
	var h1 = document.documentElement.scrollTop || document.body.scrollTop;
	var h2 = document.documentElement.clientHeight;
	try {
		if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
			if(getTop(videos) <= h1 + h2) {
//				videos.play();
				returnTop.style.right = 10 + "px"; //返回顶部按钮出现
			} else {
				returnTop.style.right = -50 + "px"; //返回顶部按钮消失
			}
		} else {
			if(getTop(videos) <= h1 + h2) {
				videos.play();
				returnTop.style.right = 10 + "px"; //返回顶部按钮出现
			} else {
				returnTop.style.right = -50 + "px"; //返回顶部按钮消失
			}
		}
	} catch(e) {}

	/*if(getTop(videos) <= h1 + h2) {
		videos.play();
		returnTop.style.right = 10 + "px"; //返回顶部按钮出现
	} else {
		returnTop.style.right = -50 + "px"; //返回顶部按钮消失
	}*/

	/*滚轮滑动控制文字飞入*/
	if(getTop(memoirs) <= h1 + h2) {
		ps[0].className = "animationL";
		ps[0].innerHTML = "又到一年毕业季，校园里四年生活的点点滴滴，你都有记录吗？";
		ps[2].className = "animationL";
		ps[2].innerHTML = "的见证。";
		ps[4].className = "animationL";
		ps[4].innerHTML = "让我们用心记录下这些曾经度过青春的地方吧！";

		setTimeout(function() {
			ps[1].className = "animationR";
			ps[1].innerHTML = "毕业后各自奔向远方，留下的除了脑海中回忆就是那些角角落落有你、有他、还有她";
			ps[3].className = "animationR";
			ps[3].innerHTML = "你是否用心的、美美的和每一个记忆深刻的地方合影呢？";
		}, 1000);
	}
}

/*返回顶部*/
returnTop.onclick = function() {
	var a = 0;
	var maxS = 100;
	var start = document.documentElement.scrollTop || document.body.scrollTop;
	var end = 0;
	var change = end - start;

	timer = setInterval(function() {
		a++;
		if(a >= maxS) {
			clearInterval(timer);
		}
		document.documentElement.scrollTop = Tween.Bounce.easeOut(a, start, change, maxS);
		document.body.scrollTop = Tween.Bounce.easeOut(a, start, change, maxS);
	}, 15);
}

/*点击放大图片*/
var hidBoxs = document.getElementsByClassName("hid_box"),
	mark = document.getElementById('mark'),
	markImg = document.getElementById('markImg');
for(var i = 0; i < hidBoxs.length; i++) {
	hidBoxs[i].index = i;
	hidBoxs[i].onclick = function() {
		mark.style.display = "flex";
		markImg.src = "img/00" + (this.index + 1) + ".jpg";
	}
}
/*点击蒙层，蒙层消失*/
mark.onclick = function() {
	this.style.display = "none";
	markImg.style.width = 900 + "px";
	markImg.style.height = 600 + "px";
}
/*阻止冒泡*/
markImg.onclick = function(e) {

	var e = e || window.event;
	if(e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
}
/*滚轮滚动放大*/
markImg.onmousewheel = zoom;
markImg.addEventListener('DOMMouseScroll', zoom, false);
var markImgWidth = 900;
var markImgHeight = 600;

function zoom(e) {
	var e = e || window.event;
	/*阻止默认事件*/
	if(e.preventDefault) {
		e.preventDefault(); //非IE
	} else {
		e.returnValue = false; //IE
	}

	if(e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}

	if(e.detail) {
		//火狐
		if(e.detail > 0) {
			markImgWidth -= 20;
			markImgHeight -= 15;
		} else {
			markImgWidth += 20;
			markImgHeight += 15;
		}
	} else {
		//非火狐
		console.log(1);
		if(e.wheelDelta > 0) {

			markImgWidth += 20;
			markImgHeight += 15;
		} else {
			markImgWidth -= 20;
			markImgHeight -= 15;

		}
	}
	markImg.style.width = markImgWidth + "px";
	markImg.style.height = markImgHeight + "px";

}
/*返回标签到body顶部的距离*/
function getTop(obj) {
	var t = 0,
		start = obj;
	while(obj) {
		if(obj == start) {
			t += obj.offsetTop;
			obj = obj.offsetParent;
		} else {
			t += obj.offsetTop + obj.clientTop;
			obj = obj.offsetParent;
		}
	}
	return t;
}