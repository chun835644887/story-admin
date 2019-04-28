import {cryptoConfig} from '@/config';
const crypto = require('crypto');
const Config = require('../config');
// const _cipher = crypto.createCipher(cryptoConfig.encryptAlg, cryptoConfig.encrtptPwd);
// const _decipher = crypto.createDecipher(cryptoConfig.encryptAlg, cryptoConfig.encrtptPwd);
/**
 * 解密
 */
export const decipher = (str) => {
    const _decipher = crypto.createDecipher(cryptoConfig.encryptAlg, cryptoConfig.encrtptPwd);
    _decipher.update(str, cryptoConfig.hex, cryptoConfig.encode);
    return _decipher.final(cryptoConfig.encode);
}
/**
 * 加密
 */
export const cipher = (str) => {
    const _cipher = crypto.createCipher(cryptoConfig.encryptAlg, cryptoConfig.encrtptPwd);
    _cipher.update(str, cryptoConfig.encode, cryptoConfig.hex);
    return _cipher.final(cryptoConfig.hex);
}