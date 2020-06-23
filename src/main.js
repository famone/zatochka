import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import YmapPlugin from 'vue-yandex-maps'


const settings = {
  apiKey: '8c4059db-3b8d-4535-a15e-569ee80fc827',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(YmapPlugin, settings)

import 'swiper/css/swiper.css'

Vue.use(VueRouter) 
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
