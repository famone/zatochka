<template>
	<section id="goods">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>Каталог товаров</h2>
					<select v-model="categoryFilter">
						<option value="Все">Все</option>
						<option value="Щипцы/кусачки">Щипцы/кусачки</option>
						<option value="Маникюрные ножницы">Маникюрные ножницы</option>
						<option value="Пушеры">Пушеры</option>
					</select>
					
				</div>
			</div>
			<!-- карточки товаров -->

<div v-if="!loading" class="text-center">
	<img src="../assets/img/preloader.svg" class="small-preloader">
</div>

			<div class="row">
				<div class="col-lg-4 col-sm-6 good-box wow fadeIn" v-for="(good, index) in goods" :key="index" v-if="good.categories[0].name === categoryFilter || categoryFilter === 'Все'">
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
							<span class="sale-price" v-if="good.on_sale">{{good.regular_price}} руб.</span>
							<h3 class="price">{{good.price}} руб.</h3>
						</div>
						<button class="add-to-cart" @click="addToCart(index);addCart(index)">+ Добавить в корзину</button>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'

export default{
	data(){
		return{
			categoryFilter: 'Все'
		}
	},
	computed: {
		...mapState('goods', ['goods', 'loading']),
	},
	methods:{
		addToCart(index){
			// alert('Товар успешно добавлен в корзину!')
			let goodItem = {
				product_id: this.goods[index].id,
				name: this.goods[index].name ,
				price: this.goods[index].price,
				quantity: 1
			}
			this.$store.dispatch('goods/addToCart', goodItem)
		},
		addCart(index){
			let goodItemMain = {
				product_id: this.goods[index].id,
				quantity: 1
			}
			this.$store.dispatch('goods/addCart', goodItemMain)
		}
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
.good-box img{
	height: 260px;
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
	font-size: 14px;
	background-color: #9D7044;
	border: 2px #9D7044 solid;
	transition: all .3s ease-in-out;
}
.add-to-cart:hover{
	background-color: transparent;
}
select{
	-webkit-appearance: none;
    -moz-appearance: none;
	background-color: #252525;
	color: #fff;
	padding:15px 20px;
	font-size: 18px;
	border-radius: 50px;
	border:none;
	margin-bottom: 30px;
	width: 320px;
	background-image: url(../assets/img/arr.svg);
    background-repeat: no-repeat;
    -webkit-background-size: 20px;
    background-size: 20px;
    background-position: right 10px center;
}
.small-preloader{
	height: 80px;
	margin: 25px 0;
	transform: scale(1);
	animation: pulse 1s infinite;
	transition:all .2s ease-in-out;
}
@keyframes pulse {
	0% {
		transform: scale(0.95);
	}

	70% {
		transform: scale(1.4);
	}

	100% {
		transform: scale(0.95);
	}
}
</style>