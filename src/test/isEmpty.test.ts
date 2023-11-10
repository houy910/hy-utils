/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-11-07 16:43:50
 * @LastEditors: houyan
 * @LastEditTime: 2023-11-08 18:37:03
 */
import { isEmpty } from '../isEmpty';

describe('isEmpty', () => {
  it('false', () => {
    expect(isEmpty(false)).toBeTruthy();
  });

  it('0', () => {
    expect(isEmpty(0)).toBeTruthy();
  });

  it('空字符串', () => {
    expect(isEmpty('')).toBeTruthy();
  });
  
  it('NaN', () => {
    expect(isEmpty(NaN)).toBeTruthy();
  });

  it('null', () => {
    expect(isEmpty(null)).toBeTruthy();
  });

  it('undefined', () => {
    expect(isEmpty(undefined)).toBeTruthy();
  });

  it('传对象', () => {
    expect(isEmpty({sex: 'male', age: 20})).toBeFalsy();
  });

  it('传空对象', () => {
    expect(isEmpty({})).toBeTruthy();
  });

  it('传空数组', () => {
    expect(isEmpty([])).toBeTruthy();
  });

  it('传数组', () => {
    expect(isEmpty([1])).toBeFalsy();
  });
});

