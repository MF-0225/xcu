
var vistaId = "23101106130831121654400"; //街景ID
var mapMmyList = document.getElementById('mapMyList'),
	mapLis = mapMmyList.getElementsByTagName('li');

/*创建街景ID数组*/
var arr = ["23101106130831121654400", "23101106130831120440700", "23101106130831105540900", "23101106130831114420100", "23101106130831114739000"];

for(var i = 0; i < mapLis.length; i++) {
	mapLis[i].index = i;
	mapLis[i].onclick = function() {
		vistaId = arr[this.index];
		setTimeout(init, 1);
	}
}

function init() {
	/*修改topNav*/
	flag = 2;
	mvList.style.left = 2 * lis[0].offsetWidth + 'px';
	// 创建街景
	var h = document.documentElement.clientHeight,
		pano_container = document.getElementById('pano_container');
	pano_container.style.height = h + 'px';

	pano = new qq.maps.Panorama(document.getElementById('pano_container'), {
		"pano": vistaId,
		"pov": {
			heading: 0,
			pitch: 0
		}
	});
}