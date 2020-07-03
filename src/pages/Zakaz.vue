<template>
	<div>

<div class="spasibo-pop" v-if="showSpasibo" @click="showSpasibo = false">
	<div class="spasibo text-center">
		<img src="../assets/img/checkmark.svg" alt=""><br><br>
		<p class="white-txt text-center">Спасибо за заказ!<br>
			Информация о заказе направлена на почту.
		</p>
	</div>
</div>

<div class="loader-scis" v-if="responseLoader">
	<img src="../assets/img/preloader.svg" alt="">
</div>

		<section id="inner">
			<div class="container">
				<h1>Заказ</h1>
			</div>
		</section>


		<section id="zakaz">
			<div class="container">
				<div v-if="localCart.length < 1">
					<p class="white-txt"> Ваша корзина пуста</p>
					<router-link tag="a" to="/catalog">
						<button class="to-shop">В магазин</button>
					</router-link>
				</div>

				<form v-if="localCart.length > 0">
				<div class="col-lg-6">
					<label for="">Имя <span>*</span></label>
					<input type="text" :class="{errorInp : $v.name.$dirty && !$v.name.required}" v-model="name">
				</div>
				<div class="col-lg-6">
					<label for="">Фамилия <span>*</span></label>
					<input type="text" :class="{errorInp : $v.surname.$dirty && !$v.surname.required}" v-model="surname">
				</div>
				<div class="col-lg-4">
					<label for="">Страна/регион <span>*</span></label>
					<input type="text" :class="{errorInp : $v.country.$dirty && !$v.country.required}" v-model="country">
				</div>
				<div class="col-lg-4">
					<label for="">Улица, дом <span>*</span></label>
					<input type="text" :class="{errorInp : $v.street.$dirty && !$v.street.required}" v-model="street">
				</div>
				<div class="col-lg-4">
					<label for="">Квартира, апартаменты <span>*</span></label>
					<input type="text" :class="{errorInp : $v.flat.$dirty && !$v.flat.required}" v-model="flat">
				</div>
				<div class="col-lg-4">
					<label for="">Населённый пункт <span>*</span></label>
					<input type="text" :class="{errorInp : $v.city.$dirty && !$v.city.required}" v-model="city">
				</div>
				<div class="col-lg-4">
					<label for="">Область / район  <span>*</span></label>
					<input type="text" :class="{errorInp : $v.district.$dirty && !$v.district.required}" v-model="district">
				</div>
				<div class="col-lg-4">
					<label for="">Почтовый индекс <span>*</span></label>
					<input type="text" v-mask="'### ###'" :class="{errorInp : ($v.postIndex.$dirty && !$v.postIndex.required) || ($v.postIndex.$dirty && !$v.postIndex.minLength)}" v-model="postIndex">
				</div>
				<div class="col-lg-6">
					<label for="">Телефон <span>*</span></label>
					<input type="text" placeholder="+7 (___) ___-__-__" v-mask="'+7 (###) ###-##-##'"
					:class="{errorInp : ($v.tel.$dirty && !$v.tel.required) || ($v.tel.$dirty && !$v.tel.minLength)}" 
					v-model="tel">
				</div>
				<div class="col-lg-6">
					<label for="">E-mail <span>*</span></label>
