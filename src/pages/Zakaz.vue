<template>
	<div>
		<section id="inner">
			<div class="container">
				<h1>Заказ</h1>
			</div>
		</section>	
		<section id="zakaz">
			<div class="container">
				<div class="col-lg-6">
					<label for="">Имя <span>*</span></label>
					<input type="text">
				</div>
				<div class="col-lg-6">
					<label for="">Фамилия <span>*</span></label>
					<input type="text">
				</div>
				<div class="col-lg-4">
					<label for="">Страна/регион <span>*</span></label>
					<input type="text">
				</div>
				<div class="col-lg-4">
					<label for="">Улица, дом <span>*</span></label>
					<input type="text">
				</div>
				<div class="col-lg-4">
					<label for="">Квартира, апартаменты <span>*</span></label>
					<input type="text">
				</div>
				<div class="col-lg-4">
					<label for="">Населённый пункт <span>*</span></label>
					<input type="text">
				</div>
				<div class="col-lg-4">
					<label for="">Область / район  <span>*</span></label>
					<input type="text">
				</div>
				<div class="col-lg-4">
					<label for="">Почтовый индекс <span>*</span></label>
					<input type="text">
				</div>
				<div class="col-lg-6">
					<label for="">Телефон <span>*</span></label>
					<input type="text">
				</div>
				<div class="col-lg-6">
					<label for="">E-mail <span>*</span></label>
					<input type="text">
				</div>

			</div>
		</section>
		<section>
			<div class="container">
				<h3><- Тут тинькофф -></h3>
			</div>
		</section>
	</div>	
</template>

<script>
	
</script>

<style scoped>
#inner{
	padding: 150px 0;
	background-color: #252525;
}
#zakaz{
	padding:60px 0;
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
	margin-bottom: 25px;
}
label span{
	color: #9D7044;
}
</style>