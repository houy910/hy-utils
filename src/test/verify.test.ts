/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-11-08 18:48:46
 * @LastEditors: houyan
 * @LastEditTime: 2023-11-10 15:27:51
 */
import { isLnglat, isPhoneNumber } from '../verify';

describe('isLnglat', () => {
    it('isLnglat("") should return false', () => {
      expect(isLnglat("")).toBeFalsy();
    });

    it('isLnglat("101.1,20.1") should return true', () => {
        expect(isLnglat('101.1,20.1')).toBeTruthy();
    });

    it('isLnglat("ssss,20.1") should return false', () => {
      expect(isLnglat('ssss,20.1')).toBeFalsy();
    });
});

describe('isPhoneNumber', () => {
    it('133232323201 should return false', () => {
      expect(isPhoneNumber('133232323201')).toBeFalsy();
    });
})