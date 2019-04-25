import {cryptoConfig} from '@/config';
const crypto = require('crypto');
const Config = require('../config');
const _decipher = crypto.createCipher(cryptoConfig.encryptAlg, cryptoConfig.encrtptPwd);
const _cipher = crypto.createDecipher(cryptoConfig.encryptAlg, cryptoConfig.encrtptPwd);
/**
 * 加密
 */
export const decipher = (str) => {
    let cipherStr = '';
    _decipher.update(str, cryptoConfig.encode, cryptoConfig.hex);
    cipherStr += _decipher.final(cryptoConfig.hex);
    return cipherStr;
}
/**
 * 解密
 */
export const cipher = (hexStr) => {
    if(typeof hexStr !== 'string'){
        return null;
    }
    let decStr = '';
    _cipher.update(hexStr, cryptoConfig.hex, cryptoConfig.encode);
    decStr += _cipher.final(cryptoConfig.encode);
    return decStr;
}