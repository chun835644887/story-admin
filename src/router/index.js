import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login';
import Main from '@/views/main';
import BookRack from '@/views/bookrack';
import Bookmall from '@/views/Bookmall';

Vue.use(Router)

export default new Router({
  routes: [{
    	path: '/login',
    	name: 'login',
    	component: Login
    }, 
    // {
    //   path: '/bookrack',
    //   name: 'bookrack',
    //   component: BookRack
    // }, 
    {
      path: '/story',
      name: 'Main',
      component: Main,
      children: [{
        path: 'bookrack',
        name: 'bookrack',
        component: BookRack
      },{
        path: 'bookmall',
        name: 'bookmall',
        component: Bookmall
      }]
    }
  ]
})
