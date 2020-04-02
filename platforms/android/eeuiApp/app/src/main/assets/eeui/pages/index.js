// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
if(typeof eeuiLog=="undefined"){var eeuiLog={_:function(t,e){var s=e.map(function(e){return e="[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e});if(typeof this.__m==='undefined'){this.__m=app.requireModule('debug')}this.__m.addLog(t,s)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}}}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/alert.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/alert.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/mask */ "./src/components/mask.vue");
/* harmony import */ var _components_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_mask__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Mask: _components_mask__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    isTemplate: {
      type: Boolean,
      "default": false
    },
    message: {
      type: String,
      "default": ''
    },
    cancelText: {
      type: String,
      "default": '我再想想'
    },
    okText: {
      type: String,
      "default": '确定'
    },
    // 是否显示取消按钮
    cancel: {
      type: Boolean,
      "default": true
    },
    buttons: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      active: false,
      done: false,
      isIOS: WXEnvironment.platform == 'iOS'
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.isTemplate) {
      this.$refs.mask.show(); // 安卓需要延时，不然动画会卡在某一帧

      if (this.isIOS) {
        this.$nextTick(function () {
          _this.active = true;
        });
      } else {
        setTimeout(function () {
          _this.active = true;
        }, 100);
      }
    }
  },
  methods: {
    // show(content, { cancelText = '我再想想', okText = '确定', cancelCallback = () => {}, okCallback = () => {}} = {}){
    //   this.content = content
    //   this.cancelText = cancelText
    //   this.okText = okText
    //   this.cancelCallback = cancelCallback;
    //   this.okCallback = okCallback;
    //   this.$refs.mask.show();
    //   this.done = false;
    //   this.$nextTick(()=>{
    //     this.active = true;
    //   })
    // },
    stopPropagation: function stopPropagation(e) {
      e.stopPropagation();
    },
    cancelHandler: function cancelHandler() {
      // typeof this.cancelCallback === 'function' && this.cancelCallback()
      this.$emit('cancel');
      this.close();
    },
    okHandler: function okHandler() {
      // typeof this.okCallback === 'function' && this.okCallback()
      this.$emit('ok');
      this.close();
    },
    close: function close() {
      var _this2 = this;

      this.done = true;
      this.active = false;
      setTimeout(function () {
        _this2.$refs.mask.close();
      }, 200);
    },
    buttonsClick: function buttonsClick(index) {
      this.$emit('ok', index);
      this.close();
    }
  }
});

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/layout/index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/layout/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/mask */ "./src/components/mask.vue");
/* harmony import */ var _components_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_mask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/alert */ "./src/components/alert.vue");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/i18n */ "./src/i18n/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    statusBarColor: {
      type: String,
      "default": '#ffffff'
    },
    // 是否需要添加状态栏高度padding
    safeTop: {
      type: Boolean,
      "default": true
    },
    // 是否需要为iphonex(xs等)底部设置安全距离
    safeBottom: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    Alert: _components_alert__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      statusBarHeight: eeui.getStatusBarHeightPx(),
      isIPhoneXType: eeui.isIPhoneXType()
    };
  },
  computed: {
    statusBarStyle: function statusBarStyle() {
      var style = {};

      if (this.safeTop) {
        style.paddingTop = this.statusBarHeight;
      }

      if (this.safeBottom && this.isIPhoneXType) {
        style.paddingBottom = 34;
      }

      return style;
    }
  },
  methods: {
    alert: function alert(config) {
      return new Promise(function (resolve, reject) {
        // 如果消息内容为空或者为ajax取消的错误，不需要弹窗提示
        if (!String(config).trim() || config === 'AJAX_CANCAL') {
          reject();
        } else {
          var message,
              okText,
              cancelText,
              cancel = true,
              buttons = [];
          var mountEl = weex.document.createElement('div');

          if (toString.call(config) === '[object String]') {
            message = config;
          } else if (toString.call(config) === '[object Object]') {
            message = config.message;
            cancel = config.cancel === false ? false : true;
            okText = config.okText;
            cancelText = config.cancelText;
            buttons = config.buttons;
          } else {
            throw new TypeError('传入类型错误');
          }

          var AlertFactory = Vue.extend(_components_alert__WEBPACK_IMPORTED_MODULE_1___default.a);
          var instance = new AlertFactory({
            el: mountEl,
            propsData: {
              message: message,
              okText: okText,
              cancelText: cancelText,
              cancel: cancel,
              buttons: buttons
            }
          });
          instance.$on('cancel', function (e) {
            reject();
            setTimeout(function () {
              weex.document.body.removeChild(instance.$el);
            }, 300);
          });
          instance.$on('ok', function (rs) {
            resolve(rs);
            setTimeout(function () {
              weex.document.body.removeChild(instance.$el);
            }, 300);
          });
          weex.document.body.appendChild(instance.$el);
        }
      });
    },
    $mask: function $mask() {
      var MaskFactory = Vue.extend(_components_mask__WEBPACK_IMPORTED_MODULE_0___default.a);
      var instance = new MaskFactory({
        el: weex.document.createElement('div')
      });
      weex.document.body.appendChild(instance.$el);
      instance.show();
    }
  }
});

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/mask.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/mask.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    overlayCanClose: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      active: false,
      visibel: false
    };
  },
  methods: {
    show: function show() {
      var _this = this;

      this.visibel = true;
      this.$nextTick(function () {
        _this.active = true;
      });
    },
    overlayClickHandler: function overlayClickHandler() {
      if (!this.overlayCanClose) return false;
      this.close();
    },
    close: function close() {
      var _this2 = this;

      this.active = false;
      setTimeout(function () {
        _this2.visibel = false;

        _this2.$emit('close');
      }, 100);
    }
  }
});

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/navbar.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/navbar.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * 把minibar提取出来，统一管理吧
 * 安卓下用weex-ui minibar 存在点击延迟的bug，先不用了
 */