<input type="text" :class="{errorInp : ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
					v-model="email">
				</div>
				</form>
			</div>
		</section>

		<section id="payment" v-if="localCart.length > 0" >
			<div class="container">
				<div class="col-lg-12">
					<div class="pay-method">
						<img v-if="payment.id === 'tinkoff'"
						 src="https://zt.webink.site/wp-content/plugins/tinkoff-woocommerce/tinkoff/tinkoff.png">
						<h3 >{{payment.title}}</h3>
						<p class="pay-box">{{payment.description}}</p>
						<p>Ваши личные данные будут использоваться для обработки ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных в нашей политика конфиденциальности.</p>
						<button class="confirm" @click.prevent="getOrder()">Подтвердить заказ</button>
					</div>
				</div>
			</div>
		</section>
	</div>	
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import {mapState} from 'vuex'
import axios from 'axios'

	export default{
		computed: {
			...mapState('goods', ['payment', 'cart', 'shipping', 'localCart']),
		},
		data() {
			return {
				name: '',
				surname:'',
				country:'',
				street:'',
				flat:'',
				city:'',
				district:'',
				postIndex:'',
				tel: '',
				email:'',
				showSpasibo: false,
				responseLoader: false
			}
		},
		validations: {
			name: {
				required
			},
			email:{
				required,
				email
			},
			surname: {
				required
			},
			country: {
				required
			},
			street: {
				required
			},
			flat: {
				required
			},
			city: {
				required
			},
			district: {
				required
			},
			postIndex: {
				required,
				minLength: minLength(7)
			},
			tel: {
				required,
				minLength: minLength(18)
			}
		},
		created(){
			// console.log(this.payment.find(item => item.enabled === true))
			console.log(this.payment)
		},
		methods: {
			getOrder(){
				if(this.$v.$invalid) {
					this.$v.$touch();
					return;
				}

				this.responseLoader = true;

				let postArr = {
					payment_method: this.payment.id,
					payment_method_title: this.payment.description,
					billing: {
						first_name: this.name,
						last_name: this.surname,
						address_1: this.street,
						address_2: this.flat,
						city: this.city,
						state: this.district,
						postcode: this.postIndex,
						country: this.country,
						email: this.email,
						phone: this.tel
					},
					line_items: this.cart,
					shipping_lines: [{
						method_id: this.shipping.id,
						method_title: this.shipping.settings.title.value,
						total: this.shipping.settings.cost.value
					}],

				}
		        axios
		          .post('https://zt.webink.site/wp-json/wc/v3/orders/?consumer_key=ck_1b3bd4c37269692bd10e544448eca18fee4765f2&consumer_secret=cs_292587791608de25be0fc86e4fc35f0d4dbaf0fb', postArr)
		          .then(response =>{
		            console.log(response)
		             

		            var params1 = new URLSearchParams();
					params1.append('action', 'get_paylink');
					params1.append('order_id', response.data.id);
		            
		            axios
		            .post('https://zt.webink.site/wp-admin/admin-ajax.php', params1)
		            .then(response =>{
		            	console.log(response.data)
		            	this.responseLoader = false;
		            	let newWin = window.location = response.data
		            	if(newWin !== null){
		            		this.showSpasibo = true
		            	}
		            })
		            .catch(error => console.log(error))

		          })
		          .catch(error => console.log(error))
			}
		}
	}
</script>

<style scoped>
.spasibo-pop{
	height: 100vh;
	width: 100vw;
	background-color: rgba(0,0,0,.6);
	position: fixed;
	z-index: 40;
	display: flex;
	justify-content: center;
	align-items: center;
}
.loader-scis{
	height: 100vh;
	width: 100vw;
	background-color: rgba(0,0,0,.7);
	position: fixed;
	z-index: 40;
	display: flex;
	justify-content: center;
	align-items: center;
}
.loader-scis img{
	height: 80px;
	animation: pulse 1s infinite;
	transition:all .2s ease-in-out;
}
.spasibo{
	width: 320px;
	padding: 25px 25px;
	background-color: #252525;
	border-radius: 10px;
}
.spasibo img{
	height: 25px;
}
.spasibo p{
	margin-bottom: 0;
}
#inner{
	padding: 150px 0;
	background-color: #252525;
}
#payment{
	padding-bottom: 30px; 
}
#zakaz{
	padding:30px 0;
}
label{
	font-size: 16px; 
	font-weight: 400;
	color: #fff;
}
input{
	background: rgba(59, 58, 58, 0.5);
	color: #8B8B8B;
	border:1px rgba(59, 58, 58, 0.5) solid;
	border-radius: 5px;
	padding:15px 10px;
	font-size: 16px;
	width: 100%;
	margin-bottom: 25px;
}
label span{
	color: #9D7044;
}
.errorInp{
	border: 1px red solid;
}
.pay-method{
	margin-bottom: 25px;
	background-color: #fff;
	border-radius: 5px;
	padding:25px;
}
.pay-method img{
	height: 50px;
}
.pay-method h3{
	color: #000;
}
.pay-method p{
	font-size: 16px;
	margin: 15px 0;
}
.pay-box{
	padding:10px;
	margin: 0;
	background-color: #dfdcde;
	border-radius: 5px;
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
</style>