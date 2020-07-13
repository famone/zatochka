<template>
	<div>
		<section id="inner">
			<div class="container">
				<h1>Заказ курьера</h1>
			</div>
		</section>	
		<section id="ztchka">
			<div class="container">
					<div class="col-lg-12">
					<div class="box">
						<h2>Курьер приедет в удобное время и заберет заказ!</h2>
					<p class="grey-txt">Заточенные инструменты вы получите обратно в этот же день.
						<br><br>
					Стоимость заточки одного инструмента - <strong>300 р.</strong> <br><br>
					Если вы хотите заточить более 6 инструментов - курьер за наш счёт (при удаленных адресах возможна доплата)! <br>
					Оплата - при получении. <br>Гарантия качества</p>
					</div>

				</div>
				<div class="col-lg-12">
					<div class="row">
						<form action="">
						<div class="col-lg-6">
							<label for="">Ваше Имя и Фамилия <span>*</span></label>
							<input type="text" v-model="emailBody.pname">
						</div>
						<div class="col-lg-6">
							<label for="">Телефон <span>*</span></label>
							<input type="text" v-mask="'+7 (###) ###-##-##'" v-model="emailBody.phone">
						</div>
						<div class="col-lg-4">
							<label for="">Адрес вызова курьера <span>*</span></label>
							<input type="text" @change="changeAddr()" id="suggest">
						</div>
						<div class="col-lg-4">
							<label for="">Ближайшее метро</label>
							<input type="text" v-model="emailBody.subway">
						</div>
						<div class="col-lg-4">
							<label for="">Дата и время приезда курьера</label>
							<input type="text" v-model="emailBody.time">
						</div>
						<div class="col-lg-6">
							<label for="">Количество инструментов</label>
							<input type="text" v-model="emailBody.amount">
						</div>
						<div class="col-lg-6">
							<label for="">Комментарий к заказу</label>
							<input type="text" v-model="emailBody.comment">
						</div>
						<div class="col-lg-12">
							<button type="submit" @click.prevent="submitForm()">Заказать курьера</button>
						</div>
					</form>
					</div>
					<div class="text-center" v-if="errors.message !== '' " :class="{green : errors.status === 'mail_sent'}">
						<p class="resp-message">{{errors.message}}</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import axios from 'axios'

export default{
	data(){
		return{
			emailBody: {	
				pname: '',
				phone: '',
				padress: '',
				subway: '',
				time: '',
				amount: '',
				comment: ''
			},
			errors: '',
			url: 'https://zt.webink.site/wp-json/contact-form-7/v1/contact-forms/33/feedback'
		}
	},

	methods: {
		changeAddr(){
			this.emailBody.padress = suggest.value
		},
		submitForm() {
        	var form2 = new FormData();
        	
       		for (var field in this.emailBody){
				form2.append(field, this.emailBody[field]);
			};

            axios
            	.post(this.url, form2)
                .then((response) => {
                    console.log(response);
                    this.errors = response.data;
                    if(response.data.status === 'mail_sent'){
                    	this.emailBody = {
							pname: '',
							phone: '',
							padress: '',
							subway: '',
							time: '',
							amount: '',
							comment: ''
						}
                    }
                })
                .catch((error) => {
                    this.errors = error.response.data
                });
        	},
		yaMapInit() { 
			this.SuggestView = new ymaps.SuggestView('suggest');
			this.SuggestView.value = this.emailBody.padress
		}
	},
	created() { 
		const script = document.createElement('script')

		script.onload = () => {
		ymaps.ready(() => this.yaMapInit());

		};

		script.id = 'ymaps'
		script.src = "https://api-maps.yandex.ru/2.1/?apikey=8c4059db-3b8d-4535-a15e-569ee80fc827&lang=ru_RU&load=SuggestView"
		document.head.append(script);
	},
	destroyed() {
		document.head.querySelector('script#ymaps').remove()
		ymaps = null
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
#inner{
	padding: 150px 0;
	background-color: #252525;
	background-image: url(../assets/img/zat.png);
	-webkit-background-size: cover;
	background-size: cover;
	background-position: right center;
	background-repeat: no-repeat;
}
#ztchka{
	padding: 80px 0;
}
label{
	font-size: 16px; 
	font-weight: 400;
	color: #fff;
}
input{
	background: rgba(59, 58, 58, 0.5);
	color: #8B8B8B;
	border:none;
	border-radius: 5px;
	padding:15px 10px;
	font-size: 16px;
	width: 100%;
	margin-bottom: 20px;
}
label span{
	color: #9D7044;
}
button{
	background-color: #9D7044;
	color: #fff;
	border:none;
	border-radius: 5px;
	font-weight: 600;
	padding:15px 10px;
	font-size: 16px;
	width: 100%;
	transition: all .3s ease;
	margin-top: 15px;
}
button:hover{
	background-color: #7b5835;
}
.box{
	padding:40px 22px;
	background-color: #252525;
	border-radius: 10px;
	margin-bottom: 25px;
}
</style>