var Navigator = weex.requireModule('navigator');
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String,
      "default": ''
    },
    backgroundColor: {
      type: String,
      "default": '#ffffff'
    },
    textColor: {
      type: String,
      "default": '#292929'
    },
    leftButton: {
      type: String,
      "default": 'root://assets/image/back.png'
    },
    leftStyle: {
      type: Object,
      "default": function _default() {
        return {
          height: 36,
          width: 36
        };
      }
    },
    rightButton: String,
    useDefaultReturn: {
      type: Boolean,
      "default": true
    },
    barStyle: {
      type: Object,
      "default": function _default() {
        return {// borderBottomWidth: "1px",
          // borderBottomColor: "red",
        };
      }
    }
  },
  computed: {
    newBarStyle: function newBarStyle() {
      var backgroundColor = this.backgroundColor,
          barStyle = this.barStyle;
      return _objectSpread({
        backgroundColor: backgroundColor
      }, barStyle);
    }
  },
  methods: {
    leftButtonClicked: function leftButtonClicked() {
      if (this.leftButton !== '' && this.useDefaultReturn) {
        Navigator.pop({}, function (e) {});
      }

      this.$emit('wxcMinibarLeftButtonClicked', {});
    },
    rightButtonClicked: function rightButtonClicked() {
      var hasRightContent = this.rightText || this.rightButton || this.$slots && this.$slots.right;
      hasRightContent && this.$emit('wxcMinibarRightButtonClicked', {});
    }
  }
});

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/layout */ "./src/mixins/layout.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/navbar */ "./src/components/navbar.vue");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_navbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "./src/lib/utils.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_layout__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    NavBar: _components_navbar__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      version: {
        version: eeui.getVersion(),
        versionName: eeui.getVersionName(),
        localVersion: eeui.getLocalVersion(),
        localVersionName: eeui.getLocalVersionName(),
        sdkVersionCode: eeui.getSDKVersionCode(),
        sdkVersionName: eeui.getSDKVersionName(),
        updateId: eeui.getUpdateId()
      }
    };
  },
  created: function created() {},
  methods: {
    changeLange: function changeLange() {
      this.i18nChangeLang();
    },
    checkUpdate: function checkUpdate() {
      var rs = eeui.checkUpdate();
      eeuiLog.log(rs);
    },
    go: function go(url) {
      Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["jumpPage"])(url);
    }
  }
});

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib/index.js?{\"patterns\":[\"./src/assets/less/common.less\"]}!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-2029477c!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/alert.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{"sourceMap":false}!/usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib?{"patterns":["./src/assets/less/common.less"]}!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-2029477c!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/alert.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "text-primary": {
    "color": "#03A8F1"
  },
  "text-danger": {
    "color": "#FF4141"
  },
  "text-success": {
    "color": "#2DBC83"
  },
  "text-normal": {
    "color": "#666666"
  },
  "text-warning": {
    "color": "#FF8800"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-ellipsis": {
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "btn": {
    "height": "88",
    "borderRadius": "4",
    "opacity": 1,
    "transitionProperty": "opacity",
    "transitionDuration": 100,
    "opacity:active": 0.8
  },
  "@TRANSITION": {
    "btn": {
      "property": "opacity",
      "duration": 100
    },
    "main": {
      "duration": 300,
      "property": "transform,opacity",
      "timingFunction": "cubic-bezier(0.25,0.1,0.25,1)"
    }
  },
  "btn-radius": {
    "borderRadius": "44"
  },
  "btn-primary": {
    "backgroundColor": "#03A8F1"
  },
  "btn-success": {
    "backgroundColor": "#2DBC83"
  },
  "btn-danger": {
    "backgroundColor": "#FF4141"
  },
  "btn-warning": {
    "backgroundColor": "#FF8800"
  },
  "btn-normal": {
    "backgroundColor": "#666666"
  },
  "app-page": {
    "backgroundColor": "#f2f3f7",
    "flex": 1
  },
  "border-none": {
    "borderTopLeftRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomRightRadius": 0
  },
  "header-bottom-border": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#E2E4E6"
  },
  "main": {
    "width": "600",
    "borderRadius": "30",
    "backgroundColor": "#ffffff",
    "opacity": 0,
    "transform": "scale(0.8)",
    "transitionDuration": 300,
    "transitionProperty": "transform,opacity",
    "transitionTimingFunction": "cubic-bezier(0.25,0.1,0.25,1)"
  },
  "active": {
    "opacity": 1,
    "transform": "scale(1)"
  },
  "done": {
    "opacity": 0,
    "transform": "scale(1.1)"
  },
  "scroller": {
    "maxHeight": "400"
  },
  "content": {
    "paddingTop": "50",
    "paddingRight": "40",
    "paddingBottom": "50",
    "paddingLeft": "40",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "content-text": {
    "fontSize": "36",
    "textAlign": "center",
    "color": "#28292C"
  },
  "btn-group": {
    "height": "88",
    "flexDirection": "row",
    "borderTopWidth": "1",
    "borderTopColor": "#EBEDF1"
  },
  "alert-btn": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "btn-text": {
    "fontSize": "32",
    "color": "#9D9FA9"
  },
  "ok-btn": {
    "borderLeftWidth": "1",
    "borderLeftColor": "#EBEDF1"
  },
  "ok-text": {
    "color": "#03A8F1"
  },
  "btn-group-column": {
    "flexDirection": "column"
  },
  "column-btn": {
    "height": "88",
    "borderTopWidth": "1",
    "borderTopColor": "#EBEDF1"
  }
}

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib/index.js?{\"patterns\":[\"./src/assets/less/common.less\"]}!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-3abc0e08!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/mask.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{"sourceMap":false}!/usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib?{"patterns":["./src/assets/less/common.less"]}!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-3abc0e08!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/mask.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "text-primary": {
    "color": "#03A8F1"
  },
  "text-danger": {
    "color": "#FF4141"
  },
  "text-success": {
    "color": "#2DBC83"
  },
  "text-normal": {
    "color": "#666666"
  },
  "text-warning": {
    "color": "#FF8800"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-ellipsis": {
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "btn": {
    "height": "88",
    "borderRadius": "4",
    "opacity": 1,
    "transitionProperty": "opacity",
    "transitionDuration": 100,
    "opacity:active": 0.8
  },
  "@TRANSITION": {
    "btn": {
      "property": "opacity",
      "duration": 100
    },
    "mask-popup": {
      "duration": 300,
      "property": "opacity",
      "timingFunction": "cubic-bezier(0.25,0.1,0.25,1)"
    }
  },
  "btn-radius": {
    "borderRadius": "44"
  },
  "btn-primary": {
    "backgroundColor": "#03A8F1"
  },
  "btn-success": {
    "backgroundColor": "#2DBC83"
  },
  "btn-danger": {
    "backgroundColor": "#FF4141"
  },
  "btn-warning": {
    "backgroundColor": "#FF8800"
  },
  "btn-normal": {
    "backgroundColor": "#666666"
  },
  "app-page": {
    "backgroundColor": "#f2f3f7",
    "flex": 1
  },
  "border-none": {
    "borderTopLeftRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomRightRadius": 0
  },
  "header-bottom-border": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#E2E4E6"
  },
  "mask-popup": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "backgroundColor": "rgba(0,0,0,0.3)",
    "justifyContent": "center",
    "alignItems": "center",
    "opacity": 0,
    "transitionDuration": 300,
    "transitionProperty": "opacity",
    "transitionTimingFunction": "cubic-bezier(0.25,0.1,0.25,1)"
  },
  "popup-active": {
    "opacity": 1
  }
}

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib/index.js?{\"patterns\":[\"./src/assets/less/common.less\"]}!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-57509004!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{"sourceMap":false}!/usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib?{"patterns":["./src/assets/less/common.less"]}!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-57509004!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "text-primary": {
    "color": "#03A8F1"
  },
  "text-danger": {
    "color": "#FF4141"
  },
  "text-success": {
    "color": "#2DBC83"
  },
  "text-normal": {
    "color": "#666666"
  },
  "text-warning": {
    "color": "#FF8800"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-ellipsis": {
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "btn": {
    "height": "88",
    "borderRadius": "4",
    "opacity": 1,
    "transitionProperty": "opacity",
    "transitionDuration": 100,
    "opacity:active": 0.8,
    "marginTop": "20"
  },
  "@TRANSITION": {
    "btn": {
      "property": "opacity",
      "duration": 100
    }
  },
  "btn-radius": {
    "borderRadius": "44"
  },
  "btn-primary": {
    "backgroundColor": "#03A8F1"
  },
  "btn-success": {
    "backgroundColor": "#2DBC83"
  },
  "btn-danger": {
    "backgroundColor": "#FF4141"
  },
  "btn-warning": {
    "backgroundColor": "#FF8800"
  },
  "btn-normal": {
    "backgroundColor": "#666666"
  },
  "app-page": {
    "backgroundColor": "#f2f3f7",
    "flex": 1
  },
  "border-none": {
    "borderTopLeftRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomRightRadius": 0
  },
  "header-bottom-border": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#E2E4E6"
  },
  "list": {
    "flex": 1,
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30"
  },
  "input": {
    "borderWidth": "1",
    "borderColor": "#d7d7d7",
    "marginTop": 0,
    "marginRight": "30",
    "marginBottom": 0,
    "marginLeft": "30",
    "width": "690",
    "height": "88",
    "boxShadow:focus": "0 0 20px 0 red"
  },
  "textarea": {
    "borderWidth": "1",
    "borderColor": "#d7d7d7",
    "marginTop": 0,
    "marginRight": "30",
    "marginBottom": 0,
    "marginLeft": "30",
    "width": "690",
    "height": "300"
  }
}

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib/index.js?{\"patterns\":[\"./src/assets/less/common.less\"]}!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-688b5e20!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/navbar.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{"sourceMap":false}!/usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib?{"patterns":["./src/assets/less/common.less"]}!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-688b5e20!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/navbar.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "text-primary": {
    "color": "#03A8F1"
  },
  "text-danger": {
    "color": "#FF4141"
  },
  "text-success": {
    "color": "#2DBC83"
  },
  "text-normal": {
    "color": "#666666"
  },
  "text-warning": {
    "color": "#FF8800"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-ellipsis": {
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "btn": {
    "height": "88",
    "borderRadius": "4",
    "opacity": 1,
    "transitionProperty": "opacity",
    "transitionDuration": 100,
    "opacity:active": 0.8
  },
  "@TRANSITION": {
    "btn": {
      "property": "opacity",
      "duration": 100
    }
  },
  "btn-radius": {
    "borderRadius": "44"
  },
  "btn-primary": {
    "backgroundColor": "#03A8F1"
  },
  "btn-success": {
    "backgroundColor": "#2DBC83"
  },
  "btn-danger": {
    "backgroundColor": "#FF4141"
  },
  "btn-warning": {
    "backgroundColor": "#FF8800"
  },
  "btn-normal": {
    "backgroundColor": "#666666"
  },
  "app-page": {
    "backgroundColor": "#f2f3f7",
    "flex": 1
  },
  "border-none": {
    "borderTopLeftRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomRightRadius": 0
  },
  "header-bottom-border": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#E2E4E6"
  },
  "minibar": {
    "width": "750",
    "height": "88",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "left": {
    "width": "150",
    "height": "88",
    "alignItems": "flex-start"
  },
  "right": {
    "width": "150",
    "height": "88",
    "alignItems": "flex-end"
  },
  "middle": {
    "alignItems": "center",
    "justifyContent": "center"
  },
  "middle-title": {
    "fontSize": "34",
    "color": "#28292C",
    "height": "36",
    "lineHeight": "34",
    "fontFamily": "PingFangSC-Medium",
    "textTransform": "capitalize"
  },
  "left-button": {
    "height": "88",
    "paddingTop": 0,
    "paddingRight": "32",
    "paddingBottom": 0,
    "paddingLeft": "32",
    "justifyContent": "center"
  }
}

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib/index.js?{\"patterns\":[\"./src/assets/less/common.less\"]}!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-dd2fd986!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/layout/index.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{"sourceMap":false}!/usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib?{"patterns":["./src/assets/less/common.less"]}!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-dd2fd986!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/layout/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "text-primary": {
    "color": "#03A8F1"
  },
  "text-danger": {
    "color": "#FF4141"
  },
  "text-success": {
    "color": "#2DBC83"
  },
  "text-normal": {
    "color": "#666666"
  },
  "text-warning": {
    "color": "#FF8800"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-ellipsis": {
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "btn": {
    "height": "88",
    "borderRadius": "4",
    "opacity": 1,
    "transitionProperty": "opacity",
    "transitionDuration": 100,
    "opacity:active": 0.8
  },
  "@TRANSITION": {
    "btn": {
      "property": "opacity",
      "duration": 100
    }
  },
  "btn-radius": {
    "borderRadius": "44"
  },
  "btn-primary": {
    "backgroundColor": "#03A8F1"
  },
  "btn-success": {
    "backgroundColor": "#2DBC83"
  },
  "btn-danger": {
    "backgroundColor": "#FF4141"
  },
  "btn-warning": {
    "backgroundColor": "#FF8800"
  },
  "btn-normal": {
    "backgroundColor": "#666666"
  },
  "app-page": {
    "backgroundColor": "#f2f3f7",
    "flex": 1
  },
  "border-none": {
    "borderTopLeftRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomRightRadius": 0
  },
  "header-bottom-border": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#E2E4E6"
  },
  "status-bar-box": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0
  },
  "page-main": {
    "flex": 1
  },
  "debug-box": {
    "position": "fixed",
    "bottom": 0,
    "right": 0,
    "backgroundColor": "rgba(0,0,0,0.3)"
  },
  "debug-box-txt": {
    "color": "#333333",
    "fontSize": "28"
  }
}

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-2029477c!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/alert.vue":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-2029477c!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/alert.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Mask', {
    ref: "mask",
    attrs: {
      "overlayCanClose": false
    }
  }, [_c('div', {
    staticClass: ["main"],
    class: [_vm.active ? 'active' : '', _vm.done ? 'done' : ''],
    on: {
      "click": _vm.stopPropagation
    }
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["content-text"]
  }, [_vm._v(_vm._s(_vm.message))])])]), (_vm.buttons.length == 0) ? _c('div', {
    staticClass: ["btn-group"]
  }, [(_vm.cancel) ? _c('div', {
    staticClass: ["alert-btn"],
    on: {
      "click": _vm.cancelHandler
    }
  }, [_c('text', {
    staticClass: ["btn-text"]
  }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e(), _c('div', {
    staticClass: ["alert-btn", "ok-btn"],
    class: [_vm.cancel ? 'ok-btn' : ''],
    on: {
      "click": _vm.okHandler
    }
  }, [_c('text', {
    staticClass: ["btn-text", "ok-text"]
  }, [_vm._v(_vm._s(_vm.okText))])])]) : _c('div', {
    staticClass: ["btn-group-column"]
  }, _vm._l((_vm.buttons), function(btn, idx) {
    return _c('div', {
      key: idx,
      staticClass: ["alert-btn", "column-btn"],
      on: {
        "click": function($event) {
          _vm.buttonsClick(idx)
        }
      }
    }, [_c('text', {
      staticClass: ["btn-text", "ok-text"]
    }, [_vm._v(_vm._s(btn))])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-3abc0e08!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/mask.vue":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-3abc0e08!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/mask.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visibel) ? _c('div', {
    staticClass: ["mask-popup"],
    class: [_vm.active ? 'popup-active' : ''],
    on: {
      "click": _vm.overlayClickHandler
    }
  }, [_vm._t("default")], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-57509004!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-57509004!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Layout', {
    ref: "layout",
    staticClass: ["app-page"]
  }, [_c('NavBar', {
    attrs: {
      "title": "首页",
      "leftButton": ""
    }
  }), _c('scroller', {
    staticClass: ["list"]
  }, [_c('div', {
    staticClass: ["info"]
  }, _vm._l((_vm.version), function(item, key) {
    return _c('div', {
      key: key
    }, [_c('text', {
      staticClass: ["text-normal"]
    }, [_vm._v(_vm._s(key) + ": " + _vm._s(item))])])
  })), _c('button', {
    staticClass: ["btn", "btn-primary", "btn-radius"],
    attrs: {
      "eeui": {
        text: '检查热更新'
      }
    },
    on: {
      "click": _vm.checkUpdate
    }
  }), _c('button', {
    staticClass: ["btn", "btn-primary", "btn-radius"],
    attrs: {
      "eeui": {
        text: '录音'
      }
    },
    on: {
      "click": function($event) {
        _vm.go('recorder/index.js')
      }
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-688b5e20!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/navbar.vue":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-688b5e20!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/navbar.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('navbar', {
    staticClass: ["minibar"],
    style: _vm.newBarStyle
  }, [(_vm.leftButton !== '') ? _vm._t("left", [_c('navbar-item', {
    staticClass: ["left-button"],
    attrs: {
      "type": "left"
    },
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_c('image', {
    style: _vm.leftStyle,
    attrs: {
      "src": _vm.leftButton
    }
  })])]) : _vm._e(), _vm._t("middle", [_c('navbar-item', {
    staticClass: ["middle"],
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.title))])])]), _c('navbar-item', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right")], 2)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-dd2fd986!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/layout/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** /usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-dd2fd986!/usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/layout/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "root",
    staticClass: ["layout-page", "app-page"],
    style: _vm.statusBarStyle
  }, [(_vm.safeTop) ? _c('div', {
    staticClass: ["status-bar-box"],
    style: {
      height: _vm.statusBarHeight + 'px',
      backgroundColor: _vm.statusBarColor
    }
  }) : _vm._e(), _vm._t("default"), _c('Alert', {
    attrs: {
      "isTemplate": true
    }
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/webpack/buildin/module.js */ "../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

function encoderForArrayFormat(opts) {
  switch (opts.arrayFormat) {
    case 'index':
      return function (key, value, index) {
        return value === null ? [encode(key, opts), '[', index, ']'].join('') : [encode(key, opts), '[', encode(index, opts), ']=', encode(value, opts)].join('');
      };

    case 'bracket':
      return function (key, value) {
        return value === null ? encode(key, opts) : [encode(key, opts), '[]=', encode(value, opts)].join('');
      };

    default:
      return function (key, value) {
        return value === null ? encode(key, opts) : [encode(key, opts), '=', encode(value, opts)].join('');
      };
  }
}

function parserForArrayFormat(opts) {
  var result;

  switch (opts.arrayFormat) {
    case 'index':
      return function (key, value, accumulator) {
        result = /\[(\d*)\]$/.exec(key);
        key = key.replace(/\[\d*\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };

    case 'bracket':
      return function (key, value, accumulator) {
        result = /(\[\])$/.exec(key);
        key = key.replace(/\[\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        } else if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };

    default:
      return function (key, value, accumulator) {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };
  }
}

function encode(value, opts) {
  if (opts.encode) {
    return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }

  return value;
}

function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  } else if (_typeof(input) === 'object') {
    return keysSorter(Object.keys(input)).sort(function (a, b) {
      return Number(a) - Number(b);
    }).map(function (key) {
      return input[key];
    });
  }

  return input;
}

exports.extract = function (str) {
  return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
  opts = objectAssign({
    arrayFormat: 'none'
  }, opts);
  var formatter = parserForArrayFormat(opts); // Create an object with no prototype
  // https://github.com/sindresorhus/query-string/issues/47

  var ret = Object.create(null);

  if (typeof str !== 'string') {
    return ret;
  }

  str = str.trim().replace(/^(\?|#|&)/, '');

  if (!str) {
    return ret;
  }

  str.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('='); // Firefox (pre 40) decodes `%3D` to `=`
    // https://github.com/sindresorhus/query-string/pull/37

    var key = parts.shift();
    var val = parts.length > 0 ? parts.join('=') : undefined; // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

    val = val === undefined ? null : decodeURIComponent(val);
    formatter(decodeURIComponent(key), val, ret);
  });
  return Object.keys(ret).sort().reduce(function (result, key) {
    var val = ret[key];

    if (Boolean(val) && _typeof(val) === 'object' && !Array.isArray(val)) {
      // Sort object keys, not values
      result[key] = keysSorter(val);
    } else {
      result[key] = val;
    }

    return result;
  }, Object.create(null));
};

exports.stringify = function (obj, opts) {
  var defaults = {
    encode: true,
    strict: true,
    arrayFormat: 'none'
  };
  opts = objectAssign(defaults, opts);
  var formatter = encoderForArrayFormat(opts);
  return obj ? Object.keys(obj).sort().map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encode(key, opts);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }

        result.push(formatter(key, val2, result.length));
      });
      return result.join('&');
    }

    return encode(key, opts) + '=' + encode(val, opts);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : '';
};

/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
};

/***/ }),

/***/ "./node_modules/vue-i18n/dist/vue-i18n.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-i18n/dist/vue-i18n.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * vue-i18n v8.16.0 
 * (c) 2020 kazuya kawaguchi
 * Released under the MIT License.
 */

/*  */

/**
 * constants
 */
var numberFormatKeys = ['style', 'currency', 'currencyDisplay', 'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'localeMatcher', 'formatMatcher', 'unit'];
/**
 * utilities
 */

function warn(msg, err) {
  if (typeof console !== 'undefined') {
    eeuiLog.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */

    if (err) {
      eeuiLog.warn(err.stack);
    }
  }
}

function error(msg, err) {
  if (typeof console !== 'undefined') {
    eeuiLog.error('[vue-i18n] ' + msg);
    /* istanbul ignore if */

    if (err) {
      eeuiLog.error(err.stack);
    }
  }
}

function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';

function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

function isNull(val) {
  return val === null || val === undefined;
}

function parseArgs() {
  var args = [],
      len = arguments.length;

  while (len--) {
    args[len] = arguments[len];
  }

  var locale = null;
  var params = null;

  if (args.length === 1) {
    if (isObject(args[0]) || Array.isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */


    if (isObject(args[1]) || Array.isArray(args[1])) {
      params = args[1];
    }
  }

  return {
    locale: locale,
    params: params
  };
}

function looseClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function merge(target) {
  var arguments$1 = arguments;
  var output = Object(target);

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];

    if (source !== undefined && source !== null) {
      var key = void 0;

      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }

  return output;
}

function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/*  */


function extend(Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$i18n', {
      get: function get() {
        return this._i18n;
      }
    });
  }

  Vue.prototype.$t = function (key) {
    var values = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      values[len] = arguments[len + 1];
    }

    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [key, i18n.locale, i18n._getMessages(), this].concat(values));
  };

  Vue.prototype.$tc = function (key, choice) {
    var values = [],
        len = arguments.length - 2;

    while (len-- > 0) {
      values[len] = arguments[len + 2];
    }

    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [key, i18n.locale, i18n._getMessages(), this, choice].concat(values));
  };

  Vue.prototype.$te = function (key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale);
  };

  Vue.prototype.$d = function (value) {
    var ref;
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    return (ref = this.$i18n).d.apply(ref, [value].concat(args));
  };

  Vue.prototype.$n = function (value) {
    var ref;
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    return (ref = this.$i18n).n.apply(ref, [value].concat(args));
  };
}
/*  */


