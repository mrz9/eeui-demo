"use strict";

/**
 * appboard不支持模块化加载，一个个拼进来
 */
var eeui = app.requireModule('eeui');
var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');
/**
 * 封装toast函数，方便统一管理
 * @param {*} message 消息内容
 * @param {*} params eeui.toast封装参数
 */

var toast = function toast(message, params) {
  if (!String(message).trim() || message == 'AJAX_CANCAL') return false; // 安卓这里颜色不支持rgba,要区分处理下

  var defaultOption = {
    gravity: 'middle',
    backgroundColor: WXEnvironment.platform == 'iOS' ? 'rgba(0,0,0, .75)' : '#292929'
  };
  toString.call(params) !== "[object Object]" && (params = {});
  eeui.toast(Object.assign({
    message: message
  }, defaultOption, params)); // createToastInstance(message)
};
/**
 * 封装alert函数，方便统一管理
 * @param {*} message 消息内容
 * @param {*} params eeui.toast封装参数
 */


var alert = function alert(message, params) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  if (!String(message).trim() || message == 'AJAX_CANCAL') return false;
  toString.call(params) !== "[object Object]" && (params = {});
  eeui.alert(Object.assign({
    message: message
  }, params), callback);
};
/**
 * 模拟toast实例
 * @param {*} message 
 */


function createToastInstance(message) {
  var document = weex.document;
  var wrap = document.createElement('div');
  wrap.setStyle('position', 'fixed');
  wrap.setStyle('top', 0);
  wrap.setStyle('left', 0);
  wrap.setStyle('right', 0);
  wrap.setStyle('bottom', 0);
  wrap.setStyle('alignItems', 'center');
  wrap.setStyle('justifyContent', 'center');
  var div = document.createElement('div');
  div.setStyle('backgroundColor', 'rgba(0,0,0, .75)');
  div.setStyle('paddingTop', 20);
  div.setStyle('paddingLeft', 30);
  div.setStyle('paddingRight', 30);
  div.setStyle('paddingBottom', 20);
  div.setStyle('maxWidth', 600);
  div.setStyle('borderRadius', '20px');
  div.setStyle('opacity', 0);
  div.setStyle('transform', 'scale(0.8)');
  div.setStyle('transitionDuration', '0.3s');
  div.setStyle('transitionProperty', 'transform, opacity');
  div.setStyle('transitionTimingFunction', 'cubic-bezier(0.25, 0.1, 0.25, 1.0)');
  var text = document.createElement('text');
  text.setAttr('value', message);
  text.setStyle('fontSize', 32);
  text.setStyle('color', '#ffffff');
  div.appendChild(text);
  wrap.appendChild(div);
  document.body.appendChild(wrap);
  setTimeout(function () {
    div.setStyle('opacity', 1);
    div.setStyle('transform', 'scale(1)');
  }, 200);
  setTimeout(function () {
    animation.transition(div, {
      styles: {
        transform: 'scale(0.8)',
        opacity: 0
      },
      duration: 300,
      //ms
      timingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
      needLayout: false,
      delay: 0 //ms

    }, function () {
      document.body.removeChild(wrap);
    });
  }, 1500);
}
/**
 * 缓存对象，
 * freeze 不会被用户清空
 * normal 会被用户清空
 */


var $Caches = function () {
  var KEYMAP = {
    freeze: "app_freeze",
    // 不随用户清空缓存被清除
    normal: "app_normal"
  }; // 返回freeze缓存

  var getFreeze = function getFreeze(key) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var freeze = eeui.getCaches(KEYMAP.freeze, {}); //获取对呀的key

    if (key) {
      return typeof freeze[key] !== 'undefined' ? freeze[key] : defaultValue;
    }

    return freeze;
  }; // 添加freeze缓存


  var setFreeze = function setFreeze(key, value) {
    if (String(key).trim()) {
      var freeze = getFreeze();
      freeze[key] = value;
      eeui.setCaches(KEYMAP.freeze, freeze);
    }
  }; // 删除freeze缓存


  var delFreeze = function delFreeze(key) {
    if (String(key).trim()) {
      var freeze = getFreeze();

      if (typeof freeze[key] !== 'undefined') {
        delete freeze[key];
        eeui.setCaches(KEYMAP.freeze, freeze);
      }
    }
  }; // 添加普通缓存


  var set = function set(key, value) {
    if (String(key).trim()) {
      var normal = get();
      normal[key] = value;
      eeui.setCaches(KEYMAP.normal, normal);
    }
  }; // 获取普通缓存


  var get = function get(key) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var normal = eeui.getCaches(KEYMAP.normal, {}); //获取对呀的key

    if (key) {
      return typeof normal[key] !== 'undefined' ? normal[key] : defaultValue;
    }

    return normal;
  }; // 获取普通缓存


  var del = function del(key) {
    if (String(key).trim()) {
      var normal = get();

      if (typeof normal[key] !== 'undefined') {
        delete normal[key];
        eeui.setCaches(KEYMAP.normal, normal);
      }
    }
  }; // 清除缓存，可清除freeze缓存


  var clean = function clean() {
    var needCleanFreeze = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (needCleanFreeze) {
      eeui.clearAllCaches();
    } else {
      var freeze = getFreeze();
      eeui.clearAllCaches();
      eeui.setCaches(KEYMAP.freeze, freeze);
    }
  };

  return {
    getFreeze: getFreeze,
    setFreeze: setFreeze,
    delFreeze: delFreeze,
    set: set,
    get: get,
    del: del,
    clean: clean
  };
}();
/**
 * 封装一个全局$tools对象，方便页面调用
 */


var $tools = function () {
  // 封装logout方法
  var logout = function logout() {
    // 触发全局事件
    $emit('logout', {
      type: 'logout'
    }); // 清除所有缓存

    $Caches.delFreeze('user');
    $Caches.delFreeze('uid');
    $Caches.delFreeze('token');
    $Caches.clean();
  }; // 获取当前登录用户的uid


  var getUid = function getUid() {
    return $Caches.getFreeze('uid', '');
  }; // 获取当前登录用户


  var getUser = function getUser() {
    return $Caches.getFreeze('user', false);
  }; // 获取token


  var getToken = function getToken() {
    return $Caches.getFreeze('token', '');
  }; // 监听全局事件


  var $on = function $on(name) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var AppGlobalChannel = new BroadcastChannel("APP_GLOBAL_".concat(name));

    AppGlobalChannel.onmessage = function (e) {
      typeof callback === 'function' && callback(e.data);
    };
  }; // 监听触发全局事件


  var $emit = function $emit(name, params) {
    var AppGlobalChannel = new BroadcastChannel("APP_GLOBAL_".concat(name));
    AppGlobalChannel.postMessage(params);
  }; // 关闭本页面的该频道监听


  var $off = function $off(name) {
    var AppGlobalChannel = new BroadcastChannel("APP_GLOBAL_".concat(name));
    AppGlobalChannel.close();
  };

  return {
    /**
     * 添加一个全局的vue事件传提对象
     */
    $bus: new Vue(),
    getUid: getUid,
    getUser: getUser,
    getToken: getToken,
    logout: logout,
    $on: $on,
    $emit: $emit,
    $off: $off
  };
}();