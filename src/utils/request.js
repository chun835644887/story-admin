import axios from 'axios';
import { baseURL,timeout } from '@/config';
import router from '@/router';

const request = axios.create({
	baseURL,
	timeout,
	headers: {
	  	"X-Requested-With" : "XMLHttpRequest",
		"RedirectType" : "None",
		"IsMobile" : true,
		Refresh: 3,
		url: 'http://localhost:8080/#'
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
	/*session过期跳转至登陆页面*/
	if(error.response.status === 302){
		router.push('/login');
	}
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