var mixin = {
  beforeCreate: function beforeCreate() {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages = {};

            options.__i18n.forEach(function (resource) {
              localeMessages = merge(localeMessages, JSON.parse(resource));
            });

            Object.keys(localeMessages).forEach(function (locale) {
              options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
            });
          } catch (e) {
            if (true) {
              error("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }

        this._i18n = options.i18n;
        this._i18nWatcher = this._i18n.watchI18nData();
      } else if (isPlainObject(options.i18n)) {
        // component local i18n
        if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
          options.i18n.root = this.$root;
          options.i18n.formatter = this.$root.$i18n.formatter;
          options.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale;
          options.i18n.formatFallbackMessages = this.$root.$i18n.formatFallbackMessages;
          options.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn;
          options.i18n.silentFallbackWarn = this.$root.$i18n.silentFallbackWarn;
          options.i18n.pluralizationRules = this.$root.$i18n.pluralizationRules;
          options.i18n.preserveDirectiveContent = this.$root.$i18n.preserveDirectiveContent;
        } // init locale messages via custom blocks


        if (options.__i18n) {
          try {
            var localeMessages$1 = {};

            options.__i18n.forEach(function (resource) {
              localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
            });

            options.i18n.messages = localeMessages$1;
          } catch (e) {
            if (true) {
              warn("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }

        var ref = options.i18n;
        var sharedMessages = ref.sharedMessages;

        if (sharedMessages && isPlainObject(sharedMessages)) {
          options.i18n.messages = merge(options.i18n.messages, sharedMessages);
        }

        this._i18n = new VueI18n(options.i18n);
        this._i18nWatcher = this._i18n.watchI18nData();

        if (options.i18n.sync === undefined || !!options.i18n.sync) {
          this._localeWatcher = this.$i18n.watchLocale();
        }
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      // root i18n
      this._i18n = this.$root.$i18n;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      // parent i18n
      this._i18n = options.parent.$i18n;
    }
  },
  beforeMount: function beforeMount() {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        this._i18n.subscribeDataChanging(this);

        this._subscribing = true;
      } else if (isPlainObject(options.i18n)) {
        this._i18n.subscribeDataChanging(this);

        this._subscribing = true;
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);

      this._subscribing = true;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);

      this._subscribing = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!this._i18n) {
      return;
    }

    var self = this;
    this.$nextTick(function () {
      if (self._subscribing) {
        self._i18n.unsubscribeDataChanging(self);

        delete self._subscribing;
      }

      if (self._i18nWatcher) {
        self._i18nWatcher();

        self._i18n.destroyVM();

        delete self._i18nWatcher;
      }

      if (self._localeWatcher) {
        self._localeWatcher();

        delete self._localeWatcher;
      }

      self._i18n = null;
    });
  }
};
/*  */

var interpolationComponent = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: String
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function render(h, ref) {
    var data = ref.data;
    var parent = ref.parent;
    var props = ref.props;
    var slots = ref.slots;
    var $i18n = parent.$i18n;

    if (!$i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }

      return;
    }

    var path = props.path;
    var locale = props.locale;
    var places = props.places;
    var params = slots();
    var children = $i18n.i(path, locale, onlyHasDefaultPlace(params) || places ? useLegacyPlaces(params["default"], places) : params);
    var tag = props.tag || 'span';
    return tag ? h(tag, data, children) : children;
  }
};

function onlyHasDefaultPlace(params) {
  var prop;

  for (prop in params) {
    if (prop !== 'default') {
      return false;
    }
  }

  return Boolean(prop);
}

function useLegacyPlaces(children, places) {
  var params = places ? createParamsFromPlaces(places) : {};

  if (!children) {
    return params;
  } // Filter empty text nodes


  children = children.filter(function (child) {
    return child.tag || child.text.trim() !== '';
  });
  var everyPlace = children.every(vnodeHasPlaceAttribute);

  if ( true && everyPlace) {
    warn('`place` attribute is deprecated in next major version. Please switch to Vue slots.');
  }

  return children.reduce(everyPlace ? assignChildPlace : assignChildIndex, params);
}

function createParamsFromPlaces(places) {
  if (true) {
    warn('`places` prop is deprecated in next major version. Please switch to Vue slots.');
  }

  return Array.isArray(places) ? places.reduce(assignChildIndex, {}) : Object.assign({}, places);
}

function assignChildPlace(params, child) {
  if (child.data && child.data.attrs && child.data.attrs.place) {
    params[child.data.attrs.place] = child;
  }

  return params;
}

function assignChildIndex(params, child, index) {
  params[index] = child;
  return params;
}

function vnodeHasPlaceAttribute(vnode) {
  return Boolean(vnode.data && vnode.data.attrs && vnode.data.attrs.place);
}
/*  */


var numberComponent = {
  name: 'i18n-n',
  functional: true,
  props: {
    tag: {
      type: String,
      "default": 'span'
    },
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    },
    locale: {
      type: String
    }
  },
  render: function render(h, ref) {
    var props = ref.props;
    var parent = ref.parent;
    var data = ref.data;
    var i18n = parent.$i18n;

    if (!i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }

      return null;
    }

    var key = null;
    var options = null;

    if (typeof props.format === 'string') {
      key = props.format;
    } else if (isObject(props.format)) {
      if (props.format.key) {
        key = props.format.key;
      } // Filter out number format options only


      options = Object.keys(props.format).reduce(function (acc, prop) {
        var obj;

        if (numberFormatKeys.includes(prop)) {
          return Object.assign({}, acc, (obj = {}, obj[prop] = props.format[prop], obj));
        }

        return acc;
      }, null);
    }

    var locale = props.locale || i18n.locale;

    var parts = i18n._ntp(props.value, locale, key, options);

    var values = parts.map(function (part, index) {
      var obj;
      var slot = data.scopedSlots && data.scopedSlots[part.type];
      return slot ? slot((obj = {}, obj[part.type] = part.value, obj.index = index, obj.parts = parts, obj)) : part.value;
    });
    return h(props.tag, {
      attrs: data.attrs,
      'class': data['class'],
      staticClass: data.staticClass
    }, values);
  }
};
/*  */

function bind(el, binding, vnode) {
  if (!assert(el, vnode)) {
    return;
  }

  t(el, binding, vnode);
}

function update(el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) {
    return;
  }

  var i18n = vnode.context.$i18n;

  if (localeEqual(el, vnode) && looseEqual(binding.value, binding.oldValue) && looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale))) {
    return;
  }

  t(el, binding, vnode);
}

function unbind(el, binding, vnode, oldVNode) {
  var vm = vnode.context;

  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return;
  }

  var i18n = vnode.context.$i18n || {};

  if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
    el.textContent = '';
  }

  el._vt = undefined;
  delete el['_vt'];
  el._locale = undefined;
  delete el['_locale'];
  el._localeMessage = undefined;
  delete el['_localeMessage'];
}

function assert(el, vnode) {
  var vm = vnode.context;

  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return false;
  }

  if (!vm.$i18n) {
    warn('VueI18n instance does not exists in Vue instance');
    return false;
  }

  return true;
}

function localeEqual(el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale;
}

function t(el, binding, vnode) {
  var ref$1, ref$2;
  var value = binding.value;
  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;

  if (!path && !locale && !args) {
    warn('value type not supported');
    return;
  }

  if (!path) {
    warn('`path` is required in v-t directive');
    return;
  }

  var vm = vnode.context;

  if (choice) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [path, choice].concat(makeParams(locale, args)));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [path].concat(makeParams(locale, args)));
  }

  el._locale = vm.$i18n.locale;
  el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
}

function parseValue(value) {
  var path;
  var locale;
  var args;
  var choice;

  if (typeof value === 'string') {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }

  return {
    path: path,
    locale: locale,
    args: args,
    choice: choice
  };
}

function makeParams(locale, args) {
  var params = [];
  locale && params.push(locale);

  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params;
}

var Vue;

function install(_Vue) {
  /* istanbul ignore if */
  if ( true && install.installed && _Vue === Vue) {
    warn('already installed.');
    return;
  }

  install.installed = true;
  Vue = _Vue;
  var version = Vue.version && Number(Vue.version.split('.')[0]) || -1;
  /* istanbul ignore if */

  if ( true && version < 2) {
    warn("vue-i18n (" + install.version + ") need to use Vue 2.0 or later (Vue: " + Vue.version + ").");
    return;
  }

  extend(Vue);
  Vue.mixin(mixin);
  Vue.directive('t', {
    bind: bind,
    update: update,
    unbind: unbind
  });
  Vue.component(interpolationComponent.name, interpolationComponent);
  Vue.component(numberComponent.name, numberComponent); // use simple mergeStrategies to prevent i18n instance lose '__proto__'

  var strats = Vue.config.optionMergeStrategies;

  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };
}
/*  */


var BaseFormatter = function BaseFormatter() {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate(message, values) {
  if (!values) {
    return [message];
  }

  var tokens = this._caches[message];

  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }

  return compile(tokens, values);
};

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;

function parse(format) {
  var tokens = [];
  var position = 0;
  var text = '';

  while (position < format.length) {
    var _char = format[position++];

    if (_char === '{') {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }

      text = '';
      var sub = '';
      _char = format[position++];

      while (_char !== undefined && _char !== '}') {
        sub += _char;
        _char = format[position++];
      }

      var isClosed = _char === '}';
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    } else if (_char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[position] !== '{') {
        text += _char;
      }
    } else {
      text += _char;
    }
  }

  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}

function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';

  if (mode === 'unknown') {
    return compiled;
  }

  while (index < tokens.length) {
    var token = tokens[index];

    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;

      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;

      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            warn("Type of token '" + token.type + "' and format of value '" + mode + "' don't match!");
          }
        }

        break;

      case 'unknown':
        if (true) {
          warn("Detect 'unknown' type of token!");
        }

        break;
    }

    index++;
  }

  return compiled;
}
/*  */

/**
 *  Path parser
 *  - Inspired:
 *    Vue.js Path parser
 */
// actions


var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3; // states

var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;
var pathStateMachine = [];
pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};
pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};
pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};
pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};
pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};
pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};
pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};
/**
 * Check if an expression is a literal value.
 */

var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function isLiteral(exp) {
  return literalValueRE.test(exp);
}
/**
 * Strip quotes from a string
 */


function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}
/**
 * Determine the type of a character in a keypath.
 */


function getPathCharType(ch) {
  if (ch === undefined || ch === null) {
    return 'eof';
  }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [

    case 0x5D: // ]

    case 0x2E: // .

    case 0x22: // "

    case 0x27:
      // '
      return ch;

    case 0x5F: // _

    case 0x24: // $

    case 0x2D:
      // -
      return 'ident';

    case 0x09: // Tab

    case 0x0A: // Newline

    case 0x0D: // Return

    case 0xA0: // No-break space

    case 0xFEFF: // Byte Order Mark

    case 0x2028: // Line Separator

    case 0x2029:
      // Paragraph Separator
      return 'ws';
  }

  return 'ident';
}
/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */


function formatSubPath(path) {
  var trimmed = path.trim(); // invalid leading 0

  if (path.charAt(0) === '0' && isNaN(path)) {
    return false;
  }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}
/**
 * Parse a string path into an array of segments
 */


function parse$1(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;

      if (key === undefined) {
        return false;
      }

      key = formatSubPath(key);

      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];

    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];

    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ? c : newChar;

      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      return keys;
    }
  }
}

var I18nPath = function I18nPath() {
  this._cache = Object.create(null);
};
/**
 * External parse that check for a cache hit first
 */


I18nPath.prototype.parsePath = function parsePath(path) {
  var hit = this._cache[path];

  if (!hit) {
    hit = parse$1(path);

    if (hit) {
      this._cache[path] = hit;
    }
  }

  return hit || [];
};
/**
 * Get path value from path string
 */


I18nPath.prototype.getPathValue = function getPathValue(obj, path) {
  if (!isObject(obj)) {
    return null;
  }

  var paths = this.parsePath(path);

  if (paths.length === 0) {
    return null;
  } else {
    var length = paths.length;
    var last = obj;
    var i = 0;

    while (i < length) {
      var value = last[paths[i]];

      if (value === undefined) {
        return null;
      }

      last = value;
      i++;
    }

    return last;
  }
};
/*  */


var htmlTagMatcher = /<\/?[\w\s="/.':;#-\/]+>/;
var linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g;
var linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/;
var bracketsMatcher = /[()]/g;
var defaultModifiers = {
  'upper': function upper(str) {
    return str.toLocaleUpperCase();
  },
  'lower': function lower(str) {
    return str.toLocaleLowerCase();
  },
  'capitalize': function capitalize(str) {
    return "" + str.charAt(0).toLocaleUpperCase() + str.substr(1);
  }
};
var defaultFormatter = new BaseFormatter();

var VueI18n = function VueI18n(options) {
  var this$1 = this;
  if (options === void 0) options = {}; // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #290

  /* istanbul ignore if */

  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || {};
  var numberFormats = options.numberFormats || {};
  this._vm = null;
  this._formatter = options.formatter || defaultFormatter;
  this._modifiers = options.modifiers || {};
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined ? true : !!options.fallbackRoot;
  this._formatFallbackMessages = options.formatFallbackMessages === undefined ? false : !!options.formatFallbackMessages;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined ? false : options.silentTranslationWarn;
  this._silentFallbackWarn = options.silentFallbackWarn === undefined ? false : !!options.silentFallbackWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = [];
  this._preserveDirectiveContent = options.preserveDirectiveContent === undefined ? false : !!options.preserveDirectiveContent;
  this.pluralizationRules = options.pluralizationRules || {};
  this._warnHtmlInMessage = options.warnHtmlInMessage || 'off';
  this._postTranslation = options.postTranslation || null;

  this._exist = function (message, key) {
    if (!message || !key) {
      return false;
    }

    if (!isNull(this$1._path.getPathValue(message, key))) {
      return true;
    } // fallback for flat key


    if (message[key]) {
      return true;
    }

    return false;
  };

  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats
  });
};

