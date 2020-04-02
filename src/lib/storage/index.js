/**
 * 基于weex storage模块，改成promise版
 */

const storage = weex.requireModule('storage')

/**
 * 设置
 * @param {*} key 
 * @param {*} value 
 */
export const set = (key, value) => {
  return new Promise((resolve,reject)=>{
    storage.setItem(key,value, e=> {
      if(e.result == 'success') {
        resolve();
      }else{
        reject(e);
      }
    })
  })
}

/**
 * get
 * @param {*} key 
 */
export const get = key => {
  return new Promise((resolve,reject)=> {
    storage.getItem(key, e=> {
      if(e.result == 'success') {
        resolve(e.data);
      }else{
        resolve(null);
      }
    })
  })
}

/**
 * 删除
 * @param {*} key 
 */
export const remove = key => {
  return new Promise((resolve,reject)=> {
    storage.removeItem(key, e=> {
      if(e.result == 'success') {
        resolve();
      }else{
        reject(e);
      }
    })
  })
}

/**
 * 获取已存储的数量
 * @param {*} e 
 */
export const length = e=> {
  return new Promise((resolve,reject)=> {
    storage.length( e=> {
      if(e.result == 'success') {
        resolve(e.data);
      }else{
        reject(e);
      }
    })
  })
}

/**
 * 获取已存储的健名数组
 * @param {*} e 
 */
export const getAll = e => {
  return new Promise((resolve,reject)=> {
    storage.getAll( e=> {
      if(e.result == 'success') {
        resolve(e.data);
      }else{
        reject(e);
      }
    })
  })
}