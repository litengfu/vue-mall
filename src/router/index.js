import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    name: 'home',
    path: '/home',
    component: () => import('pages/home'),
    children: [
      {
        name: 'home-product',
        path: 'product/:id',
        component: () => import('pages/product')
      }
    ]
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('pages/category')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('pages/cart')
  },
  {
    name: 'personal',
    path: '/personal',
    component: () => import('pages/personal')
  },
  {
    name: 'search',
    path: '/search',
    component: () => import('pages/search')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('pages/login')
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('pages/register')
  },
  {
    name: 'exit',
    path: '/exit',
    component: () => import('pages/exit')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('pages/cart')
  },
  {
    path: '*',
    redirect: '/home'
  }
];

export default new Router({
  routes
});
