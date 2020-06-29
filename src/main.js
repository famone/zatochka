import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import YmapPlugin from 'vue-yandex-maps'
import VueTheMask from 'vue-the-mask'



const settings = {
  apiKey: '8c4059db-3b8d-4535-a15e-569ee80fc827',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}



import 'swiper/css/swiper.css'

Vue.use(VueTheMask)
Vue.use(VueRouter) 
Vue.use(VueAwesomeSwiper)
Vue.use(YmapPlugin, settings)
Vue.use(require('vue-cookies'))




new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
