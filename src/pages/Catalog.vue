<template>
	<div>
		<section id="inner">
			<div class="container">
				<h1>Каталог</h1>
			</div>
		</section>
		<appGoods></appGoods>

	</div>
</template>

<script>
import Goods from '../components/Goods.vue'

	export default{
		components: {
			'appGoods': Goods
		}
	}
</script>

<style>
#inner{
	padding: 150px 0;
	background-color: #252525;
}
</style>