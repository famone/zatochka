<template>
	<div>
		<section id="inner">
			<div class="container">
				<h1>Корзина</h1>
			</div>
		</section>	
<!-- 		
		<section id="cart">
			<div class="container">
				<table>
					<tbody>
						<tr v-for="cartItem in cart">
							<td>{{cartItem.product_id.name}}</td>
							<td>{{cartItem.product_id.name}}</td>
							<td>{{cartItem.product_id.price}} ₽</td>
							<td>✕</td>
						</tr>
							</tbody>
				</table>

				<div class="row total">
					<div class="col-lg-4">
						<h3>Выберите тип доставки:</h3>
						<div v-for="del in delivery">
							<input type="radio" :value="del.price" v-model="selectedDelivery">
							<label>{{del.name}}</label><br>
						</div>
					</div>
					<div class="col-lg-4">
						<h3>Итого:</h3>
						<h4 class="total-price">{{(totalVal + selectedDelivery).toLocaleString()}} ₽</h4>
						<p class="grey-txt">Cтоимость заказа с учетом стоимости доставки</p>
					</div>
					<div class="col-lg-4">
						<button class="add-to-cart">Перейти к оформлению заказа</button>
					</div>
					
				</div>
			</div>
		</section> -->

	</div>
</template>

<script>
import {mapState} from 'vuex'

	export default{
		data(){
			return{
				delivery: [
					{
						name: 'Самовывоз',
						price: 0
					},
					{
						name: 'Сдэк',
						price: 300
					},
					{
						name: 'Почта России',
						price: 180
					},
				],
				selectedDelivery: 0
			}
		}
	}
</script>

<style scoped>
#inner{
	padding: 150px 0;
	background-color: #252525;
}
#cart{
	padding: 100px 0;
}	
table{
	width: 100%;
	margin-bottom: 50px;
}
tr{
	border-bottom: 1px #2b2b2b solid;
	font-size: 16px;
	color: #8B8B8B;
}
td{
	padding: 15px 5px;
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
</style>