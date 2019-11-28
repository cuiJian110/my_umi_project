import {getRequset, postRequset} from '../server/https'
export const testGet =  (url,params) =>  getRequset(url,params); 
export const testPost =  () =>  postRequset("testPost",{name: "zs", pwd: "123456"});