var prototypeAccessors = {
  vm: {
    configurable: true
  },
  messages: {
    configurable: true
  },
  dateTimeFormats: {
    configurable: true
  },
  numberFormats: {
    configurable: true
  },
  availableLocales: {
    configurable: true
  },
  locale: {
    configurable: true
  },
  fallbackLocale: {
    configurable: true
  },
  formatFallbackMessages: {
    configurable: true
  },
  missing: {
    configurable: true
  },
  formatter: {
    configurable: true
  },
  silentTranslationWarn: {
    configurable: true
  },
  silentFallbackWarn: {
    configurable: true
  },
  preserveDirectiveContent: {
    configurable: true
  },
  warnHtmlInMessage: {
    configurable: true
  },
  postTranslation: {
    configurable: true
  }
};

VueI18n.prototype._checkLocaleMessage = function _checkLocaleMessage(locale, level, message) {
  var paths = [];

  var fn = function fn(level, locale, message, paths) {
    if (isPlainObject(message)) {
      Object.keys(message).forEach(function (key) {
        var val = message[key];

        if (isPlainObject(val)) {
          paths.push(key);
          paths.push('.');
          fn(level, locale, val, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(key);
          fn(level, locale, val, paths);
          paths.pop();
        }
      });
    } else if (Array.isArray(message)) {
      message.forEach(function (item, index) {
        if (isPlainObject(item)) {
          paths.push("[" + index + "]");
          paths.push('.');
          fn(level, locale, item, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push("[" + index + "]");
          fn(level, locale, item, paths);
          paths.pop();
        }
      });
    } else if (typeof message === 'string') {
      var ret = htmlTagMatcher.test(message);

      if (ret) {
        var msg = "Detected HTML in message '" + message + "' of keypath '" + paths.join('') + "' at '" + locale + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";

        if (level === 'warn') {
          warn(msg);
        } else if (level === 'error') {
          error(msg);
        }
      }
    }
  };

  fn(level, locale, message, paths);
};

VueI18n.prototype._initVM = function _initVM(data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({
    data: data
  });
  Vue.config.silent = silent;
};

VueI18n.prototype.destroyVM = function destroyVM() {
  this._vm.$destroy();
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging(vm) {
  this._dataListeners.push(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging(vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData() {
  var self = this;
  return this._vm.$watch('$data', function () {
    var i = self._dataListeners.length;

    while (i--) {
      Vue.nextTick(function () {
        self._dataListeners[i] && self._dataListeners[i].$forceUpdate();
      });
    }
  }, {
    deep: true
  });
};

VueI18n.prototype.watchLocale = function watchLocale() {
  /* istanbul ignore if */
  if (!this._sync || !this._root) {
    return null;
  }

  var target = this._vm;
  return this._root.$i18n.vm.$watch('locale', function (val) {
    target.$set(target, 'locale', val);
    target.$forceUpdate();
  }, {
    immediate: true
  });
};

prototypeAccessors.vm.get = function () {
  return this._vm;
};

prototypeAccessors.messages.get = function () {
  return looseClone(this._getMessages());
};

prototypeAccessors.dateTimeFormats.get = function () {
  return looseClone(this._getDateTimeFormats());
};

prototypeAccessors.numberFormats.get = function () {
  return looseClone(this._getNumberFormats());
};

prototypeAccessors.availableLocales.get = function () {
  return Object.keys(this.messages).sort();
};

prototypeAccessors.locale.get = function () {
  return this._vm.locale;
};

prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () {
  return this._vm.fallbackLocale;
};

prototypeAccessors.fallbackLocale.set = function (locale) {
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.formatFallbackMessages.get = function () {
  return this._formatFallbackMessages;
};

prototypeAccessors.formatFallbackMessages.set = function (fallback) {
  this._formatFallbackMessages = fallback;
};

prototypeAccessors.missing.get = function () {
  return this._missing;
};

prototypeAccessors.missing.set = function (handler) {
  this._missing = handler;
};

prototypeAccessors.formatter.get = function () {
  return this._formatter;
};

prototypeAccessors.formatter.set = function (formatter) {
  this._formatter = formatter;
};

prototypeAccessors.silentTranslationWarn.get = function () {
  return this._silentTranslationWarn;
};

prototypeAccessors.silentTranslationWarn.set = function (silent) {
  this._silentTranslationWarn = silent;
};

prototypeAccessors.silentFallbackWarn.get = function () {
  return this._silentFallbackWarn;
};

prototypeAccessors.silentFallbackWarn.set = function (silent) {
  this._silentFallbackWarn = silent;
};

prototypeAccessors.preserveDirectiveContent.get = function () {
  return this._preserveDirectiveContent;
};

prototypeAccessors.preserveDirectiveContent.set = function (preserve) {
  this._preserveDirectiveContent = preserve;
};

prototypeAccessors.warnHtmlInMessage.get = function () {
  return this._warnHtmlInMessage;
};

prototypeAccessors.warnHtmlInMessage.set = function (level) {
  var this$1 = this;
  var orgLevel = this._warnHtmlInMessage;
  this._warnHtmlInMessage = level;

  if (orgLevel !== level && (level === 'warn' || level === 'error')) {
    var messages = this._getMessages();

    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }
};

prototypeAccessors.postTranslation.get = function () {
  return this._postTranslation;
};

prototypeAccessors.postTranslation.set = function (handler) {
  this._postTranslation = handler;
};

VueI18n.prototype._getMessages = function _getMessages() {
  return this._vm.messages;
};

VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats() {
  return this._vm.dateTimeFormats;
};

VueI18n.prototype._getNumberFormats = function _getNumberFormats() {
  return this._vm.numberFormats;
};

VueI18n.prototype._warnDefault = function _warnDefault(locale, key, result, vm, values, interpolateMode) {
  if (!isNull(result)) {
    return result;
  }

  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);

    if (typeof missingRet === 'string') {
      return missingRet;
    }
  } else {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn("Cannot translate the value of keypath '" + key + "'. " + 'Use the value of keypath as default.');
    }
  }

  if (this._formatFallbackMessages) {
    var parsedArgs = parseArgs.apply(void 0, values);
    return this._render(key, interpolateMode, parsedArgs.params, key);
  } else {
    return key;
  }
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot(val) {
  return !val && !isNull(this._root) && this._fallbackRoot;
};

VueI18n.prototype._isSilentFallbackWarn = function _isSilentFallbackWarn(key) {
  return this._silentFallbackWarn instanceof RegExp ? this._silentFallbackWarn.test(key) : this._silentFallbackWarn;
};

VueI18n.prototype._isSilentFallback = function _isSilentFallback(locale, key) {
  return this._isSilentFallbackWarn(key) && (this._isFallbackRoot() || locale !== this.fallbackLocale);
};

VueI18n.prototype._isSilentTranslationWarn = function _isSilentTranslationWarn(key) {
  return this._silentTranslationWarn instanceof RegExp ? this._silentTranslationWarn.test(key) : this._silentTranslationWarn;
};

VueI18n.prototype._interpolate = function _interpolate(locale, message, key, host, interpolateMode, values, visitedLinkStack) {
  if (!message) {
    return null;
  }

  var pathRet = this._path.getPathValue(message, key);

  if (Array.isArray(pathRet) || isPlainObject(pathRet)) {
    return pathRet;
  }

  var ret;

  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];

      if (typeof ret !== 'string') {
        if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
          warn("Value of key '" + key + "' is not a string!");
        }

        return null;
      }
    } else {
      return null;
    }
  } else {
    /* istanbul ignore else */
    if (typeof pathRet === 'string') {
      ret = pathRet;
    } else {
      if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
        warn("Value of key '" + key + "' is not a string!");
      }

      return null;
    }
  } // Check for the existence of links within the translated string


  if (ret.indexOf('@:') >= 0 || ret.indexOf('@.') >= 0) {
    ret = this._link(locale, message, ret, host, 'raw', values, visitedLinkStack);
  }

  return this._render(ret, interpolateMode, values, key);
};

VueI18n.prototype._link = function _link(locale, message, str, host, interpolateMode, values, visitedLinkStack) {
  var ret = str; // Match all the links within the local
  // We are going to replace each of
  // them with its translation

  var matches = ret.match(linkKeyMatcher);

  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue;
    }

    var link = matches[idx];
    var linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
    var linkPrefix = linkKeyPrefixMatches[0];
    var formatterName = linkKeyPrefixMatches[1]; // Remove the leading @:, @.case: and the brackets

    var linkPlaceholder = link.replace(linkPrefix, '').replace(bracketsMatcher, '');

    if (visitedLinkStack.includes(linkPlaceholder)) {
      if (true) {
        warn("Circular reference found. \"" + link + "\" is already visited in the chain of " + visitedLinkStack.reverse().join(' <- '));
      }

      return ret;
    }

    visitedLinkStack.push(linkPlaceholder); // Translate the link

    var translated = this._interpolate(locale, message, linkPlaceholder, host, interpolateMode === 'raw' ? 'string' : interpolateMode, interpolateMode === 'raw' ? undefined : values, visitedLinkStack);

    if (this._isFallbackRoot(translated)) {
      if ( true && !this._isSilentTranslationWarn(linkPlaceholder)) {
        warn("Fall back to translate the link placeholder '" + linkPlaceholder + "' with root locale.");
      }
      /* istanbul ignore if */


      if (!this._root) {
        throw Error('unexpected error');
      }

      var root = this._root.$i18n;
      translated = root._translate(root._getMessages(), root.locale, root.fallbackLocale, linkPlaceholder, host, interpolateMode, values);
    }

    translated = this._warnDefault(locale, linkPlaceholder, translated, host, Array.isArray(values) ? values : [values], interpolateMode);

    if (this._modifiers.hasOwnProperty(formatterName)) {
      translated = this._modifiers[formatterName](translated);
    } else if (defaultModifiers.hasOwnProperty(formatterName)) {
      translated = defaultModifiers[formatterName](translated);
    }

    visitedLinkStack.pop(); // Replace the link with the translated

    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret;
};

VueI18n.prototype._render = function _render(message, interpolateMode, values, path) {
  var ret = this._formatter.interpolate(message, values, path); // If the custom formatter refuses to work - apply the default one


  if (!ret) {
    ret = defaultFormatter.interpolate(message, values, path);
  } // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter


  return interpolateMode === 'string' && typeof ret !== 'string' ? ret.join('') : ret;
};

VueI18n.prototype._translate = function _translate(messages, locale, fallback, key, host, interpolateMode, args) {
  var res = this._interpolate(locale, messages[locale], key, host, interpolateMode, args, [key]);

  if (!isNull(res)) {
    return res;
  }

  res = this._interpolate(fallback, messages[fallback], key, host, interpolateMode, args, [key]);

  if (!isNull(res)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to translate the keypath '" + key + "' with '" + fallback + "' locale.");
    }

    return res;
  } else {
    return null;
  }
};

VueI18n.prototype._t = function _t(key, _locale, messages, host) {
  var ref;
  var values = [],
      len = arguments.length - 4;

  while (len-- > 0) {
    values[len] = arguments[len + 4];
  }

  if (!key) {
    return '';
  }

  var parsedArgs = parseArgs.apply(void 0, values);
  var locale = parsedArgs.locale || _locale;

  var ret = this._translate(messages, locale, this.fallbackLocale, key, host, 'string', parsedArgs.params);

  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to translate the keypath '" + key + "' with root locale.");
    }
    /* istanbul ignore if */


    if (!this._root) {
      throw Error('unexpected error');
    }

    return (ref = this._root).$t.apply(ref, [key].concat(values));
  } else {
    ret = this._warnDefault(locale, key, ret, host, values, 'string');

    if (this._postTranslation) {
      ret = this._postTranslation(ret);
    }

    return ret;
  }
};

VueI18n.prototype.t = function t(key) {
  var ref;
  var values = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    values[len] = arguments[len + 1];
  }

  return (ref = this)._t.apply(ref, [key, this.locale, this._getMessages(), null].concat(values));
};

VueI18n.prototype._i = function _i(key, locale, messages, host, values) {
  var ret = this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);

  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn("Fall back to interpolate the keypath '" + key + "' with root locale.");
    }

    if (!this._root) {
      throw Error('unexpected error');
    }

    return this._root.$i18n.i(key, locale, values);
  } else {
    return this._warnDefault(locale, key, ret, host, [values], 'raw');
  }
};

VueI18n.prototype.i = function i(key, locale, values) {
  /* istanbul ignore if */
  if (!key) {
    return '';
  }

  if (typeof locale !== 'string') {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values);
};

VueI18n.prototype._tc = function _tc(key, _locale, messages, host, choice) {
  var ref;
  var values = [],
      len = arguments.length - 5;

  while (len-- > 0) {
    values[len] = arguments[len + 5];
  }

  if (!key) {
    return '';
  }

  if (choice === undefined) {
    choice = 1;
  }

  var predefined = {
    'count': choice,
    'n': choice
  };
  var parsedArgs = parseArgs.apply(void 0, values);
  parsedArgs.params = Object.assign(predefined, parsedArgs.params);
  values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
  return this.fetchChoice((ref = this)._t.apply(ref, [key, _locale, messages, host].concat(values)), choice);
};

