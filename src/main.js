// main.js

import Vue from 'vue';
import Home from './components/home/index.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
const routes = [
    {
          name: 'Home',
          path: '/',
          component: Home
      }
  ];
const router = new VueRouter({ mode: 'history', routes: routes});
import App from './App.vue';

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
