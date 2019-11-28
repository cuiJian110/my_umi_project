import axios from 'axios';
// axios.defaults.baseURL = "http://23.23.23.23:8000/";
axios.defaults.baseURL = "http://localhost:8000/";
const  getRequset = (url, params) => {
    return  axios.get(url,params)
}
const  postRequset = (url,params) => {
    return  axios.post(url,params)
}
export {getRequset, postRequset};