VueI18n.prototype.fetchChoice = function fetchChoice(message, choice) {
  /* istanbul ignore if */
  if (!message && typeof message !== 'string') {
    return null;
  }

  var choices = message.split('|');
  choice = this.getChoiceIndex(choice, choices.length);

  if (!choices[choice]) {
    return message;
  }

  return choices[choice].trim();
};
/**
 * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
 * @param choicesLength {number} an overall amount of available choices
 * @returns a final choice index
*/


VueI18n.prototype.getChoiceIndex = function getChoiceIndex(choice, choicesLength) {
  // Default (old) getChoiceIndex implementation - english-compatible
  var defaultImpl = function defaultImpl(_choice, _choicesLength) {
    _choice = Math.abs(_choice);

    if (_choicesLength === 2) {
      return _choice ? _choice > 1 ? 1 : 0 : 1;
    }

    return _choice ? Math.min(_choice, 2) : 0;
  };

  if (this.locale in this.pluralizationRules) {
    return this.pluralizationRules[this.locale].apply(this, [choice, choicesLength]);
  } else {
    return defaultImpl(choice, choicesLength);
  }
};

VueI18n.prototype.tc = function tc(key, choice) {
  var ref;
  var values = [],
      len = arguments.length - 2;

  while (len-- > 0) {
    values[len] = arguments[len + 2];
  }

  return (ref = this)._tc.apply(ref, [key, this.locale, this._getMessages(), null, choice].concat(values));
};

VueI18n.prototype._te = function _te(key, locale, messages) {
  var args = [],
      len = arguments.length - 3;

  while (len-- > 0) {
    args[len] = arguments[len + 3];
  }

  var _locale = parseArgs.apply(void 0, args).locale || locale;

  return this._exist(messages[_locale], key);
};

VueI18n.prototype.te = function te(key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale);
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage(locale) {
  return looseClone(this._vm.messages[locale] || {});
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage(locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }

  this._vm.$set(this._vm.messages, locale, message);
};

VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage(locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }

  this._vm.$set(this._vm.messages, locale, merge({}, this._vm.messages[locale] || {}, message));
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat(locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {});
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat(locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat(locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime(value, locale, fallback, dateTimeFormats, key) {
  var _locale = locale;
  var formats = dateTimeFormats[_locale]; // fallback locale

  if (isNull(formats) || isNull(formats[key])) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to '" + fallback + "' datetime formats from '" + locale + "' datetime formats.");
    }

    _locale = fallback;
    formats = dateTimeFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null;
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._dateTimeFormatters[id];

    if (!formatter) {
      formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
    }

    return formatter.format(value);
  }
};

VueI18n.prototype._d = function _d(value, locale, key) {
  /* istanbul ignore if */
  if ( true && !VueI18n.availabilities.dateTimeFormat) {
    warn('Cannot format a Date value due to not supported Intl.DateTimeFormat.');
    return '';
  }

  if (!key) {
    return new Intl.DateTimeFormat(locale).format(value);
  }

  var ret = this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);

  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to datetime localization of root: key '" + key + "'.");
    }
    /* istanbul ignore if */


    if (!this._root) {
      throw Error('unexpected error');
    }

    return this._root.$i18n.d(value, key, locale);
  } else {
    return ret || '';
  }
};

VueI18n.prototype.d = function d(value) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    args[len] = arguments[len + 1];
  }

  var locale = this.locale;
  var key = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }

      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }

    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._d(value, locale, key);
};

VueI18n.prototype.getNumberFormat = function getNumberFormat(locale) {
  return looseClone(this._vm.numberFormats[locale] || {});
};

VueI18n.prototype.setNumberFormat = function setNumberFormat(locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);

  this._clearNumberFormat(locale, format);
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat(locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));

  this._clearNumberFormat(locale, format);
};

VueI18n.prototype._clearNumberFormat = function _clearNumberFormat(locale, format) {
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._numberFormatters.hasOwnProperty(id)) {
      continue;
    }

    delete this._numberFormatters[id];
  }
};

VueI18n.prototype._getNumberFormatter = function _getNumberFormatter(value, locale, fallback, numberFormats, key, options) {
  var _locale = locale;
  var formats = numberFormats[_locale]; // fallback locale

  if (isNull(formats) || isNull(formats[key])) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to '" + fallback + "' number formats from '" + locale + "' number formats.");
    }

    _locale = fallback;
    formats = numberFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null;
  } else {
    var format = formats[key];
    var formatter;

    if (options) {
      // If options specified - create one time number formatter
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];

      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }

    return formatter;
  }
};

VueI18n.prototype._n = function _n(value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format a Number value due to not supported Intl.NumberFormat.');
    }

    return '';
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.format(value);
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);

  var ret = formatter && formatter.format(value);

  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn("Fall back to number localization of root: key '" + key + "'.");
    }
    /* istanbul ignore if */


    if (!this._root) {
      throw Error('unexpected error');
    }

    return this._root.$i18n.n(value, Object.assign({}, {
      key: key,
      locale: locale
    }, options));
  } else {
    return ret || '';
  }
};

VueI18n.prototype.n = function n(value) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    args[len] = arguments[len + 1];
  }

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }

      if (args[0].key) {
        key = args[0].key;
      } // Filter out number format options only


      options = Object.keys(args[0]).reduce(function (acc, key) {
        var obj;

        if (numberFormatKeys.includes(key)) {
          return Object.assign({}, acc, (obj = {}, obj[key] = args[0][key], obj));
        }

        return acc;
      }, null);
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }

    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._n(value, locale, key, options);
};

VueI18n.prototype._ntp = function _ntp(value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format to parts a Number value due to not supported Intl.NumberFormat.');
    }

    return [];
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.formatToParts(value);
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);

  var ret = formatter && formatter.formatToParts(value);

  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn("Fall back to format number to parts of root: key '" + key + "' .");
    }
    /* istanbul ignore if */


    if (!this._root) {
      throw Error('unexpected error');
    }

    return this._root.$i18n._ntp(value, locale, key, options);
  } else {
    return ret || [];
  }
};

Object.defineProperties(VueI18n.prototype, prototypeAccessors);
var availabilities; // $FlowFixMe

Object.defineProperty(VueI18n, 'availabilities', {
  get: function get() {
    if (!availabilities) {
      var intlDefined = typeof Intl !== 'undefined';
      availabilities = {
        dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
        numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
      };
    }

    return availabilities;
  }
});
VueI18n.install = install;
VueI18n.version = '8.16.0';
/* harmony default export */ __webpack_exports__["default"] = (VueI18n);

/***/ }),

/***/ "./src/components/alert.vue":
/*!**********************************!*\
  !*** ./src/components/alert.vue ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../node_modules/less-loader?{"sourceMap":false}!../../../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader?{"patterns":["./src/assets/less/common.less"]}!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-2029477c!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./alert.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib/index.js?{\"patterns\":[\"./src/assets/less/common.less\"]}!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-2029477c!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/alert.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./alert.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/alert.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-2029477c!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./alert.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-2029477c!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/alert.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dayao/Code/eeui/eeui-demo/src/components/alert.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2029477c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./src/components/layout/index.vue":
/*!*****************************************!*\
  !*** ./src/components/layout/index.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../node_modules/less-loader?{"sourceMap":false}!../../../../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader?{"patterns":["./src/assets/less/common.less"]}!../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-dd2fd986!../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib/index.js?{\"patterns\":[\"./src/assets/less/common.less\"]}!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-dd2fd986!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/layout/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/layout/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-dd2fd986!../../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-dd2fd986!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/layout/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dayao/Code/eeui/eeui-demo/src/components/layout/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-dd2fd986"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./src/components/mask.vue":
/*!*********************************!*\
  !*** ./src/components/mask.vue ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../node_modules/less-loader?{"sourceMap":false}!../../../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader?{"patterns":["./src/assets/less/common.less"]}!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-3abc0e08!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./mask.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib/index.js?{\"patterns\":[\"./src/assets/less/common.less\"]}!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-3abc0e08!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/mask.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./mask.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/mask.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-3abc0e08!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./mask.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-3abc0e08!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/mask.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dayao/Code/eeui/eeui-demo/src/components/mask.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3abc0e08"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./src/components/navbar.vue":
/*!***********************************!*\
  !*** ./src/components/navbar.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../node_modules/less-loader?{"sourceMap":false}!../../../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader?{"patterns":["./src/assets/less/common.less"]}!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-688b5e20!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./navbar.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib/index.js?{\"patterns\":[\"./src/assets/less/common.less\"]}!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-688b5e20!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/navbar.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./navbar.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/navbar.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-688b5e20!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./navbar.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-688b5e20!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/navbar.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dayao/Code/eeui/eeui-demo/src/components/navbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-688b5e20"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  appName: 'awesomeOA',
  env: 'dev',
  host: {
    //内网测试环境
    dev: 'http://www1.oasystem.com',
    //外网测试
    test: 'https://testwww.iccc.asia',
    //外网正式
    prod: 'https://www.iccc.asia'
  }
});

/***/ }),

/***/ "./src/i18n/index.js":
/*!***************************!*\
  !*** ./src/i18n/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js");
/*
 * @Author: Dayao
 * @Date: 2020-02-11 11:20:48
 * @LastEditTime: 2020-03-10 17:17:42
 * @Description: 
 */
var picker = weex.requireModule('picker');

Vue.use(vue_i18n__WEBPACK_IMPORTED_MODULE_0__["default"]); // 准备翻译的语言环境信息

var messages = {
  en: __webpack_require__(/*! ./lang/en.json */ "./src/i18n/lang/en.json"),
  "zh-cn": __webpack_require__(/*! ./lang/zh-cn.json */ "./src/i18n/lang/zh-cn.json"),
  km: __webpack_require__(/*! ./lang/km.json */ "./src/i18n/lang/km.json")
}; // 通过选项创建 VueI18n 实例

var i18n = new vue_i18n__WEBPACK_IMPORTED_MODULE_0__["default"]({
  locale: $Caches.getFreeze('lang', 'zh-cn'),
  // 设置地区
  fallbackLocale: 'zh-cn',
  silentFallbackWarn: true,
  messages: messages // 设置地区信息

}); // 以mixin的方式挂载到各个页面

Vue.mixin({
  i18n: i18n,
  data: function data() {
    return {
      i18n: {
        langs: [{
          text: '中文',
          value: 'zh-cn'
        }, {
          text: 'English',
          value: 'en'
        }, {
          text: 'ខ្មែរ',
          value: 'km'
        }]
      }
    };
  },
  created: function created() {
    var _this = this;

    $tools.$on('change_lang', function (data) {
      try {
        // 为啥突然会有this.$i18n为null的场景？？
        data && _this.$i18n && (_this.$i18n.locale = data, $Caches.setFreeze('lang', data));
      } catch (e) {
        eeuiLog.log(e.message);
      }
    });
  },
  methods: {
    // 广播更新语言，触发其他页面的语言更新
    i18nUpdateAppLang: function i18nUpdateAppLang(lang) {
      if (!lang) return false;
      $tools.$emit('change_lang', lang); // 不加这个当前页面没有更新

      this.$i18n.locale = lang;
    },
    // 公用修改语言picker
    i18nChangeLang: function i18nChangeLang() {
      var _this2 = this;

      var langs = [];
      this.i18n.langs.forEach(function (lang) {
        langs.push(lang.text);
      });
      var local = this.$i18n.locale;
      picker.pick({
        index: this.i18n.langs.findIndex(function (item) {
          return item.value == local;
        }),
        items: langs,
        confirmTitle: this.$t('完成'),
        cancelTitle: this.$t('取消')
      }, function (ret) {
        if (ret.result == 'success') {
          _this2.i18nUpdateAppLang(_this2.i18n.langs[ret.data].value);
        }
      });
    }
  }
});

/***/ }),

/***/ "./src/i18n/lang/en.json":
/*!*******************************!*\
  !*** ./src/i18n/lang/en.json ***!
  \*******************************/
