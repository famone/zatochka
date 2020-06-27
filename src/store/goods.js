
import axios from 'axios'

const goods = {
	namespaced: true,
	state: {
		goods: []
  	},
  	mutations: {
  		SET_GOODS(state, playload){
  			state.goods = playload
  		}
  	},
	 actions: {
	  	loadGoods({commit}){
	  		axios
	  			.get('https://zt.webink.site/wp-json/wc/v2/products/?consumer_key=ck_1b3bd4c37269692bd10e544448eca18fee4765f2&consumer_secret=cs_292587791608de25be0fc86e4fc35f0d4dbaf0fb')
	  			.then(response =>{
	  				// console.log(response.data)
	  				commit('SET_GOODS', response.data)
	  			})
	  			.catch(error => console.log(error))
	  	},
	  	addToCart({commit}, playload){

	  		let cart_id = ''
	  		let url = ''

			if ($cookies.get('woocommerce_cart_hash') !== null){

				axios
	  			.get('/wp-admin/admin-ajax.php',{
	  				params: {
      					action: 'get_cid'
    				}
	  			})
	  			.then(response =>{
	  				
	  				url = '/wp-json/cocart/v1/add-item/?cart_key=' + response.data;
	  				
	  				axios
					.post(url, playload)
					.then((response) => {
						console.log(response);
					})
					.catch(error => console.log(error))
	  			})
	  			.catch(error => console.log(error))

			}else{
				axios
					.post('/wp-json/cocart/v1/add-item', playload)
					.then((response) => {
						console.log(response);
					})
					.catch(error => console.log(error))
			}

			

		},
	  	loadCart({commit}){
	  		if ($cookies.get('woocommerce_cart_hash') !== null){
	  				

	  			//получаем ид корзины
	  			axios
	  			.get('/wp-admin/admin-ajax.php',{
	  				params: {
      					action: 'get_cid'
    				}
	  			})
	  			.then(response =>{
	  				
	  				//получаем корзину
		  			axios
		  			.get('/wp-json/cocart/v1/get-cart/?cart_key=' + response.data)
		  			.then(response =>{
		  				console.log(response)
		  			})
		  			.catch(error => console.log(error))
	  			})
	  			.catch(error => console.log(error))			

			}else{
				return 'Корзина пуста'
			}

	  		

	  	},
	  	loadCartLength({commit}){
	  		//получаем ид корзины
	  			axios
	  			.get('/wp-admin/admin-ajax.php',{
	  				params: {
      					action: 'get_cid'
    				}
	  			})
	  			.then(response =>{
	  				
	  				//получаем количество товаров в корзине
		  			axios
		  			.get('/wp-json/cocart/v1/count-items?cart_key=' + response.data)
		  			.then(response =>{
		  				console.log(response)
		  			})
		  			.catch(error => console.log(error))
	  			})
	  			.catch(error => console.log(error))		
	  		
	  	}
	},
	getters: {
		getGoods: (state) => (slug) => {
  			return state.goods.find(goodItem => goodItem.slug == slug)
  		}
	}
}

export default goods