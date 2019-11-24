import axios from 'axios';
import { Message } from 'element-ui';
import qs from 'Qs';
import { getUrl } from '../utils/common.js';
import Cookies from 'js-cookie';
import Router from '../router'
import Vue from 'vue';

axios.defaults.baseURL = getUrl('');
axios.defaults.withCredentials = true;


//http request 拦截器
axios.interceptors.request.use(
  config => {

    if (Cookies.get('isUploadImg')) {
      config.headers = {
        'Content-Type': 'multipart/form-data',
      }
    } else {
      config.data = qs.stringify(config.data);
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    }

    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code == 4001) {
      Router.push({
        path: '/login'
      })
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}



// 封装websocket
// var isfirst = false  //是否第一次连接成功
export function WebSocketConnect(areaid, fn, closefn) {
  var url = getUrl('../Ws/VehMonitor')
  // var url = 'http://192.168.2.252:8080/Ws/VehMonitor'
  if (url.indexOf('https://') > -1) { url = 'wss' + url.substring(5) }
  else if (url.indexOf('http://') > -1) { url = 'ws' + url.substring(4) };

  var timer
  var index = 0
  var socket = new WebSocket(url);
  socket.onopen = function (msg) {
    console.log('open')
    var o = { cmd: 1, data: areaid };
    var s = JSON.stringify(o);
    socket.send(s)
    Vue.prototype.$socket = socket
  };
  socket.onmessage = function (evt) {
    // console.log(evt.data)
    console.log('onmessage')
    if (evt.data != "") { //返回数据不为空时
      var data = evt.data
      data = JSON.parse(data)
      var cmd = data.cmd
      if (cmd != 0) {
        var viditem = JSON.parse(data.data)
        fn(cmd, viditem)
      }
    }
    if (index == 0) {
      //维持心跳
      timer = setInterval(function () {
        socket.send(JSON.stringify({ cmd: 0 }))
      }, 30000)
      index = index + 1
    }
  };
  socket.onclose = function (msg) {
    clearInterval(timer)
    console.log('onclose')
    closefn(areaid)
  };
  socket.onerror = function (msg) {
    console.log('onerror')
  };
}