/*! exports provided: calendars, 今日, 不提醒, 不重复, 每天, 每周, 每月, 日程开始前5分钟, 日程开始前10分钟, 日程开始前15分钟, 日程开始前30分钟, 日程开始前1小时, 消息, 审批, 日程, 我的, 早上好, 下午好, 晚上好, 已审批的, 待审批的, 版本, 完成, 个人信息, 员工编号, 姓名, 性别, 出生日期, 联系方式, 国籍, 行政等级, 组织等级, 保密等级, 下载, 审批单号, 发起人, 所属部门, 所属岗位, 开始时间, 完成时间, 抄送人, 审批通过后，通知抄送人, 附件上传, 请选择, 暂不支持该控件, 已过滤上传失败的图片, 币种, 添加, 请输入, 删除, 取消, 驳回审批, 审批确认, 确认驳回, 确认通过, 驳回原因, 审批意见, 撤销审批, 必填, 选填, 参数错误, 搜索姓名/审批单名字, 驳回, 通过, 撤销提示, 确认撤销审批吗？, 我再想想, 确认, 提交审批, 请完善表单的必填项, 抄送我的, 我发起的, 我已审批, 待我审批, 请输入工号, 请输入密码, 登录, 登陆表示同意系统的, 隐私协议, 新密码, 新密码确认, 请再次输入密码, 请输入新密码, 两次输入密码不一致, 提交, 全天, 当日暂无日程，可点击右上角“+”创建日程, 已展示当日所有日程, 已完成, 详情, 新建日程, 添加日程、会议、活动等标题, 添加备注, 此日程不存在, 修改, 结束时间不能早于开始时间, 提示, 确定要修改此日程吗？此为重复日程, 确定要删除此日程吗？此为重复日程, 仅修改此日程, 仅删除此日程, 修改所有将来的日程, 删除所有将来的日程, 日程详情, 编辑, 删除日程, 设置, 清除缓存, 关于我们, 退出登录, 确认要清除缓存吗？, 清除, 清除成功, 确认要退出登录吗？, 系统信息, 登录名, 系统语言, 切换语言, 删除提示, 修改提示, 确认删除日程吗？, 提醒时间, 重复周期, 欢迎使用ICCC移动办公系统, 下次登录不再提示, 由于您能力突出任职多个岗位，首次登录将进入主岗位, 登录后可以在, 模块切换岗位，处理对应的岗位事务，如下图所示：, 我知道了, 切换岗位提示, 当前登录岗位为, 请选择要切换的岗位, 切换, 请选择日期, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"calendars\":[\"S\",\"M\",\"T\",\"W\",\"C\",\"F\",\"S\"],\"今日\":\"Today\",\"不提醒\":\"Don't remind\",\"不重复\":\"Don't repeat\",\"每天\":\"Daily​​\",\"每周\":\"Weekly\",\"每月\":\"Monthly\",\"日程开始前5分钟\":\"Before 5 minutes\",\"日程开始前10分钟\":\"Before 10 minutes\",\"日程开始前15分钟\":\"Before 15 minutes\",\"日程开始前30分钟\":\"Before 30 minutes\",\"日程开始前1小时\":\"Before 1 hours\",\"消息\":\"Notification\",\"审批\":\"Approval\",\"日程\":\"Schedule\",\"我的\":\"Mind\",\"早上好\":\"Good morning\",\"下午好\":\"Good afternoon\",\"晚上好\":\"Good evening\",\"已审批的\":\"Approved\",\"待审批的\":\"Pending\",\"版本\":\"Version\",\"完成\":\"Done\",\"个人信息\":\"Profile\",\"员工编号\":\"SNo\",\"姓名\":\"Name\",\"性别\":\"Gender\",\"出生日期\":\"Birthday\",\"联系方式\":\"Contact\",\"国籍\":\"Nationality\",\"行政等级\":\"Administrative level\",\"组织等级\":\"Organization level\",\"保密等级\":\"Security level\",\"下载\":\"Download\",\"审批单号\":\"Approval no\",\"发起人\":\"Sponsor\",\"所属部门\":\"Department\",\"所属岗位\":\"Position\",\"开始时间\":\"Starting time\",\"完成时间\":\"Complete time\",\"抄送人\":\"CC​\",\"审批通过后，通知抄送人\":\"After approval, notify the CC\",\"附件上传\":\"Upload files\",\"请选择\":\"Please choose\",\"暂不支持该控件\":\"This control is not supported yet\",\"已过滤上传失败的图片\":\"Filtered failed uploads\",\"币种\":\"Currency\",\"添加\":\"Add​\",\"请输入\":\"Please enter\",\"删除\":\"Delete\",\"取消\":\"Cancel​​\",\"驳回审批\":\"Rejected approval\",\"审批确认\":\"Approval confirmed\",\"确认驳回\":\"Confirm dismissal\",\"确认通过\":\"Confirmed\",\"驳回原因\":\"Reason for rejection\",\"审批意见\":\"Approval comments​\",\"撤销审批\":\"Cancel approval\",\"必填\":\"Required\",\"选填\":\"Optional\",\"参数错误\":\"Error\",\"搜索姓名/审批单名字\":\"Search name / approval name\",\"驳回\":\"Reject\",\"通过\":\"Pass\",\"撤销提示\":\"Reminder prompt​​\",\"确认撤销审批吗？\":\"Confirm cancel approval?\",\"我再想想\":\"Cancel\",\"确认\":\"Confirm\",\"提交审批\":\"Submit for approval​\",\"请完善表单的必填项\":\"Please complete form required fields\",\"抄送我的\":\"Copy me\",\"我发起的\":\"I initiated\",\"我已审批\":\"I have approved\",\"待我审批\":\"Pending my approval\",\"请输入工号\":\"Please enter ID number\",\"请输入密码\":\"Please enter password\",\"登录\":\"Log in\",\"登陆表示同意系统的\":\"Sign into agree with the system\",\"隐私协议\":\"Privacy agreement\",\"新密码\":\"New password\",\"新密码确认\":\"New password confirmation\",\"请再次输入密码\":\"Please enter password again\",\"请输入新密码\":\"Please enter a new password\",\"两次输入密码不一致\":\"Incorrect password entered twice\",\"提交\":\"Submit\",\"全天\":\"All day\",\"当日暂无日程，可点击右上角“+”创建日程\":\"There is no schedule for the day, you can click \\\"+\\\" in the upper right corner to create a schedule\",\"已展示当日所有日程\":\"All schedules for the day shown\",\"已完成\":\"Completed\",\"详情\":\"Details\",\"新建日程\":\"New schedule​\",\"添加日程、会议、活动等标题\":\"Add headlines for agendas, meetings, events, etc.\",\"添加备注\":\"Add notes\",\"此日程不存在\":\"This schedule does not exist\",\"修改\":\"Modify \",\"结束时间不能早于开始时间\":\"End time cannot be earlier than start time\",\"提示\":\"Prompt\",\"确定要修改此日程吗？此为重复日程\":\"Sure to modify this schedule? This is a repeating schedule\",\"确定要删除此日程吗？此为重复日程\":\"Are you sure you want to delete this schedule? This is a repeating schedule\",\"仅修改此日程\":\"Modify this schedule only\",\"仅删除此日程\":\"Delete this schedule only\",\"修改所有将来的日程\":\"Modify all future schedules\",\"删除所有将来的日程\":\"Delete all future schedules\",\"日程详情\":\"Schedule details\",\"编辑\":\"Edit\",\"删除日程\":\"Delete schedule​\",\"设置\":\"Set\",\"清除缓存\":\"Clear cache\",\"关于我们\":\"About us\",\"退出登录\":\"Sign out​\",\"确认要清除缓存吗？\":\"Are you sure to clear the cache?\",\"清除\":\"Clear\",\"清除成功\":\"Cleared successfully\",\"确认要退出登录吗？\":\"Are you sure​ to log out?\",\"系统信息\":\"System message\",\"登录名\":\"Log-in name\",\"系统语言\":\"System language\",\"切换语言\":\"Change language\",\"删除提示\":\"Delete tip​\",\"修改提示\":\"Modify tip\",\"确认删除日程吗？\":\"Sure to delete?\",\"提醒时间\":\"Remind time\",\"重复周期\":\"Repeat​\",\"欢迎使用ICCC移动办公系统\":\"Welcome to ICCC OA system\",\"下次登录不再提示\":\"No reminding for next login\",\"由于您能力突出任职多个岗位，首次登录将进入主岗位\":\"Due to your ability serve to multiple positions, the first login will enter to main position\",\"登录后可以在\":\"After logging in, you could\",\"模块切换岗位，处理对应的岗位事务，如下图所示：\":\"switching positions module, Handle corresponding post affairs, as shown in following figure\",\"我知道了\":\"i know\",\"切换岗位提示\":\"Position changing notification\",\"当前登录岗位为\":\"recentl login position is\",\"请选择要切换的岗位\":\"please select changing position\",\"切换\":\"change\",\"请选择日期\":\"please select date\"}");

/***/ }),

/***/ "./src/i18n/lang/km.json":
/*!*******************************!*\
  !*** ./src/i18n/lang/km.json ***!
  \*******************************/
/*! exports provided: calendars, 今日, 不提醒, 不重复, 每天, 每周, 每月, 日程开始前5分钟, 日程开始前10分钟, 日程开始前15分钟, 日程开始前30分钟, 日程开始前1小时, 消息, 审批, 日程, 我的, 早上好, 下午好, 晚上好, 已审批的, 待审批的, 版本, 完成, 个人信息, 员工编号, 姓名, 性别, 出生日期, 联系方式, 国籍, 行政等级, 组织等级, 保密等级, 下载, 审批单号, 发起人, 所属部门, 所属岗位, 开始时间, 完成时间, 抄送人, 审批通过后，通知抄送人, 附件上传, 请选择, 暂不支持该控件, 已过滤上传失败的图片, 币种, 添加, 请输入, 删除, 取消, 驳回审批, 审批确认, 确认驳回, 确认通过, 驳回原因, 审批意见, 撤销审批, 必填, 选填, 参数错误, 搜索姓名/审批单名字, 驳回, 通过, 撤销提示, 确认撤销审批吗？, 我再想想, 确认, 提交审批, 请完善表单的必填项, 抄送我的, 我发起的, 我已审批, 待我审批, 请输入工号, 请输入密码, 登录, 登陆表示同意系统的, 隐私协议, 新密码, 新密码确认, 请再次输入密码, 请输入新密码, 两次输入密码不一致, 提交, 全天, 当日暂无日程，可点击右上角“+”创建日程, 已展示当日所有日程, 已完成, 详情, 新建日程, 添加日程、会议、活动等标题, 添加备注, 此日程不存在, 修改, 结束时间不能早于开始时间, 提示, 确定要修改此日程吗？此为重复日程, 确定要删除此日程吗？此为重复日程, 仅修改此日程, 仅删除此日程, 修改所有将来的日程, 删除所有将来的日程, 日程详情, 编辑, 删除日程, 设置, 清除缓存, 关于我们, 退出登录, 确认要清除缓存吗？, 清除, 清除成功, 确认要退出登录吗？, 系统信息, 登录名, 系统语言, 切换语言, 删除提示, 修改提示, 确认删除日程吗？, 提醒时间, 重复周期, 欢迎使用ICCC移动办公系统, 下次登录不再提示, 由于您能力突出任职多个岗位，首次登录将进入主岗位, 登录后可以在, 模块切换岗位，处理对应的岗位事务，如下图所示：, 我知道了, 切换岗位提示, 当前登录岗位为, 请选择要切换的岗位, 切换, 请选择日期, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"calendars\":[\"S\",\"M\",\"T\",\"W\",\"C\",\"F\",\"S\"],\"今日\":\"ថ្ងៃនេះ\",\"不提醒\":\"មិនរំលឹក\",\"不重复\":\" ​មិនធ្វើម្តងទៀត\",\"每天\":\" ប្រចាំថ្ងៃ\",\"每周\":\" ប្រចាំសប្តាហ៏\",\"每月\":\" ប្រចាំខែ\",\"日程开始前5分钟\":\" ៥ នាទីមុនចាប់ផ្តើម\",\"日程开始前10分钟\":\" ១០ នាទីមុនចាប់ផ្តើម\",\"日程开始前15分钟\":\" ១៥ នាទីមុនចាប់ផ្តើម\",\"日程开始前30分钟\":\" ៣០ នាទីមុនចាប់ផ្តើម\",\"日程开始前1小时\":\" ១ម៉ោងមុនចាប់ផ្តើម\",\"消息\":\" ការជូនដំណឹង\",\"审批\":\" ការអនុម័ត\",\"日程\":\"​ កាលវិភាគ\",\"我的\":\" របស់ខ្ញុំ\",\"早上好\":\" អរុណសួស្តី\",\"下午好\":\" សាយ័ណ្ហសួស្តី\",\"晚上好\":\" រាត្រីសួស្តី\",\"已审批的\":\"បានអនុម័ត\",\"待审批的\":\"រង់ចាំការអនុម័ត\",\"版本\":\" កំណែ\",\"完成\":\" រួចរាល់\",\"个人信息\":\" ព័ត៌មានផ្ទាល់ខ្លួន\",\"员工编号\":\" អត្តលេខនិយោជិក\",\"姓名\":\" ឈ្មោះ\",\"性别\":\" ភេទ\",\"出生日期\":\" ថ្ងៃខែឆ្នាំកំណើត\",\"联系方式\":\" ទំនាក់ទំនង\",\"国籍\":\" សញ្ជាតិ\",\"行政等级\":\" កំរិតរដ្ឋបាល\",\"组织等级\":\" កំរិតអង្គភាព\",\"保密等级\":\"​ កំរិតសុវត្ថិភាព\",\"下载\":\" ទាញយក\",\"审批单号\":\" លេខអនុម័ត\",\"发起人\":\" អ្នកឧបត្ថម្ភ\",\"所属部门\":\" គ្រប់ផ្នែក\",\"所属岗位\":\" គ្រប់មុខតំណែង\",\"开始时间\":\" ពេលចាប់ផ្តើម\",\"完成时间\":\" ពេលបញ្ចប់\",\"抄送人\":\" អ្នកដឹងលឺ\",\"审批通过后，通知抄送人\":\" ជូនដំណឹងដល់អ្នកដឹងលឺបន្ទាប់ពីអនុម័ត\",\"附件上传\":\" ឯកសារភ្ជាប់\",\"请选择\":\" សូមជ្រើសរើស\",\"暂不支持该控件\":\" ការត្រួតពិនិត្យនេះមិនទាន់ត្រូវបានគាំទ្រនៅឡើយ\",\"已过滤上传失败的图片\":\" ការដាក់ចូលប្រព័ន្ធបានបរាជ័យ\",\"币种\":\" រូបិយប័ណ្ណ\",\"添加\":\" បន្ថែម\",\"请输入\":\" សូមបញ្ជូល\",\"删除\":\" លុបចោល\",\"取消\":\" បោះបង់ \",\"驳回审批\":\" បដិសេដអនុម័ត\",\"审批确认\":\" បញ្ជាក់ការអនុម័ត\",\"确认驳回\":\" បញ្ជាក់ការបដិសេធត្រឡប់\",\"确认通过\":\" បញ្ជាក់បានសម្រេច\",\"驳回原因\":\"​ មូលហេតុបដិសេដ\",\"审批意见\":\" យោបល់ពេលអនុម័ត\",\"撤销审批\":\" បោះបង់ការអនុម័ត\",\"必填\":\" តម្រូវបំពេញ\",\"选填\":\" ​ស្រេចចិត្ត\",\"参数错误\":\"​ កំហុសប៉ារ៉ាម៉ែត្រ\",\"搜索姓名/审批单名字\":\" ស្វែងរកឈ្មោះ / ឈ្មោះត្រូវបាន​អនុម័ត\",\"驳回\":\"បោះបង់ចោល\",\"通过\":\"អនុម័ត\",\"撤销提示\":\"រំលឹក\",\"确认撤销审批吗？\":\" បញ្ជាក់បិសេដការអនុម័ត? \",\"我再想想\":\" ខ្ញុំគិតបន្តិច\",\"确认\":\" យល់ព្រម\",\"提交审批\":\" ស្នើសុំការយល់ព្រម\",\"请完善表单的必填项\":\" សូមបញ្ចប់ចន្លោះត្រូវបំពេញ\",\"抄送我的\":\"ចម្លងខ្ញុំ\",\"我发起的\":\" ខ្ញុំផ្ញើរចេញ\",\"我已审批\":\" ខ្ញុំបានយល់ព្រម\",\"待我审批\":\" រងចាំខ្ញុំយល់ព្រម\",\"请输入工号\":\" សូមបញ្ជុលអត្តលេខ\",\"请输入密码\":\" សូមបញ្ជុលលេខសំងាត់\",\"登录\":\" ចូល\",\"登陆表示同意系统的\":\" ចុចចូលដើម្បីយល់ព្រមជាមួយប្រព័ន្ធ\",\"隐私协议\":\" កិច្ចព្រមព្រៀងឯកជនភាព\",\"新密码\":\" លេខសម្ងាត់ថ្មី\",\"新密码确认\":\" បញ្ជាក់លេខសម្ងាត់ថ្មី\",\"请再次输入密码\":\" សូមបញ្ជុលលេខសម្ងាត់ម្តងទៀត\",\"请输入新密码\":\" សូមបញ្ជុលលេខសម្ងាត់ថ្មី\",\"两次输入密码不一致\":\" លេខសម្ងាត់បញ្ជុលទាំងពីរដងមិនត្រឹមត្រូវ\",\"提交\":\"ដាក់ស្នើ\",\"全天\":\"ពេញមួយថ្ងៃ\",\"当日暂无日程，可点击右上角“+”创建日程\":\"មិនមានកាលវិភាគសម្រាប់ថ្ងៃនេះទេអ្នកអាចចុច \\\"+\\\" នៅជ្រុងខាងស្តាំខាងលើដើម្បីបង្កើតកាលវិភាគ\",\"已展示当日所有日程\":\" កាលវិភាគទាំងអស់សម្រាប់ថ្ងៃនេះបានបង្ហាញ\",\"已完成\":\"បញ្ចប់\",\"详情\":\"លំអិត\",\"新建日程\":\" កាលវិភាគថ្មី\",\"添加日程、会议、活动等标题\":\" បន្ថែមចំណងជើងសម្រាប់កាលវិភាគ ការប្រជុំ ព្រឹត្តិការណ៍។ ល។\",\"添加备注\":\" បន្ថែមកំណត់ចំណាំ\",\"此日程不存在\":\" មិនមានកាលវិភាគនេះ\",\"修改\":\"កែតំរូវ\",\"结束时间不能早于开始时间\":\" ពេលបញ្ចប់មិនអាចមុនពេលចាប់ផ្តើម\",\"提示\":\"រំលឹក\",\"确定要修改此日程吗？此为重复日程\":\" នេះជាកាលវិភាគជ្រាំដែល ច្បាស់ទេត្រូវកែតំរូវ\",\"确定要删除此日程吗？此为重复日程\":\" នេះជាកាលវិភាគជ្រាំដែល ច្បាស់ទេត្រូវលុបចោល\",\"仅修改此日程\":\" កែប្រែកាលវិភាគនេះតែប៉ុណ្ណោះ\",\"仅删除此日程\":\" លុបចោលកាលវិភាគនេះតែប៉ុណ្ណោះ\",\"修改所有将来的日程\":\" កែប្រែកាលវិភាគនាពេលអនាគតទាំងអស់\",\"删除所有将来的日程\":\" លុបចោលកាលវិភាគនាពេលអនាគតទាំងអស់\",\"日程详情\":\" ព័ត៌មានលម្អិតអំពីកាលវិភាគ\",\"编辑\":\"កែសម្រួល\",\"删除日程\":\" លុបកាលវិភាគ\",\"设置\":\"រៀបចំ\",\"清除缓存\":\" សម្អាតឃ្លាំងសម្ងាត់\",\"关于我们\":\" អំពីយើង\",\"退出登录\":\" ចាក់ចេញ\",\"确认要清除缓存吗？\":\" តើអ្នកប្រាកដថាលុបឃ្លាំងសម្ងាត់ទេ?\",\"清除\":\"លុបចោល\",\"清除成功\":\" លុបចោលបានសម្រេច\",\"确认要退出登录吗？\":\" តើអ្នកប្រាកដថាចាក់ចេញ?\",\"系统信息\":\" ព័ត៌មានពីប្រព័ន្ធ\",\"登录名\":\" ឈ្មោះចូល\",\"系统语言\":\" ភាសារពីប្រព័ន្ធ\",\"切换语言\":\" ប្តូរភាសារ\",\"删除提示\":\" លុបចោលការរំលឹក\",\"修改提示\":\" កែតំរូវការរំលឹក\",\"确认删除日程吗？\":\"ប្រាកក់លុបចោល?\",\"提醒时间\":\" ពេលរំលឹក\",\"重复周期\":\"ដដែលៗ\",\"欢迎使用ICCC移动办公系统\":\"ស្វាគមន៏ការប្រើប្រាស់ប្រព័ន្ធការិយាល័យចល័តICCC\",\"下次登录不再提示\":\"មិនសួរម្តងទៀតសំរាប់ការចូលលើកក្រោយ\",\"由于您能力突出任职多个岗位，首次登录将进入主岗位\":\"ដោយសារតែសមត្ថភាពរបស់អ្នកបម្រើច្រើនមុខតំណែង ដូច្នេះការចូលដំបូងនឹងចូលក្នុងមុខតំណែងចំបង\",\"登录后可以在\":\"បន្ទាប់ពីចូលអ្នកអាច\",\"模块切换岗位，处理对应的岗位事务，如下图所示：\":\"ម៉ូឌុលប្តូរមុខតំណែង ដោះស្រាយមុខតំណែងដែរមានដូចបង្ហាញក្នុងរូបភាពខាងក្រោម\",\"我知道了\":\"ខ្ញុំដឺង\",\"切换岗位提示\":\"ផ្តល់ដំណឹងក្នុងការប្តូរមុខតំណែង\",\"当前登录岗位为\":\"មុខតំណែងដែរបានចូលគឺ\",\"请选择要切换的岗位\":\"សូមជ្រើសរើសមុខតំណែងដែរត្រូវប្តូរ\",\"切换\":\"ប្តូរ\",\"请选择日期\":\"សូមជ្រើសរើសថ្ងៃខែ\"}");

/***/ }),

