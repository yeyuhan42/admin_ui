import axios from 'axios';

export function getUrl(url) {;
	var urls = document.location.protocol + '//192.168.2.251:8080/Web';
	if(document.location.hostname == 'open.manage.xiaobeibike.com') {
		urls = document.location.protocol + '//open.api.xiaobeibike.com/Web';
	} else if(document.location.hostname == 'localhost' ){
		urls = document.location.protocol + '//192.168.2.251:8080/Web';
	}

	if(url) {
		if(url.indexOf('../') == 0) {
			urls = urls.substring(0, urls.length - 4) + url.substring(2);
		} else {
			urls = urls + url;
		}
	}

	return urls
}
//获取cookie、
export function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg))
		return(arr[2]);
	else
		return null;
}

//设置cookie,增加到vue实例方便全局调用
export function setCookie(c_name, value, expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};

//删除cookie
export function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if(cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};

