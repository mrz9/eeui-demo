import * as storage from './storage';
import * as request from './request';

export {storage,request};


/**
 * 设置./src/pages的目录路径
 * ! 由于目前这个版本的eeui ios在组件里获取eeui.getPageInfo()会返回空对象(但是在pages对呀的页面获取是正常)
 * ! 所以在第一个app进入第一个pages的时候就设置一个全局变量，获取pages的相对路径
 * 
 * 发现可以通过root://pages定位到pages目录，不用那么折腾了
 */
export const setPagesDirPath = () => {
  let info = eeui.getPageInfo();
  if(info && info.url){
    eeui.setVariate('pages-path',info.url.replace(/^([^pages].*?)pages(.*?)$/,'$1pages'));
  }
}


/**
* 根据当前页面获取pages目录
* 
* return xxxx/pages
*/
export const getPagesDirPath = () => {
//  return eeui.getVariate('pages-path','');
  return 'root://pages'
}


/**
* 传入以src为根目录的相对地址，返回真实目录地址
* 
*/
export const getRealFilePath = (path)=>{
  const pageDir = getPagesDirPath();
  return eeui.realUrl(`${pageDir}/..${path.startsWith('/') ? '': '/'}${path}`);
}

/**
 * 重定向到指定页面
 * 会关闭当前页面，调用eeui.closePage()
 * @param {*} path 相对于pages的地址 例如login/index
 * @param {*} name 可以指定页面的name
 * @param {*} closeAnimated 关闭页面动画，默认为false
 * @param {*} openAnimated 进入登录页面动画，默认为true
 */
export const redirect = (path, name, option = {}) => {
  return new Promise((resolve,reject) => {
    try {
      const pageDir = getPagesDirPath();
      const redirectUrl = eeui.realUrl(`${pageDir}${path.startsWith('/') ? '': '/'}${path}`);

      const defaultPageOption = {
        statusBarColor: '#ffffff',
        statusBarStyle: false,
        swipeBack: false,
        backPressedClose: false,
        openAnimated: true,
        statusBarType: 'immersion',
        safeAreaBottom: 0
      }

      eeui.openPage({
        url: redirectUrl,
        pageName: name,
        ...defaultPageOption,
        ...option
      }, result=>{
        if(result.status == 'error'){
          reject(result)
        }else{
          resolve(result)
        }
      })
    }catch(e){
      alert(e.message)
      reject(e)
    }
  })
}

/**
 * 页面跳转，封装基于/pages目录下的路径跳转
 * @param {*} path 传入基于/pages目录的路径。例如login/index
 * @param {*} option eeui.openPage参数
 */
export const jumpPage = (path,option = {}) => {
  return new Promise((resolve,reject) => {
    try {
      const defaultPageOption = {
        statusBarColor: '#ffffff',
        statusBarStyle: false,
        swipeFullBack: true,
        statusBarType: 'immersion',
        safeAreaBottom: 0
      }
      const pageDir = getPagesDirPath();
      const page = eeui.realUrl(`${pageDir}${path.startsWith('/') ? '': '/'}${path}`);
      /**
       * 加上pageName保障点，不加pageName,有时会出现快递点击的时候，打开多个页面
       */
      let pageName = option.pageName || page
      const info = {
        url: page,
        pageName,
        ...defaultPageOption,
        ...option,
      }
      eeui.openPage(info, result=>{
        if(result.status == 'error'){
          reject(result)
        }else{
          resolve(result)
        }
      })
    }catch(e){
      alert(e.message)
      reject(e)
    }
  })
}

/**
 * 去抖动
 * @param {*} func 
 * @param {*} delay 
 */
export const debounce = (func, delay = 300) => {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args)
    }, delay);
  }
}

/**
 * 节流
 * @param {*} func 
 * @param {*} threshhold 
 */
export const throttle = (func, threshhold) => {
  var last, timer;
  if (threshhold) threshhold = 250;
  return function () {
    var context = this
    var args = arguments
    var now = +new Date()
    if (last && now < last + threshhold) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        func.apply(context, args)
      }, threshhold)
    } else {
      last = now
      func.apply(context, args)
    }
  }
}

/**
 * 等待
 * @param {*} time 
 */
export const sleep = (time = 300) =>{
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(true);
    }, time)
  })
}