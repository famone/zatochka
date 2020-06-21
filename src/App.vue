<template>
  <div id="app">

    <appHeader></appHeader>

          <router-view></router-view>
      
  </div>
</template>

<script>

import './assets/css/style.css';
import Header from './components/Header.vue'

export default {
  components: {
    'appHeader': Header
  },
  created(){
  	this.$store.dispatch('goods/loadGoods')
  }
}
</script>

<style>

</style>