/***/ "./src/i18n/lang/zh-cn.json":
/*!**********************************!*\
  !*** ./src/i18n/lang/zh-cn.json ***!
  \**********************************/
/*! exports provided: calendars, 今日, 不提醒, 不重复, 每天, 每周, 每月, 日程开始前5分钟, 日程开始前10分钟, 日程开始前15分钟, 日程开始前30分钟, 日程开始前1小时, 消息, 审批, 日程, 我的, 早上好, 下午好, 晚上好, 已审批的, 待审批的, 版本, 完成, 个人信息, 员工编号, 姓名, 性别, 出生日期, 联系方式, 国籍, 行政等级, 组织等级, 保密等级, 下载, 审批单号, 发起人, 所属部门, 所属岗位, 开始时间, 完成时间, 抄送人, 审批通过后，通知抄送人, 附件上传, 请选择, 暂不支持该控件, 已过滤上传失败的图片, 币种, 添加, 请输入, 删除, 取消, 驳回审批, 审批确认, 确认驳回, 确认通过, 驳回原因, 审批意见, 撤销审批, 必填, 选填, 参数错误, 搜索姓名/审批单名字, 驳回, 通过, 撤销提示, 确认撤销审批吗？, 我再想想, 确认, 提交审批, 请完善表单的必填项, 抄送我的, 我发起的, 我已审批, 待我审批, 请输入工号, 请输入密码, 登录, 登陆表示同意系统的, 隐私协议, 新密码, 新密码确认, 请再次输入密码, 请输入新密码, 两次输入密码不一致, 提交, 全天, 当日暂无日程，可点击右上角“+”创建日程, 已展示当日所有日程, 已完成, 详情, 新建日程, 添加日程、会议、活动等标题, 添加备注, 此日程不存在, 修改, 结束时间不能早于开始时间, 提示, 确定要修改此日程吗？此为重复日程, 确定要删除此日程吗？此为重复日程, 仅修改此日程, 仅删除此日程, 修改所有将来的日程, 删除所有将来的日程, 日程详情, 编辑, 删除日程, 设置, 清除缓存, 关于我们, 退出登录, 确认要清除缓存吗？, 清除, 清除成功, 确认要退出登录吗？, 系统信息, 登录名, 系统语言, 切换语言, 删除提示, 修改提示, 确认删除日程吗？, 提醒时间, 重复周期, 欢迎使用ICCC移动办公系统, 下次登录不再提示, 由于您能力突出任职多个岗位，首次登录将进入主岗位, 登录后可以在, 模块切换岗位，处理对应的岗位事务，如下图所示：, 我知道了, 切换岗位提示, 当前登录岗位为, 请选择要切换的岗位, 切换, 请选择日期, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"calendars\":[\"日\",\"一\",\"二\",\"三\",\"四\",\"五\",\"六\"],\"今日\":\"今日\",\"不提醒\":\"不提醒\",\"不重复\":\"不重复\",\"每天\":\"每天\",\"每周\":\"每周\",\"每月\":\"每月\",\"日程开始前5分钟\":\"日程开始前5分钟\",\"日程开始前10分钟\":\"日程开始前10分钟\",\"日程开始前15分钟\":\"日程开始前15分钟\",\"日程开始前30分钟\":\"日程开始前30分钟\",\"日程开始前1小时\":\"日程开始前1小时\",\"消息\":\"消息\",\"审批\":\"审批\",\"日程\":\"日程\",\"我的\":\"我的\",\"早上好\":\"早上好\",\"下午好\":\"下午好\",\"晚上好\":\"晚上好\",\"已审批的\":\"已审批的\",\"待审批的\":\"待审批的\",\"版本\":\"版本\",\"完成\":\"完成\",\"个人信息\":\"个人信息\",\"员工编号\":\"员工编号\",\"姓名\":\"姓名\",\"性别\":\"性别\",\"出生日期\":\"出生日期\",\"联系方式\":\"联系方式\",\"国籍\":\"国籍\",\"行政等级\":\"行政等级\",\"组织等级\":\"组织等级\",\"保密等级\":\"保密等级\",\"下载\":\"下载\",\"审批单号\":\"审批单号\",\"发起人\":\"发起人\",\"所属部门\":\"所属部门\",\"所属岗位\":\"所属岗位\",\"开始时间\":\"开始时间\",\"完成时间\":\"完成时间\",\"抄送人\":\"抄送人\",\"审批通过后，通知抄送人\":\"审批通过后，通知抄送人\",\"附件上传\":\"附件上传\",\"请选择\":\"请选择\",\"暂不支持该控件\":\"暂不支持该控件\",\"已过滤上传失败的图片\":\"已过滤上传失败的图片\",\"币种\":\"币种\",\"添加\":\"添加\",\"请输入\":\"请输入\",\"删除\":\"删除\",\"取消\":\"取消\",\"驳回审批\":\"驳回审批\",\"审批确认\":\"审批确认\",\"确认驳回\":\"确认驳回\",\"确认通过\":\"确认通过\",\"驳回原因\":\"驳回原因\",\"审批意见\":\"审批意见\",\"撤销审批\":\"撤销审批\",\"必填\":\"必填\",\"选填\":\"选填\",\"参数错误\":\"参数错误\",\"搜索姓名/审批单名字\":\"搜索姓名/审批单名字\",\"驳回\":\"驳回\",\"通过\":\"通过\",\"撤销提示\":\"撤销提示\",\"确认撤销审批吗？\":\"确认撤销审批吗？\",\"我再想想\":\"我再想想\",\"确认\":\"确认\",\"提交审批\":\"提交审批\",\"请完善表单的必填项\":\"请完善表单的必填项\",\"抄送我的\":\"抄送我的\",\"我发起的\":\"我发起的\",\"我已审批\":\"我已审批\",\"待我审批\":\"待我审批\",\"请输入工号\":\"请输入工号\",\"请输入密码\":\"请输入密码\",\"登录\":\"登录\",\"登陆表示同意系统的\":\"登陆表示同意系统的\",\"隐私协议\":\"隐私协议\",\"新密码\":\"新密码\",\"新密码确认\":\"新密码确认\",\"请再次输入密码\":\"请再次输入密码\",\"请输入新密码\":\"请输入新密码\",\"两次输入密码不一致\":\"两次输入密码不一致\",\"提交\":\"提交\",\"全天\":\"全天\",\"当日暂无日程，可点击右上角“+”创建日程\":\"当日暂无日程，可点击右上角“+”创建日程\",\"已展示当日所有日程\":\"已展示当日所有日程\",\"已完成\":\"已完成\",\"详情\":\"详情\",\"新建日程\":\"新建日程\",\"添加日程、会议、活动等标题\":\"添加日程、会议、活动等标题\",\"添加备注\":\"添加备注\",\"此日程不存在\":\"此日程不存在\",\"修改\":\"修改\",\"结束时间不能早于开始时间\":\"结束时间不能早于开始时间\",\"提示\":\"提示\",\"确定要修改此日程吗？此为重复日程\":\"确定要修改此日程吗？此为重复日程\",\"确定要删除此日程吗？此为重复日程\":\"确定要删除此日程吗？此为重复日程\",\"仅修改此日程\":\"仅修改此日程\",\"仅删除此日程\":\"仅删除此日程\",\"修改所有将来的日程\":\"修改所有将来的日程\",\"删除所有将来的日程\":\"删除所有将来的日程\",\"日程详情\":\"日程详情\",\"编辑\":\"编辑\",\"删除日程\":\"删除日程\",\"设置\":\"设置\",\"清除缓存\":\"清除缓存\",\"关于我们\":\"关于我们\",\"退出登录\":\"退出登录\",\"确认要清除缓存吗？\":\"确认要清除缓存吗？\",\"清除\":\"清除\",\"清除成功\":\"清除成功\",\"确认要退出登录吗？\":\"确认要退出登录吗？\",\"系统信息\":\"系统信息\",\"登录名\":\"登录名\",\"系统语言\":\"系统语言\",\"切换语言\":\"切换语言\",\"删除提示\":\"删除提示\",\"修改提示\":\"修改提示\",\"确认删除日程吗？\":\"确认删除日程吗？\",\"提醒时间\":\"提醒时间\",\"重复周期\":\"重复周期\",\"欢迎使用ICCC移动办公系统\":\"欢迎使用ICCC移动办公系统\",\"下次登录不再提示\":\"下次登录不再提示\",\"由于您能力突出任职多个岗位，首次登录将进入主岗位\":\"由于您能力突出任职多个岗位，首次登录将进入主岗位\",\"登录后可以在\":\"登录后可以在\",\"模块切换岗位，处理对应的岗位事务，如下图所示：\":\"模块切换岗位，处理对应的岗位事务，如下图所示：\",\"我知道了\":\"我知道了\",\"切换岗位提示\":\"切换岗位提示\",\"当前登录岗位为\":\"当前登录岗位为\",\"请选择要切换的岗位\":\"请选择要切换的岗位\",\"切换\":\"切换\",\"请选择日期\":\"请选择日期\"}");

/***/ }),

