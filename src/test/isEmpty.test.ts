/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-11-07 16:43:50
 * @LastEditors: houyan
 * @LastEditTime: 2023-11-07 17:24:34
 */
import { isEmpty } from '../isEmpty';

describe('isEmpty', () => {
  it('false', () => {
    expect(isEmpty(false)).toEqual(true);
  });

  it('空字符串', () => {
    expect(isEmpty('')).toEqual(true);
  });
  
  it('NaN', () => {
    expect(isEmpty(NaN)).toEqual(true);
  });

  it('null', () => {
    expect(isEmpty(null)).toEqual(true);
  });

  it('undefined', () => {
    expect(isEmpty(undefined)).toEqual(true);
  });

  it('传对象', () => {
    expect(isEmpty({sex: 'male', age: 20})).toEqual(false);
  });

  it('传空对象', () => {
    expect(isEmpty({})).toEqual(true);
  });

  it('传空数组', () => {
    expect(isEmpty([])).toEqual(true);
  });

  it('传数组', () => {
    expect(isEmpty([1])).toEqual(false);
  });
});