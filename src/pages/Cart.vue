<template>
	<div>
		<section id="inner">
			<div class="container">
				<h1>Корзина</h1>
			</div>
		</section>	


		
		<section id="cart">
			<div class="container">
				<div v-if="localCart.length < 1">
					<p class="white-txt"> Ваша корзина пуста</p>
					<router-link tag="a" to="/catalog">
						<button class="to-shop">В магазин</button>
					</router-link>
				</div>
				
				<table v-if="localCart.length > 0">
					<thead>
						<tr>
							<td>Товар:</td>
							<td class="text-center">Колличество:</td>
							<td>Цена:</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(cartItem, index) in localCart" :key="index">
							<td>{{cartItem.name}}</td>
							<td class="text-center"><button class="plusik" @click="removeQuant(index);deliteQuant(index)">-</button> {{cartItem.quantity}} <button class="plusik" @click="addQuant(index)">+</button></td>
							<td>{{cartItem.price}} руб.</td>
							<td class="text-center"><button class="remove-cart" @click="removeFromCart(index)">✕</button></td>
						</tr>
							</tbody>
				</table>



				<div class="row total" v-if="localCart.length > 0">
					<div class="col-lg-4">
						<h3>Итого:</h3>
						<h4 class="total-price">{{(selectedDel + getTotal).toLocaleString()}} руб.</h4>
						<p class="grey-txt">C учетом стоимости доставки</p>
					</div>
					<div class="col-lg-4">
						<h3>Выберите тип удобной доставки:</h3>
						<select name="" @change="onChangeShip()"  v-model="selected">
							<option v-for="del in deliveryMethods" :value="del">{{del.title}}</option>
						</select>
					</div>
					<div class="col-lg-4">
						<router-link tag="a" to="/checkout">
							<button class="add-to-cart" :disabled="selected === '0' ">Перейти к оформлению заказа</button>
						</router-link>
					</div>
					
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

	export default{
		data(){
			return{
				selected: "0",
				selectedDel: 0
			}
		},
		computed: {
			...mapState('goods', ['localCart', 'deliveryMethods', 'cart']),
			...mapGetters('goods', ['getTotal'])
		},
		methods: {
			removeFromCart(index){
				// alert(index)
				this.$store.dispatch('goods/removeFromCart', index)
			},
			addQuant(index){
				this.$store.dispatch('goods/addQuant', this.localCart[index])
			},
			removeQuant(index){
				this.$store.dispatch('goods/removeQuant', this.localCart[index])
			},
			deliteQuant(index){
				this.$store.dispatch('goods/deliteQuant', index)
			},
			onChangeShip(){
				this.selectedDel = parseInt(this.selected.settings.cost.value)
				this.$store.dispatch('goods/setShipping', this.selected)
			}
		},
		created(){
			this.$store.dispatch('goods/getDelivery')
		}
	}
</script>

<style scoped>
#inner{
	padding: 150px 0;
	background-color: #252525;
}
#cart{
	padding: 80px 0;
}	
table{
	width: 100%;
	margin-bottom: 50px;
}
thead tr{
	color: #fff;
}
tr{
	border-bottom: 1px #2b2b2b solid;
	font-size: 16px;
	color: #8B8B8B;
}
td{
	padding: 15px 5px;
	width: 33%;
}
.total{
	padding: 40px 30px;
	border-radius: 10px;
	background-color: #2b2b2b;
}
.total-price{
	font-size: 25px;
	color: #fff;
	font-weight: 500;
}
label{
	margin-left: 8px;
	color: #8B8B8B;
	font-size: 16px;
	font-weight: 400;
}
.total input ~ .checkmark {
  background-color: #ccc;
}
h3{
	font-size: 20px;
	margin-top: 0;
	margin-bottom: 20px;
	font-weight: 400;
	color: #8B8B8B;
}
.add-to-cart{
	padding: 15px 15px;
	border-radius: 50px;
	color: #fff;
	font-size: 18px;
	background-color: #9D7044;
	border: 2px #9D7044 solid;
	transition: all .3s ease-in-out;
	margin: auto auto; 
	width: 100%;
	margin-top: 45px;
}
.add-to-cart:hover{
	background-color: transparent;
}
.add-to-cart:disabled {
	opacity: .4;
  	cursor: not-allowed;
  	pointer-events: all !important;
}
.to-shop{
	padding: 15px 50px;
	border-radius: 50px;
	color: #fff;
	font-size: 18px;
	background-color: #9D7044;
	border: 2px #9D7044 solid;
	transition: all .3s ease-in-out;
}
.to-shop:hover{
	background-color: transparent;
}
.remove-cart{
	border:none;
	background-color: transparent;
	color: #9D7044;
	cursor: pointer;
}
select{
	-webkit-appearance: none;
    -moz-appearance: none;
	background-color: #252525;
	color: #fff;
	padding:23px 15px;
	font-size: 12px;
	border-radius: 50px;
	border:none;
	margin-bottom: 30px;
	width: 100%;
	background-image: url(../assets/img/arr.svg);
    background-repeat: no-repeat;
    -webkit-background-size: 20px;
    background-size: 20px;
    background-position: right 10px center;
}
.plusik{
	background-color: #9D7044;
	border: none;
	border-radius: 5px;
	color: #fff;
	width: 25px;
	margin:0 4px;
}
</style>