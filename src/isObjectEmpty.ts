/*
 * @Description: 判断对象是否为空
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-11-07 16:39:24
 * @LastEditors: houyan
 * @LastEditTime: 2023-11-07 16:49:34
 */
// 判断对象是否为空
export function isObjectEmpty (obj: Object | undefined | null ): Boolean {
    if(!obj) return true
    return obj && Object.keys(obj).length === 0
}