/***/ "./src/lib/request/index.js":
/*!**********************************!*\
  !*** ./src/lib/request/index.js ***!
  \**********************************/
/*! exports provided: fetch, get, post, cancel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/lib/utils.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config */ "./src/config/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/**
 * 设置cookie
 * @param {*} headers 
 */

function setCookies(headers) {
  var token = $tools.getToken();

  if (token) {
    if (!headers.Cookie) headers.Cookie = '';
    headers.Cookie = "sec_token=".concat(token, ";language=").concat($Caches.getFreeze('lang', 'zh-cn'));
  }
}
/**
 * 构建ajax的option
 * @param {*} option 
 */


function buildOption(url, option) {
  // 如果不传入name则用url
  // 参考eeui ajax文档 请求名称，用于取消请求
  if (!option.name) {
    option.name = url;
  }

  if (!option.headers) option.headers = {};
  setCookies(option.headers);
} // 到处原始ajax对象


var fetch = eeui.ajax;
/**
 * 登录失效处理
 */
//防止多次跳登录页面

var HasJumpToLogin = false;

function authHandle(_x) {
  return _authHandle.apply(this, arguments);
} //取得时区


function _authHandle() {
  _authHandle = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(result) {
    var token;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = $tools.getToken();

            if (result.code == -10001) {
              //防止重复弹窗，这里把登录失效的msg改成空，alert已处理空msg
              result.msg = "";
            }

            if (!(result.code == -10001 && token && !HasJumpToLogin)) {
              _context.next = 15;
              break;
            }

            HasJumpToLogin = true;
            toast('授权失效，请重新登录');
            _context.prev = 6;
            // 清除所有缓存
            $tools.logout();
            _context.next = 10;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["redirect"])('login/index.js', 'login', {
              statusBarType: 'immersion',
              statusBarStyle: true
            });

          case 10:
            _context.next = 14;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](6);

          case 14:
            setTimeout(function () {
              HasJumpToLogin = false;
            }, 1000);

          case 15:
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t1 = _context["catch"](0);
            eeuiLog.log(_context.t1.message);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17], [6, 12]]);
  }));
  return _authHandle.apply(this, arguments);
}

function getTimezone() {
  // Get UTC offset
  var offset = new Date().getTimezoneOffset();
  var o = Math.abs(offset);
  offset = (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + o % 60).slice(-2);
  return offset;
}
/**
 * 添加url参数
 */


function addDefaultUrlParams(url) {
  var timezone = getTimezone();
  var urlParams = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.parseUrl(url);
  urlParams.query.timezone = timezone;
  urlParams.query.device_type = String(WXEnvironment.platform).toLocaleLowerCase();
  urlParams.query.version = eeui.getLocalVersionName();
  urlParams.query.language = $Caches.getFreeze('lang', 'zh-cn');
  return urlParams.url + '?' + query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(urlParams.query);
}
/**
 * 
 * @param {*} url 
 * @param {*} option 如果option传入skipAUth，表示这个接口不做登录授权处理
 * 
 */


var get = function get(url) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    type: 'json',
    skipAuth: false
  };
  return new Promise(function (resolve, reject) {
    try {
      var BASE_URL = $Caches.getFreeze('apiHost', _config__WEBPACK_IMPORTED_MODULE_2__["default"].host[_config__WEBPACK_IMPORTED_MODULE_2__["default"].env]);
      var baseURL = url.startsWith('http://') || url.startsWith('https://') ? '' : BASE_URL;
      url = addDefaultUrlParams(url);
      buildOption(url, option);
      fetch(_objectSpread({}, option, {
        method: 'get',
        url: baseURL + url,
        data: body
      }), function (ret) {
        if (ret.status == 'success') {
          /**
           * 如果option传入skipAUth，表示这个接口不做登录授权处理
           */
          if (!option.skipAuth) {
            authHandle(ret.result);
          }

          resolve(ret.result);
        } else if (ret.status == 'error') {
          if (ret.result == '已取消') {
            return reject(new Error('AJAX_CANCAL'));
          } // eeui.ajax status === 'error'的时候，没有message


          reject(new Error('请求失败，请检查网络是否异常'));
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};
/**
 * 
 * @param {*} url 
 * @param {*} body 
 * @param {*} option 如果option传入skipAUth，表示这个接口不做登录授权处理
 */

var post = function post(url) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    type: 'json',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    skipAuth: false
  };
  return new Promise(function (resolve, reject) {
    try {
      var BASE_URL = $Caches.getFreeze('apiHost', _config__WEBPACK_IMPORTED_MODULE_2__["default"].host[_config__WEBPACK_IMPORTED_MODULE_2__["default"].env]);
      var baseURL = url.startsWith('http://') || url.startsWith('https://') ? '' : BASE_URL;
      url = addDefaultUrlParams(url);
      buildOption(url, option);
      fetch(_objectSpread({}, option, {
        method: 'post',
        url: baseURL + url,
        data: body
      }), function (ret) {
        if (ret.status == 'success') {
          /**
           * 如果option传入skipAUth，表示这个接口不做登录授权处理
           */
          if (!option.skipAuth) {
            authHandle(ret.result);
          }

          resolve(ret.result);
        } else if (ret.status == 'error') {
          // eeui.ajax status === 'error'的时候，没有message
          if (ret.result == '已取消') {
            return reject(new Error('AJAX_CANCAL'));
          }

          reject(new Error('请求失败，请检查网络是否异常'));
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};
/**
 * 
 * @param name    请求名称（留空则取消所有请求）
 */

var cancel = function cancel(name) {
  eeui.ajaxCancel(name);
};

/***/ }),

/***/ "./src/lib/storage/index.js":
/*!**********************************!*\
  !*** ./src/lib/storage/index.js ***!
  \**********************************/
/*! exports provided: set, get, remove, length, getAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/**
 * 基于weex storage模块，改成promise版
 */
var storage = weex.requireModule('storage');
/**
 * 设置
 * @param {*} key 
 * @param {*} value 
 */

var set = function set(key, value) {
  return new Promise(function (resolve, reject) {
    storage.setItem(key, value, function (e) {
      if (e.result == 'success') {
        resolve();
      } else {
        reject(e);
      }
    });
  });
};
/**
 * get
 * @param {*} key 
 */

var get = function get(key) {
  return new Promise(function (resolve, reject) {
    storage.getItem(key, function (e) {
      if (e.result == 'success') {
        resolve(e.data);
      } else {
        resolve(null);
      }
    });
  });
};
/**
 * 删除
 * @param {*} key 
 */

var remove = function remove(key) {
  return new Promise(function (resolve, reject) {
    storage.removeItem(key, function (e) {
      if (e.result == 'success') {
        resolve();
      } else {
        reject(e);
      }
    });
  });
};
/**
 * 获取已存储的数量
 * @param {*} e 
 */

var length = function length(e) {
  return new Promise(function (resolve, reject) {
    storage.length(function (e) {
      if (e.result == 'success') {
        resolve(e.data);
      } else {
        reject(e);
      }
    });
  });
};
/**
 * 获取已存储的健名数组
 * @param {*} e 
 */

var getAll = function getAll(e) {
  return new Promise(function (resolve, reject) {
    storage.getAll(function (e) {
      if (e.result == 'success') {
        resolve(e.data);
      } else {
        reject(e);
      }
    });
  });
};

/***/ }),

/***/ "./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/*! exports provided: storage, request, setPagesDirPath, getPagesDirPath, getRealFilePath, redirect, jumpPage, debounce, throttle, sleep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPagesDirPath", function() { return setPagesDirPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPagesDirPath", function() { return getPagesDirPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRealFilePath", function() { return getRealFilePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirect", function() { return redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jumpPage", function() { return jumpPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/lib/storage/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return _storage__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./src/lib/request/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _request__WEBPACK_IMPORTED_MODULE_1__; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * 设置./src/pages的目录路径
 * ! 由于目前这个版本的eeui ios在组件里获取eeui.getPageInfo()会返回空对象(但是在pages对呀的页面获取是正常)
 * ! 所以在第一个app进入第一个pages的时候就设置一个全局变量，获取pages的相对路径
 * 
 * 发现可以通过root://pages定位到pages目录，不用那么折腾了
 */

var setPagesDirPath = function setPagesDirPath() {
  var info = eeui.getPageInfo();

  if (info && info.url) {
    eeui.setVariate('pages-path', info.url.replace(/^([^pages].*?)pages(.*?)$/, '$1pages'));
  }
};
/**
* 根据当前页面获取pages目录
* 
* return xxxx/pages
*/

var getPagesDirPath = function getPagesDirPath() {
  //  return eeui.getVariate('pages-path','');
  return 'root://pages';
};
/**
* 传入以src为根目录的相对地址，返回真实目录地址
* 
*/

var getRealFilePath = function getRealFilePath(path) {
  var pageDir = getPagesDirPath();
  return eeui.realUrl("".concat(pageDir, "/..").concat(path.startsWith('/') ? '' : '/').concat(path));
};
/**
 * 重定向到指定页面
 * 会关闭当前页面，调用eeui.closePage()
 * @param {*} path 相对于pages的地址 例如login/index
 * @param {*} name 可以指定页面的name
 * @param {*} closeAnimated 关闭页面动画，默认为false
 * @param {*} openAnimated 进入登录页面动画，默认为true
 */

var redirect = function redirect(path, name) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Promise(function (resolve, reject) {
    try {
      var pageDir = getPagesDirPath();
      var redirectUrl = eeui.realUrl("".concat(pageDir).concat(path.startsWith('/') ? '' : '/').concat(path));
      var defaultPageOption = {
        statusBarColor: '#ffffff',
        statusBarStyle: false,
        swipeBack: false,
        backPressedClose: false,
        openAnimated: true,
        statusBarType: 'immersion',
        safeAreaBottom: 0
      };
      eeui.openPage(_objectSpread({
        url: redirectUrl,
        pageName: name
      }, defaultPageOption, {}, option), function (result) {
        if (result.status == 'error') {
          reject(result);
        } else {
          resolve(result);
        }
      });
    } catch (e) {
      alert(e.message);
      reject(e);
    }
  });
};
/**
 * 页面跳转，封装基于/pages目录下的路径跳转
 * @param {*} path 传入基于/pages目录的路径。例如login/index
 * @param {*} option eeui.openPage参数
 */

var jumpPage = function jumpPage(path) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    try {
      var defaultPageOption = {
        statusBarColor: '#ffffff',
        statusBarStyle: false,
        swipeFullBack: true,
        statusBarType: 'immersion',
        safeAreaBottom: 0
      };
      var pageDir = getPagesDirPath();
      var page = eeui.realUrl("".concat(pageDir).concat(path.startsWith('/') ? '' : '/').concat(path));
      /**
       * 加上pageName保障点，不加pageName,有时会出现快递点击的时候，打开多个页面
       */

      var pageName = option.pageName || page;

      var info = _objectSpread({
        url: page,
        pageName: pageName
      }, defaultPageOption, {}, option);

      eeui.openPage(info, function (result) {
        if (result.status == 'error') {
          reject(result);
        } else {
          resolve(result);
        }
      });
    } catch (e) {
      alert(e.message);
      reject(e);
    }
  });
};
/**
 * 去抖动
 * @param {*} func 
 * @param {*} delay 
 */

var debounce = function debounce(func) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
};
/**
 * 节流
 * @param {*} func 
 * @param {*} threshhold 
 */

var throttle = function throttle(func, threshhold) {
  var last, timer;
  if (threshhold) threshhold = 250;
  return function () {
    var context = this;
    var args = arguments;
    var now = +new Date();

    if (last && now < last + threshhold) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        func.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      func.apply(context, args);
    }
  };
};
/**
 * 等待
 * @param {*} time 
 */

var sleep = function sleep() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(true);
    }, time);
  });
};

/***/ }),

/***/ "./src/mixins/layout.js":
/*!******************************!*\
  !*** ./src/mixins/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/layout */ "./src/components/layout/index.vue");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_layout__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _components_layout__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  methods: {
    $alert: function $alert(config) {
      var params = {};

      if (toString.call(config) === '[object String]') {
        params.message = config;
      } else {
        params = _objectSpread({}, config);
      }

      return this.$root.$refs.layout.alert(_objectSpread({}, params, {
        cancel: false
      }));
    },
    $confirm: function $confirm(config) {
      return this.$root.$refs.layout.alert(config);
    }
  }
});

/***/ }),

/***/ "./src/pages/index.vue?entry=true":
/*!****************************************!*\
  !*** ./src/pages/index.vue?entry=true ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../node_modules/less-loader?{"sourceMap":false}!../../../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader?{"patterns":["./src/assets/less/common.less"]}!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-57509004!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/style-resources-loader/lib/index.js?{\"patterns\":[\"./src/assets/less/common.less\"]}!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-57509004!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../../../../usr/local/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-57509004!../../../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-57509004!../../../../../usr/local/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dayao/Code/eeui/eeui-demo/src/pages/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-57509004"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });