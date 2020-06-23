<template>
  <div id="app">

    <appHeader></appHeader>

          <router-view></router-view>

    <appFooter></appFooter>
      
  </div>
</template>

<script>

import './assets/css/style.css';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'appHeader': Header,
    'appFooter': Footer
  },
  created(){
  	this.$store.dispatch('goods/loadGoods')
  }
}
</script>

<style>

</style>
