/**
 * 日程类型的缓存
 * 根据数组生成map对象
 * 操作缓存是直接修改map对应的值即可
 * 具体缓存key的zucheng ${name}_${typename}
 */

export default class DB {
  // 缓存名字
  name;
  constructor(name) {
    this.name = name;
  }

  /**
   * 添加一份数据
   * ! data不能包含null类型的数据，不然ios会闪退
   * @param {}} type 类型名字
   * @param {*} data 数据
   */
  add(type, data = ''){
    eeui.setCaches(`${this.name}-${type}`, data)
  }

  /**
   * 返回指定类型的数据
   * @param {*} type 类型名字
   * @param {*} default_rs 默认返回类型，不传默认返回空字符串
   * @return 如果没有则返回空字符串
   */
  get(type, default_rs = ''){
    return eeui.getCaches(`${this.name}-${type}`, default_rs)
  }
}