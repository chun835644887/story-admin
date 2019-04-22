import axios from 'axios';
import { baseURL,timeout } from '@/config';

const request = axios.create({
	baseURL,
	timeout,
	headers: {
	  	"X-Requested-With" : "XMLHttpRequest",
		"RedirectType" : "None",
		"IsMobile" : true
  },
  withCredentials: true
});
request.defaults.withCredentials = true;

request.interceptors.request.use((config) => {
	/*请求之前操作*/
	return config;
}, (error) => {
	console.error(error);
	return Promise.reject(error);
});

request.interceptors.response.use((respone) => {
	/*返回之前操作*/
	return respone
}, (error) => {
	console.error(error);
	return Promise.reject(error);
})

request.install = (Vue) => {
	Object.defineProperties(Vue.prototype, {
		axios: {
			get (){
				return request;
			}
		},
		$http: {
			get(){
				return request
			}
		}
	});
}
export {request as default};