import Vue from 'vue'
import App from './App.vue'
import router from './router'
import global_menuBar from './plugins/global_menuBar.js'
import 'lib-flexible/flexible.js'
import VueTouch from 'vue-touch'
import axios from 'axios'
import store from './store/index.js'
import FastClick from 'fastclick'

import './style/common.css'
import './style/iconfont.css'
import './style/border.css'//1px边框

FastClick.attach(document.body);//使用fastclick
//移动端1像素边框
//移动端点击300毫秒延迟

Vue.config.productionTip = false

Vue.use(global_menuBar)
Vue.use(VueTouch,{name: 'v-touch'}),

VueTouch.config.swipe = {

             threshold: 100 //手指左右滑动距离

        }

Vue.prototype.$http = axios
new Vue({
  router,
	store,
  render: h => h(App)
}).$mount('#app')
