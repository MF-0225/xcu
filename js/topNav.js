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
var topNavUrlArr = ['index.html','gallery.html','map.html','aboutUs.html'];
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
		window.location.href = topNavUrlArr[this.aa];
	}
}