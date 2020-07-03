<template>

	<section id="singleprod">
		<div class="container">
			<div class="row">
				<div class="col-lg-5">
					<swiper ref="mySwiper" :options="swiperOptions" class="slider">
						    <swiper-slide v-for="goodImg in getGoods(itemSlug).images" class="text-center">
						    	<img :src="goodImg.src" class="slider-img">
						    </swiper-slide>
							    <div class="swiper-pagination" slot="pagination"></div>
	  					</swiper>
						
	  					<div class="navigation">
	  						<div class="swiper-button-prev" slot="button-prev"></div>
							<div class="swiper-button-next" slot="button-next"></div>
	  					</div>

					<!-- <div class="good-imgbox">
						<img :src="getGoods(itemSlug).images[0].src" alt="">
					</div> -->
				</div>
				<div class="col-lg-7">
					<h1>{{ getGoods(itemSlug).name }} <div class="sale-bage" v-if="getGoods(itemSlug).on_sale"><span>SALE</span></div></h1>
					<p class="grey-txt" v-html="getGoods(itemSlug).description"></p>
					<div class="good-small-row">
						<div>
							<span class="sale-price" v-if="getGoods(itemSlug).on_sale">{{getGoods(itemSlug).regular_price}} ₽</span>
						<h3 class="price">{{getGoods(itemSlug).price}} руб.</h3>
						</div>
						<button class="add-to-cart" @click="addToCart();addCart()">+ Добавить в корзину</button>
					</div>
					<!-- ттх -->
					<div class="tech">
						<h4>Технические характеристики:</h4>
						<table>
							<tbody>
								<tr v-for="character in getGoods(itemSlug).attributes">
									<td>{{character.name}}</td>
									<td class="text-right">{{character.options[0]}}</td>
								</tr>
							</tbody>
						</table>
					</div>					
					<!-- ттх -->
				</div>
			</div>
		</div>
		
	</section>

</template>

<script>
import {mapGetters} from 'vuex'
import {mapState} from 'vuex'
import axios from 'axios' 

	export default{
		data(){
			return{
				itemSlug: '',
				swiperOptions: {
			        slidesPerView: 1,
			      spaceBetween: 0,
			      draggable: true,
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true
			      },
			      loop: true,
			          navigation: {
			            nextEl: '.swiper-button-next',
			            prevEl: '.swiper-button-prev',
			          }
			      }
			}
		},
		computed: {
			swiper(){
	        	return this.$refs.mySwiper.$swiper
	    	},
			...mapGetters('goods', ['getGoods']),
			...mapState('goods', ['goods']),
		},
		methods: {
			addToCart(){
				let newItem = this.goods.find(item => item.slug == this.$route.params.id)
				let goodItem = {
				product_id: newItem.id,
				name: newItem.name ,
				price: newItem.price,
				quantity: 1
				}
				console.log(goodItem)
				this.$store.dispatch('goods/addToCart', goodItem)
			},
			addCart(){
				let newItem = this.goods.find(item => item.slug == this.$route.params.id)
				let goodItemMain = {
					product_id: newItem.id,
					quantity: 1
				}
				this.$store.dispatch('goods/addCart', goodItemMain)
			}
		},
		created(){
			this.itemSlug = this.$route.params.id
		}
	}
</script>

<style scoped>
/*nav:before {
    display: none;
}*/
#singleprod{
	padding: 190px 0;
}
h1{
	color: #fff;
	margin-bottom: 30px;
	margin-top: 0;
	font-size: 36px;
	display: flex;
	flex-wrap: wrap;
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
h4{
	font-size: 25px;
	font-weight: 600;
	color: #fff;
}
.tech{
	margin-top: 30px;
}
table{
	width: 100%;
}
tr{
	border-bottom: 1px #2b2b2b solid;
	font-size: 16px;
	color: #8B8B8B;
}
td{
	padding: 15px 5px;
}
.price{
	font-size: 35px;
}
.slider{
	margin-bottom: 30px;
	background-color: transparent;
	height: 400px;
}
.slider-img{
	height: 90%;
}
.sale-bage{
	height: 35px;
	width: 35px;
	border-radius: 50px;
	background-color: #9D7044;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 10px;
}
.sale-bage span{
	color: #fff;
	font-size: 10px;
}
.swiper-button-next, .swiper-button-prev{
	color: #9D7044;
}

</style>