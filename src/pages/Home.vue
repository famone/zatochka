<template>
	<div>
		<appSlides></appSlides>
		<appGoods></appGoods>
	</div>
	
</template>

<script>
import Slides from '../components/Slides.vue'
import Goods from '../components/Goods.vue'

	export default{
		components: {
			'appSlides': Slides,
			'appGoods': Goods
		}
	}
</script>

<style>
nav:before{
	display: block;
}
</style>