<template>
	<div>
		<section id="inner">
			<div class="container">
				<h1>Заказ</h1>
			</div>
		</section>	
		<section id="zakaz">
			<div class="container">
				<form >
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
		<section id="payment">
			<div class="container">
				<div class="col-lg-12">
					<div class="pay-method" v-for="pay in payment">
						<img v-if="pay.id === 'tinkoff'"
						 src="https://zt.webink.site/wp-content/plugins/tinkoff-woocommerce/tinkoff/tinkoff.png">
						<h3 >{{pay.title}}</h3>
						<p class="pay-box">{{pay.description}}</p>
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
			...mapState('goods', ['payment', 'cart', 'shipping']),
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
				email:''
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
			console.log(this.payment)
		},
		methods: {
			getOrder(){
				if(this.$v.$invalid) {
					this.$v.$touch();
					return;
				}

				alert('OK');

				let postArr = {
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
		            window.open("http://topzatochka.ru/", "_blank"); 
		          })
		          .catch(error => console.log(error))
			}
		}
	}
</script>

<style scoped>
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
</style>