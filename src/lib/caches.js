/**
 * 缓存对象，
 * freeze 不会被用户清空
 * normal 会被用户清空
 */
  const KEYMAP = {
    freeze: "app_freeze", // 不随用户清空缓存被清除
    normal: "app_normal",
  }

  // 返回freeze缓存
  const getFreeze = (key, defaultValue = null) => {
    const freeze = eeui.getCaches(KEYMAP.freeze, {})
    //获取对呀的key
    if(key){
      return typeof freeze[key] !== 'undefined' ? freeze[key] : defaultValue
    }

    return freeze;
  }

  // 添加freeze缓存
  const setFreeze = (key, value) => {
    if(String(key).trim()) {
      const freeze = getFreeze();
      freeze[key] = value;
      eeui.setCaches(KEYMAP.freeze, freeze)
    }
  }

  // 删除freeze缓存
  const delFreeze = key => {
    if(String(key).trim()) {
      const freeze = getFreeze();
      if(typeof freeze[key] !== 'undefined'){
        delete freeze[key];
        eeui.setCaches(KEYMAP.freeze, freeze)
      }
    }
  }

  // 添加普通缓存
  const set = (key, value) => {
    if(String(key).trim()) {
      const normal = get();
      normal[key] = value;
      eeui.setCaches(KEYMAP.normal, normal)
    }
  }
  

  // 获取普通缓存
  const get = (key, defaultValue = null) => {
    const normal = eeui.getCaches(KEYMAP.normal, {})
    //获取对呀的key
    if(key){
      return typeof normal[key] !== 'undefined' ? normal[key] : defaultValue
    }

    return normal;
  }

  // 获取普通缓存
  const del = key => {
    if(String(key).trim()) {
      const normal = get();
      if(typeof normal[key] !== 'undefined'){
        delete normal[key];
        eeui.setCaches(KEYMAP.normal, normal)
      }
    }
  }

  // 清除缓存，可清除freeze缓存
  const clean = (needCleanFreeze = false) => {
    if(needCleanFreeze) {
      eeui.clearAllCaches()
    }else {
      const freeze = getFreeze();
      eeui.clearAllCaches()
      eeui.setCaches(KEYMAP.freeze, freeze)
    }
  }

export default {
    getFreeze,
    setFreeze,
    delFreeze,
    set,
    get,
    del,
    clean
  }