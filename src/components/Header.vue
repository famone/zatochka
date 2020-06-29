<template>
	<nav>
		<div class="container">
			<div class="shapka">
				<router-link tag="div" to="/" class="logo">
					TOPZATOCHKA
				</router-link>

				<ul class="main-menu hidden-xs hidden-sm">
					<router-link tag="li" to="/" active-class="active-page" exact>
			        	<a>Главная</a>
			        </router-link>
			        <router-link tag="li"  to="/catalog" active-class="active-page">
           				<a>Каталог</a>
          			</router-link>
          			<router-link tag="li"  to="/zatochka" active-class="active-page">
           				<a>Заточка инструмента</a>
          			</router-link>
          			<router-link tag="li"  to="/contacts" active-class="active-page">
           				<a>Контакты</a>
          			</router-link>	
				</ul>

				<div class="tel hidden-sm hidden-xs">
					<a href="tel:+ 79999871006">+ 7 999 987 10 06</a>
				</div>

				<router-link tag="div" to="/cart" class="cart-btn">
					<div class="cart-indicator">
						<span>{{localCart.length}}</span>
					</div>
					<img src="../assets/img/cartic.svg" alt="">
				</router-link tag="div" to="/cart">

			</div>
		</div>
	</nav>
</template>

<script>
import {mapState} from 'vuex'

export default{
	computed:{
		...mapState('goods', ['localCart'])
	}
}
</script>

<style scoped>
nav{
	position: absolute;
	width: 100%;
	top: 0;
	z-index: 20;
	left: 0;
}
nav::before{
	content: '';
	position:absolute;
	z-index: 18;
	height: 320px;
	width: 100%;
	background-color: red;
	background: linear-gradient(180deg, #131313 0%, rgba(19, 19, 19, 0) 87.14%);
}
.shapka{
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 20;
}
.cart-btn{
	height: 37px;
	width: 37px;
	position:relative;
	z-index: 20;
	cursor: pointer;
}
.cart-btn img{
	width: 100%;
}
.cart-indicator{
	height: 16px;
	width: 16px;
	background-color: #9D7044;
	border-radius: 20px;
	position:absolute;
	z-index: 4;
	top: -7px;
	left: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.cart-indicator span{
	font-size: 9px;
	color: #fff;
	font-weight: 500;
}
.main-menu{
	margin: 0;
	padding: 0;
	z-index: 20;
}
.main-menu li{
	list-style: none;
	display: inline-block;
	margin-right: 50px;
	transition: all .3s ease;
	position:relative;
}
.main-menu li:before{
	content: '';
	height: 2px;
	width: 0%;
	left: 0;
	bottom: -5px;
	position:absolute;
	background-color: #9D7044;
	transition: all .3s ease;
}
.main-menu a{
	color: #E7E7E7;
	font-size: 16px;
	transition: all .3s ease;
	text-decoration: none;
	cursor: pointer;
	font-weight: 400;
}
.tel a{
	color: #E7E7E7;
	font-weight: 700;
	font-size: 16px;
	transition: all .3s ease;
	text-decoration: none;
	cursor: pointer;
	position:relative;
	z-index: 20;
}
.shapka{
	padding: 30px 0;
}
.main-menu li.active-page:before{
	width: 100%;
}
</style>





