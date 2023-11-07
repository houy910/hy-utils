/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-11-07 16:43:50
 * @LastEditors: houyan
 * @LastEditTime: 2023-11-07 16:47:36
 */
import { isObjectEmpty } from '../isObjectEmpty';

describe('isObjectEmpty', () => {
  it('传null', () => {
    expect(isObjectEmpty(null)).toEqual(true);
  });

  it('传undefined', () => {
    expect(isObjectEmpty(undefined)).toEqual(true);
  });

  it('传对象', () => {
    expect(isObjectEmpty({sex: 'male', age: 20})).toEqual(false);
  });
});