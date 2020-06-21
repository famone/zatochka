import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'

Vue.use(VueRouter) 
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
