<template>
	<div>
		<appSlides></appSlides>
		<appGoods></appGoods>
		<appZatochka></appZatochka>
		<appAbout></appAbout>
	</div>
	
</template>

<script>
import Slides from '../components/Slides.vue'
import Goods from '../components/Goods.vue'
import Zatochka from '../components/Zatochkabg.vue'
import About from '../components/About.vue'

	export default{
		components: {
			'appSlides': Slides,
			'appGoods': Goods,
			'appZatochka': Zatochka,
			'appAbout': About
		}
	}
</script>

<style>
nav:before{
	display: block;
}
</style>