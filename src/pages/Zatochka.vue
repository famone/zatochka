<template>
	<div>
		<section id="inner">
			<div class="container">
				<h1>Заточка инструмента</h1>
			</div>
		</section>	
		<section id="ztchka">
			<div class="container">
				<div class="col-lg-6">
					<h2>Курьер приедет в удобное время и заберет заказ.</h2>
					<p class="white-txt">Заточенные инструменты вы получите обратно в этот же день.
						<br><br>
					Заточка одного инструмента - <strong>300 р.</strong> <br><br>
Если вы хотите заточить более 6 инструментов - курьер за наш счёт (при удаленных адресах возможна доплата)! <br>
Оплата - при получении. <br>Гарантия качества
						</p>

				</div>
				<div class="col-lg-6">
					<form action="">
						<label for="">Имя <span>*</span></label>
						<input type="text" v-model="emailBody.pname">
						<label for="">Телефон <span>*</span></label>
						<input type="text" v-mask="'+7 (###) ###-##-##'" v-model="emailBody.phone">
						<label for="">Адрес вызова курьера <span>*</span></label>
						<input type="text" v-model="emailBody.padress">
						<button type="submit" @click.prevent="submitForm()">Заказать курьера</button>
					</form>
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
				padress: ''
			},
			errors: '',
			url: 'http://zt.webink.site/wp-json/contact-form-7/v1/contact-forms/33/feedback'
		}
	},

	methods: {
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
							padress: ''
						}
                    }
                })
                .catch((error) => {
                    this.errors = error.response.data
                });
        	},
		// yaMapInit() { 
		// 	this.SuggestView = new ymaps.SuggestView(this.geoInput, {results: 1, offset: [20, 30]});
		// }
	},
	// created() { 
	// 	const script = document.createElement('script')

	// 	script.onload = () => {
	// 	ymaps.ready(() => this.yaMapInit());

	// 	};

	// 	script.id = 'ymaps'
	// 	script.src = "https://api-maps.yandex.ru/2.1/?apikey=8c4059db-3b8d-4535-a15e-569ee80fc827&lang=ru_RU"
	// 	document.head.append(script);
	// },
	// destroyed() {
	// 	document.head.querySelector('script#ymaps').remove()
	// 	// ymaps = null
	// }
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
</style>