/*
 * @Author: your name
 * @Date: 2019-12-03 16:07:18
 * @LastEditTime: 2019-12-05 15:43:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testiviewaxios\src\api\login.js
 */
import {getRequest, postRequest} from './request';
export const testGet = (url) => getRequest(url);
export const login = (url,params) => postRequest(url, params);