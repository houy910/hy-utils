/*
 * @Description: 传入枚举，返回键和值数组
 * @Version:
 * @Autor: houyan
 * @Date: 2023-11-10 16:24:51
 * @LastEditors: houyan
 * @LastEditTime: 2023-11-10 18:11:51
 */
// const enumTest = {
//     YES: {
//         value: 1,
//         desc: '是'
//     },
//     NO: {
//         value: 2,
//         desc: '否'
//     },
// }

// const result =  [{value: 1,desc: '是'}, {value: 2,desc: '否'}]

const getValueDescList = (obj: object): Array<object> => {
  if (!Object.prototype.isPrototypeOf(obj)) {
    throw Error("传入的不是对象");
  }
  const keyArr: Array<string> = Object.keys(obj);
  const arr = <any>[];

  keyArr.forEach((key: string) => {
    arr.push(obj[key as keyof typeof obj]);
  });

  return arr;
};

export { getValueDescList };
