/*
 * @Author: your name
 * @Date: 2019-12-03 15:58:59
 * @LastEditTime: 2019-12-16 16:59:47
 * @LastEditors: cuiJian
 * @Description: In User Settings Edit
 * @FilePath: \testiviewaxios\src\api\request.js
 */
import axios from 'axios';
// 创建实例
const instance = axios.create({
  // http://localhost:3000/getData
  baseURL: "http://localhost:3000/",
})
// 如果是创建实例的话，就用实例名字.interceptors.request.use
// 如果不是实例的话，就用axios.interceptors.request.use
instance.interceptors.request.use((request) => {
    // Do something before request is sent
    return request;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
// 如果是创建实例的话，就用实例名字.interceptors.request.use
// 如果不是实例的话，就用axios.interceptors.request.use
instance.interceptors.response.use((response) => {
    return response.data;
  },  
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  });


const handleSuccess = data => {
    return data;
}
const handleError = err => {
    return err;
}
// 如果是创建实例的话，就用实例名字 .get
// 如果不是实例的话，就用axios.get
const getRequest = (url, params) => {
    return instance.get(url, {params}).then(res => handleSuccess(res)).catch(err => handleError(err));
}
const postRequest = (url, params) => {
    return instance.post(url, params).then(res => handleSuccess(res)).catch(err => handleError(err));
}
export {getRequest, postRequest};