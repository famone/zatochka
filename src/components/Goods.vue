<template>
	<section id="goods">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>Каталог товаров</h2>
				</div>
			</div>
			<!-- карточки товаров -->
			<div class="row">
				<div class="col-lg-4 col-sm-6 good-box" v-for="good in goods">
					<router-link tag="a" :to="'/catalog/' + good.slug">
						<div class="good-imgbox">
							<div class="sale-bage" v-if="good.on_sale"><span>SALE</span></div>
							<img :src="good.images[0].src" alt="">
						</div>
					</router-link>
					<h3>{{ good.name }}</h3>
					<p class="grey-txt" v-html="good.description"></p>
					<div class="good-small-row">
						<div>
							<span class="sale-price" v-if="good.on_sale">{{good.regular_price}} ₽</span>
							<h3 class="price">{{good.price}} ₽</h3>
						</div>
						<button class="add-to-cart">+ Добавить в корзину</button>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'

export default{
	computed: {
		...mapState('goods', ['goods']),
	}
}
</script>

<style scoped>
#goods{
	padding: 90px 0;
}
.good-box{
	margin-bottom: 50px;
	padding: 0 25px;
	margin-bottom: 50px;
}
.good-imgbox:hover{
	background-color: #A1A1A1;
}
.sale-bage{
	position:absolute;
	height: 35px;
	width: 35px;
	border-radius: 50px;
	background-color: #9D7044;
	top: -15px;
	right: -15px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.sale-bage span{
	color: #fff;
	font-size: 10px;
}
h3{
	font-size: 25px;
	color: #fff;
	margin-bottom: 30px;
/*	min-height: 54px;*/
}
.add-to-cart{
	padding: 10px 15px;
	border-radius: 50px;
	color: #fff;
	font-style: 14px;
	background-color: #9D7044;
	border: 2px #9D7044 solid;
	transition: all .3s ease-in-out;
}
.add-to-cart:hover{
	background-color: transparent;
}
</style>