
import axios from 'axios'

const goods = {
	namespaced: true,
	state: {
		goods: [],
		cart: [],
		totalVal: 0
  	},
  	mutations: {
  		SET_GOODS(state, playload){
  			state.goods = playload
  		},
  		SET_CART(state, playload){
  			state.cart.push(playload)
  			state.totalVal += parseInt(playload.product_id.price)
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
	  		axios
	  			.post('http://zt.webink.site/wp-json/cocart/v1/add-item', playload)
	  			.then((response) => {
    				// console.log(response);
  				})
  				.catch(error => console.log(error))
	  	},
	  	loadCart({commit}){
	  		axios
	  			.get('http://zt.webink.site/wp-json/cocart/v1/get-cart')
	  			.then(response =>{
	  				// console.log(response)
	  			})
	  			.catch(error => console.log(error))

	  	},
	  	loadCartLength({commit}){
	  		axios 
	  			.get('http://zt.webink.site/wp-json/cocart/v1/count-items')
	  			.then(response =>{
	  				// console.log(response)
	  			})
	  			.catch(error => console.log(error))
	  	},
	  	// custom
	  	customCart({commit}, playload){
	  		console.log(playload)
	  		commit('SET_CART', playload)
	  	}
	},
	getters: {
		getGoods: (state) => (slug) => {
  			return state.goods.find(goodItem => goodItem.slug == slug)
  		}
	}
}

export default goods