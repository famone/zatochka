
import axios from 'axios'

const goods = {
	namespaced: true,
	state: {
		goods: [],
		localCart: [],
		deliveryMethods: [],
		loading: false
  	},
  	mutations: {
  		SET_GOODS(state, playload){
  			state.loading = true
  			state.goods = playload
  		},
  		SET_LOCALCART(state, playload){


  			let productInCart = state.localCart.find(item =>{
  				return item.product_id === playload.product_id
  			})

  			if(productInCart){
  				productInCart.quantity += playload.quantity;
  				productInCart.price = playload.price * (productInCart.quantity)
  				return
  			}


  			state.localCart.push(playload)


  		},
  		REMOVE_FROM_CART(state, playload){
  			state.localCart.splice(playload, 1);
  		},
  		SET_DEL(state, playload){
  			state.deliveryMethods = playload
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
	  		console.log(playload)
	  		commit('SET_LOCALCART', playload)
	  	},
	  	removeFromCart({commit}, playload){
	  		commit('REMOVE_FROM_CART', playload)
	  	},
	  	getDelivery({commit}){
	  		axios
	  			.get('https://zt.webink.site/wp-json/wc/v3/shipping/zones/1/methods?consumer_key=ck_1b3bd4c37269692bd10e544448eca18fee4765f2&consumer_secret=cs_292587791608de25be0fc86e4fc35f0d4dbaf0fb')
	  			.then(response =>{
	  				console.log(response.data)
	  				commit('SET_DEL', response.data)
	  			})
	  			.catch(error => console.log(error))
	  	}
	 //  	addToCart({commit}, playload){

	 //  		let cart_id = ''
	 //  		let url = ''

		// 	if ($cookies.get('woocommerce_cart_hash') !== null){

		// 		axios
	 //  			.get('https://zt.webink.site/wp-admin/admin-ajax.php',{
	 //  				params: {
  //     					action: 'get_cid'
  //   				}
	 //  			})
	 //  			.then(response =>{
	  				
	 //  				url = 'https://zt.webink.site/wp-json/cocart/v1/add-item/?cart_key=' + response.data;
	  				
	 //  				axios
		// 			.post(url, playload)
		// 			.then((response) => {
		// 				console.log(response);
		// 			})
		// 			.catch(error => console.log(error))
	 //  			})
	 //  			.catch(error => console.log(error))

		// 	}else{
		// 		axios
		// 			.post('https://zt.webink.site/wp-json/cocart/v1/add-item', playload)
		// 			.then((response) => {
		// 				console.log(response);
		// 			})
		// 			.catch(error => console.log(error))
		// 	}

			

		// },
	 //  	loadCart({commit}){
	 //  		if ($cookies.get('woocommerce_cart_hash') !== null){
	  				

	 //  			//получаем ид корзины
	 //  			axios
	 //  			.get('https://zt.webink.site/wp-admin/admin-ajax.php',{
	 //  				params: {
  //     					action: 'get_cid'
  //   				}
	 //  			})
	 //  			.then(response =>{
	  				
	 //  				//получаем корзину
		//   			axios
		//   			.get('https://zt.webink.site/wp-json/cocart/v1/get-cart/?cart_key=' + response.data)
		//   			.then(response =>{
		//   				console.log(response)
		//   			})
		//   			.catch(error => console.log(error))
	 //  			})
	 //  			.catch(error => console.log(error))			

		// 	}else{
		// 		return 'Корзина пуста'
		// 	}

	  		

	 //  	},
	 //  	loadCartLength({commit}){
	 //  		//получаем ид корзины
	 //  			axios
	 //  			.get('https://zt.webink.site/wp-admin/admin-ajax.php',{
	 //  				params: {
  //     					action: 'get_cid'
  //   				}
	 //  			})
	 //  			.then(response =>{
	  				
	 //  				//получаем количество товаров в корзине
		//   			axios
		//   			.get('https://zt.webink.site/wp-json/cocart/v1/count-items?cart_key=' + response.data)
		//   			.then(response =>{
		//   				console.log(response)
		//   			})
		//   			.catch(error => console.log(error))
	 //  			})
	 //  			.catch(error => console.log(error))		
	  		
	 //  	}
	},
	getters: {
		getGoods: (state) => (slug) => {
  			return state.goods.find(goodItem => goodItem.slug == slug)
  		},
  		getTotal(state){
  			let total = 0;

  			state.localCart.forEach(item =>{
  				total += parseInt(item.price)
  			})

  			return total
  		}
	}
}

export default goods