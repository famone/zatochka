<template>

	<section id="contacts">
		<div class="container">
			<div class="row">
				<div class="col-lg-4">
					<div class="contact-box">
						<h3>Адрес:</h3>
						<p class="white-txt">
							Санкт-Петербург, м.Площадь Восстания, Лиговский пр-кт 50к3
						</p>
						<h3>Телефон:</h3>
						<p class="white-txt">
							<a href="">+7 999 987 10 06</a>
						</p>
						<h3>E-mail:</h3>
						<p class="white-txt">
							<a href="">topzatochka@gmail.com</a>
						</p>
					</div>
				</div>
			</div>
		</div>
		<yandex-map 
    :coords="cntr"
    :zoom="14"
    :scroll-zoom="false" 
    :center="cntr"
  >
    <ymap-marker 
      :coords="coords" 
      marker-id="123"  
      :icon="markerIcon"
    />
  </yandex-map>
	</section>
  
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

	export default {
  data: () => ({
    coords: [
      59.925317,
      30.361709,
    ],
    cntr: [59.922504, 30.339796],
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: 'https://image.flaticon.com/icons/svg/787/787433.svg',
      imageSize: [50, 50]
    }
  })
};
</script>

<style>
#contacts{
	padding: 150px 0;
	position:relative;
}
.ymap-container {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
}	
[class*="ymaps-2"][class*="-ground-pane"] {
filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
/* Firefox 3.5+ */
-webkit-filter: grayscale(100%);
/* Chrome 19+ & Safari 6+ */
}
.contact-box{
	position: relative;
	z-index: 20;
	background-color: #252525;
	padding:15px 30px;
	border-radius: 10px;
}
h3{
	color: #8B8B8B;
}
.white-txt a{
	color: #fff;
	transition: all .3s ease-in-out;
}
.white-txt a:hover{
	color: #9D7044;
}
</style>