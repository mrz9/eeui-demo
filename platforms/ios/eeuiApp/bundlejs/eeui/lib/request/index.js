import { getPagesDirPath, redirect } from '../utils'
import config from '@/config'
import qs from 'query-string'

/**
 * 设置cookie
 * @param {*} headers 
 */
function setCookies(headers){
  const token = $tools.getToken();
  if(token) {
    if(!headers.Cookie) headers.Cookie = '';
    headers.Cookie = `sec_token=${token};language=${$Caches.getFreeze('lang','zh-cn')}`
  }
}

/**
 * 构建ajax的option
 * @param {*} option 
 */
function buildOption(url,option){
  // 如果不传入name则用url
  // 参考eeui ajax文档 请求名称，用于取消请求
  if(!option.name){
    option.name = url
  }
  if(!option.headers) option.headers = {};
  setCookies(option.headers);
}

// 到处原始ajax对象
export const fetch = eeui.ajax;


/**
 * 登录失效处理
 */
//防止多次跳登录页面
let HasJumpToLogin = false;

async function authHandle(result){
  try{
    const token = $tools.getToken();
    if(result.code == -10001){
      //防止重复弹窗，这里把登录失效的msg改成空，alert已处理空msg
      result.msg = ""
    }
  
    if(result.code == -10001 && token && !HasJumpToLogin){
      HasJumpToLogin = true;
      toast('授权失效，请重新登录');
      try{
        // 清除所有缓存
        $tools.logout();
        await redirect('login/index.js', 'login', {
          statusBarType: 'immersion',
          statusBarStyle: true
        })
      }catch(e){}
      setTimeout(()=>{
        HasJumpToLogin = false;
      },1000)
    }
  }catch(e){
    console.log(e.message);
  }
}

//取得时区
function getTimezone(){
  // Get UTC offset
  let offset = new Date().getTimezoneOffset();
  let o = Math.abs(offset);
  offset = (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
  return offset;
}
/**
 * 添加url参数
 */
function addDefaultUrlParams(url){
  const timezone = getTimezone()
  const urlParams = qs.parseUrl(url);
  urlParams.query.timezone = timezone;
  urlParams.query.device_type = String(WXEnvironment.platform).toLocaleLowerCase();
  urlParams.query.version = eeui.getLocalVersionName();
  urlParams.query.language = $Caches.getFreeze('lang','zh-cn');
  return urlParams.url + '?' + qs.stringify(urlParams.query)
}

/**
 * 
 * @param {*} url 
 * @param {*} option 如果option传入skipAUth，表示这个接口不做登录授权处理
 * 
 */
export const get = (url, body = {}, option = {type:'json', skipAuth: false}) => {
  return new Promise((resolve,reject) => {
    try {
      const BASE_URL = $Caches.getFreeze('apiHost', config.host[config.env]);
      let baseURL = url.startsWith('http://') || url.startsWith('https://') ? '' : BASE_URL;
      url = addDefaultUrlParams(url);
      buildOption(url, option)
      
      fetch({
        ...option,
        method: 'get',
        url: baseURL + url,
        data: body
      }, function(ret) {
        if(ret.status == 'success'){
          /**
           * 如果option传入skipAUth，表示这个接口不做登录授权处理
           */
          if(!option.skipAuth) {
            authHandle(ret.result);
          }
          resolve(ret.result);
        }else if(ret.status == 'error'){
          if(ret.result == '已取消') {
            return reject(new Error('AJAX_CANCAL'))
          }
          // eeui.ajax status === 'error'的时候，没有message
          reject(new Error('请求失败，请检查网络是否异常'));
        }
      });
    }catch(e){
      reject(e)
    }
  })
}

/**
 * 
 * @param {*} url 
 * @param {*} body 
 * @param {*} option 如果option传入skipAUth，表示这个接口不做登录授权处理
 */
export const post = (url, body = {}, option = {type:'json',headers: { 'Content-Type': 'application/x-www-form-urlencoded'}, skipAuth: false}) => {
  return new Promise((resolve,reject) => {
    try {
      const BASE_URL = $Caches.getFreeze('apiHost', config.host[config.env]);
      let baseURL = url.startsWith('http://') || url.startsWith('https://') ? '' : BASE_URL;
      url = addDefaultUrlParams(url);
      buildOption(url, option)
      fetch({
        ...option,
        method: 'post',
        url: baseURL + url,
        data: body,
      }, function(ret) {
        if(ret.status == 'success'){
          /**
           * 如果option传入skipAUth，表示这个接口不做登录授权处理
           */
          if(!option.skipAuth) {
            authHandle(ret.result);
          }
          resolve(ret.result);
        }else if(ret.status == 'error'){
          // eeui.ajax status === 'error'的时候，没有message
          if(ret.result == '已取消') {
            return reject(new Error('AJAX_CANCAL'))
          }
          
          reject(new Error('请求失败，请检查网络是否异常'));
        }
      });
    }catch(e){
      reject(e)
    }
  })
}

/**
 * 
 * @param name    请求名称（留空则取消所有请求）
 */
export const cancel = name => {
  eeui.ajaxCancel(name)
}