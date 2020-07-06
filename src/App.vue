<template>
  <div id="app">
   
   <transition name="slide-fade">
    <div class="cart-alert" v-if="cartAlert">
      <img src="./assets/img/checkmark.svg" class="checkmark">
      Товар добавлен в корзину
    </div>
  </transition>

    

    <appHeader></appHeader>

          <router-view></router-view>

    <appFooter></appFooter>
      
  </div>
</template>

<script>
import {mapState} from 'vuex'
import './assets/css/style.css';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'appHeader': Header,
    'appFooter': Footer
  },
  computed: {
    ...mapState('goods', ['cartAlert']),
  },
  created(){
  	this.$store.dispatch('goods/loadGoods')
    this.$store.dispatch('goods/loadPayment');
  }
}
</script>

<style>
.cart-alert{
  position: fixed;
  z-index: 45;
  padding: 20px 25px;
  background-color: #252525;
  border-radius: 7px;
  color: #fff;
  top: 45px;
  right: 25px;
 /* transform: translateX(200px);*/
}
.checkmark{
  height: 15px;
  margin-right: 3px;
  margin-top: -2px;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(100px);
  opacity: 0;
}
</style>
