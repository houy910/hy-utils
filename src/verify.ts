/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-11-08 18:47:10
 * @LastEditors: houyan
 * @LastEditTime: 2023-11-08 18:48:38
 */
// 判断字符串经纬度格式是否正确，正确格式如：'102.22,28.1'
const isLnglat = (val: string) :Boolean => {
    const regx = /[^\d.,]]*/g
    const position = val.split(',')

    if (regx.test(val))  return false
    if (position.length !== 2) return false
    return true
}

export {
    isLnglat
}