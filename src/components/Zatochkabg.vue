<template>
	<section id="zatoch" class="wow fadeInLeft">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="zatoch">
						<h3>Заточка маникюрного и <br>
						парикмахерского инструмента</h3>
						<p class="grey-txt">Наш курьер заберет и привезет ваши инструменты в день <br> обращения! При заточке от 6 инструментов услуга бесплатная <br> (в пределах КАД и МКАД)</p>
						<router-link tag="a" to="/zatochka">
							<button class="small-btn">Заказать курьера на заточку</button>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{

	}
</script>

<style scoped>
#zatoch{
	padding-bottom: 100px;
}
h3{
	font-size: 30px;
	color: #fff;
	font-weight: 500;
	margin-bottom: 30px;
}
.zatoch{
	padding: 55px 40px;
	background-color: #252525;
	border-radius: 10px;
	background-image: url(../assets/img/zat.png);
	-webkit-background-size: cover;
	background-size: cover;
	background-position: right center;
	background-repeat: no-repeat;
}
</style>