<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<img src="../assets/img/smalllogo.png" class="smalllogo">
				</div>
			</div>
			<div class="row">
				<div class="col-lg-3">
					<h5>ИНН/ КПП:</h5>
					<p class="grey-txt">12332142/ 12312412</p>
					<h5>ЮР.АДРЕС:</h5>
					<p class="grey-txt">Санкт-Петербург, м.Площадь Восстания, Лиговский пр-кт 50к3</p>
				</div>
				<div class="col-lg-3">
					<h5>МЕНЮ</h5>
					<ul class="footer-menu">
						<router-link tag="li" to="/catalog">Каталог</router-link>
						<router-link tag="li" to="/zatochka">Заточка инструмента</router-link>
						<router-link tag="li" to="/contacts">Контакты</router-link>
						<router-link tag="li" to="/cart">Корзина</router-link>
					</ul>
				</div>
				<div class="col-lg-3">
					<h5>КОНТАКТЫ</h5>
					<ul class="footer-menu">
						<li><a href="tel:+79999871006">+7 999 987 10 06</a></li>
						<li><a href="mailto:topzatochka@gmail.com">topzatochka@gmail.com</a></li>
						<li><a href="https://www.instagram.com/topzatochka_spb/">Instagram</a></li>
						<li><a href="https://vk.com/topzatochka">Vkontakte</a></li>
					</ul>
				</div>
				<div class="col-lg-3">
					<h5>ОСТАВЬТЕ ЗАЯВКУ</h5>
					<form action="">
						<input type="text" v-model="emailBody.phone" placeholder="+7 (___) ___-__-__" v-mask="'+7 (###) ###-##-##'">
						<button type="submit" class="sbmt-btn" @click.prevent="submitForm()">Отправить</button>
					</form>
					<div v-if="errors.message !== '' " :class="{green : errors.status === 'mail_sent'}">
						<p class="resp-message">{{errors.message}}</p>
					</div>
					<div class="webink">
						<a href="https://webink.site/">coding masters - webink.site</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import axios from 'axios'

export default{
	data(){
		return{
			emailBody: {	
				phone: ''
			},
			errors: '',
			url: 'https://zt.webink.site/wp-json/contact-form-7/v1/contact-forms/25/feedback'
		}
	},
	methods: {
		submitForm() {
        	var form1 = new FormData();
        	
       		for (var field in this.emailBody){
				form1.append(field, this.emailBody[field]);
			};

            axios
            	.post(this.url, form1)
                .then((response) => {
                    console.log(response);
                    this.errors = response.data;
                    if(response.data.status === 'mail_sent'){
                    	this.emailBody = {
							phone: ''
						}
                    }
                })
                .catch((error) => {
                    this.errors = error.response.data
                });
        	}
	}
}
</script>

<style scoped>
.resp-message {
	margin-top:15px;
	color: red;
}
.green p{
	color: #47f700;
}
footer{
	padding: 40px 0;
	background-color: #252525;
}
.smalllogo{
	margin-bottom: 30px;
}
h5{
	color: #fff;
	font-size: 20px;
	font-weight: 500;
	margin-bottom: 16px;
}
.footer-menu{
	margin: 0;
	padding:0;
}
.footer-menu li{
	list-style: none;
	cursor: pointer;
	color: #8B8B8B;
	font-size: 16px;
	font-weight: 400;
	margin-bottom: 10px;
	padding:2px 0;
	transition: all .3s ease-in-out;
}
.footer-menu li:hover{
	color: #9D7044;
}
.footer-menu li a{
	color: #8B8B8B;
	transition: all .3s ease-in-out;
}
.footer-menu li a:hover{
	color: #9D7044;
}
form{
	display: flex;
	justify-content: left;
	align-items: center;
}
input{
	background: rgba(59, 58, 58, 0.5);
	color: #8B8B8B;
	border:none;
	border-radius: 5px 0 0 5px;
	padding:15px 10px;
	font-size: 16px;
	max-width: 160px;
}
.sbmt-btn{
	font-size: 16px;
	font-weight: 500;
	color: #fff;
	border: none;
	border-radius:0 5px 5px 0;
	padding:15px 20px;
	background-color: #9D7044;
	transition: all .3s ease-in-out;
}
.sbmt-btn:hover{
	background-color: #7b5835;
}
.webink{
	font-family: Roboto Mono;
	font-weight: 400;
	color: #fff;
	font-size: 15px;
	transition: all .3s ease;
	margin-top: 60px;
}
.webink a{
	color: #fff;
}
.webink:hover{
	animation: 1s myshake alternate;
}
@keyframes myshake{
	0% {
	    transform: skewX(-15deg);
	}
	5% {
	    transform: skewX(15deg);
	}
	10% {
	    transform: skewX(-15deg);
	}
	15% {
	    transform: skewX(15deg);
	}
	20% {
	    transform: skewX(0deg);
	}
	100% {
	    transform: skewX(0deg);
	}
}
</style>