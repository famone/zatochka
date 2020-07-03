<template>
	<section id="aboutus">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-5 col-lg-offset-1 noscissors">
				<h2 class="wow fadeInUp">О компании</h2>
				<p class="white-txt wow fadeInUp">
					Наша студия специализируется на заточке маникюрного и парикмахерского инструмента.
					<br><br>
					Мы профессионалы своего дела, постоянно улучшаем качество заточки и оттачиваем свое мастерство, чтобы всегда предоставлять свои услуги на самом высоком уровне.
					<br><br>
					Также мы предлагаем профессиональные инструменты с ручной заточкой по доступным ценам!
				</p>
				<a href="https://www.instagram.com/topzatochka_spb/">
					<button class="small-btn wow fadeInUp" data-wow-delay=".4s">Больше интересного в нашем Instagram</button>
				</a>
			</div>
			<div class="col-lg-6 scissors hidden-xs hidden-sm">
				
			</div>
			</div>
		</div>
	</section>
</template>

<script>
	
</script>

<style scoped>
#aboutus{
/*	padding: 120px 0;*/
	background: linear-gradient(224.71deg, #252525 32.15%, #131313 86.89%);
}
.noscissors{
	padding: 120px 15px!important;
}
.scissors{
	background-image: url(../assets/img/sccissorsbg.png);
	-webkit-background-size: cover;
	background-size: cover;
	background-position: center bottom;
	background-repeat: no-repeat;
	height: 650px;
}
</style>