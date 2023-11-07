/*
 * @Description: 判断传入参数是否为空
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-11-07 16:39:24
 * @LastEditors: houyan
 * @LastEditTime: 2023-11-07 17:23:58
 */
// 判断参数为空
// ''、undefined、null、[]、 {}、0、false、NaN都是为空
export function isEmpty (val: Array<any> | object | undefined | null | string | number | boolean ): Boolean {
    if(Number.isNaN(val)) return true // 参数为NaN
    if(val === '') return true  // 参数为空字符串
    if(val === 0) return true // 参数为0
    if(!val && val !== 0 && val !== '') return true  // 参数为undefined null
    if(Array.isArray(val) && val.length === 0 ) return true // 数组为空
    if(Object.prototype.isPrototypeOf(val) && !Object.keys(val).length) return true  // 对象为空
    return false
}