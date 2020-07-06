<template>
	<div>
		<swiper ref="mySwiper2" :options="swiperOptions" class="slider2">
						   
			<swiper-slide v-for="slide in mySlides" :style="{'background-image': 'url(' + slide.bgImg + ')'}">
				<div class="container">
					<div class="row">
						<div class="col-lg-7 slider-mobile-row">
							<h1 data-swiper-parallax="-600">{{slide.title}}</h1>
							<p class="subheader" data-swiper-parallax="-300" v-html="slide.description"></p>
							<router-link tag="a" :to="slide.slug">
								<button class="big-btn" data-swiper-parallax="-200">В магазин</button>
							</router-link>
						</div>
					</div>
				</div>
				<img v-if="slide.float" :src="slide.float" class="bigscs hidden-xs hidden-sm" data-swiper-parallax="-600">
		    </swiper-slide>
		    
		   
	  		
	  			<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
	  		
	  			
		
		<div class="swiper-pagination" slot="pagination"></div>
	  	</swiper>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				swiperOptions: {
			        slidesPerView: 1,
			      spaceBetween: 0,
			      draggable: true,
			      parallax: true,
			      speed:800,
			      autoplay: {
			        delay: 3000,
			        disableOnInteraction: false,
			      },
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true
			      },
			      loop: true,
			          navigation: {
			            nextEl: '.swiper-button-next',
			            prevEl: '.swiper-button-prev',
			          }
			      },
			      mySlides: [
			      		{
			      			title: 'Профессиональные маникюрные ножницы',
			      			description: 'ТОPZATOCHKA предлагаем Вам профессиональные <br> инструменты с ручной заточкой по доступным ценам!',
			      			bgImg: require('../assets/img/sl1.jpg'),
			      			float: require('../assets/img/bigscs.png'),
			      			slug: '/catalog'
			      		},
			      		{
			      			title: 'Профессиональная заточка инструмента ',
			      			description: 'Наша студия специализируется на заточке маникюрного и парикмахерского инструмента.',
			      			bgImg: require('../assets/img/zat.png'),
			      			float: false,
			      			slug: '/zatochka'
			      		}
			      ]
			}
		},
		computed: {
			swiper(){
	        	return this.$refs.mySwiper2.$swiper
	    	}
		}
	}
</script>

<style>
#slides{
	padding: 200px 0;
	background-image: url(../assets/img/sl1.jpg);
	-webkit-background-size: cover;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.slider2 .swiper-slide{
	-webkit-background-size: cover;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding:200px 0;
	position:relative;
}
h1{
	font-size: 55px;
	font-weight: 500;
	color: #fff;
	margin-bottom: 30px;
	margin-top: 0;
	z-index: 20;
	position: relative;
}
.subheader{
	font-size: 20px;
	color: #E7E7E7;
	font-weight: 400;
	margin-bottom: 30px;
	margin-top: 0;
	z-index: 20;
	position: relative;
}
.big-btn{
	padding: 22px 70px;
	background-color: #9D7044;
	border-radius: 50px;
	border: 2px solid #9D7044;
	font-size: 24px;
	color: #fff;
	transition: all .3s ease-in-out;
	z-index: 20;
	position: relative;
}
.big-btn:hover{
	background-color: transparent;
}
.slider2 .swiper-button-next{
	color: #9D7044;
}
.slider2 .swiper-button-prev{
	color: #9D7044;
}
.bigscs{
	position:absolute;
	right: -20%;
	top: -40%;
	height: 140%;
}
</style>