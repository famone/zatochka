
import axios from 'axios'

const goods = {
	namespaced: true,
	state: {
		goods: [],
		localCart: [],
    cart:[],
		deliveryMethods: [],
		loading: false,
    payment: {},
    shipping: {},
    cartAlert: false
  	},
  	mutations: {
  		SET_GOODS(state, playload){
  			state.loading = true
  			state.goods = playload
  		},
  		SET_LOCALCART(state, playload){

        state.cartAlert = true;

        setTimeout(()=>{
           state.cartAlert = false
      }, 1300)

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
        state.cart.splice(playload, 1)
  		},
  		SET_DEL(state, playload){
  			state.deliveryMethods = playload
        state.shipping = state.deliveryMethods[0]
  		},
  		ADD_QUANT(state, playload){
  			let productInGoods = state.goods.find(item =>{
  				return item.id === playload.product_id
  			})

  			let productInCart = state.localCart.find(item =>{
  				return item.product_id === playload.product_id
  			})

          let productInMain = state.cart.find(item =>{
            return item.product_id === playload.product_id
          })
  			productInCart.quantity += 1;
  			productInCart.price = productInGoods.price * (productInCart.quantity)
        productInMain.quantity += 1;
  		},
  		REMOVE_QUANT(state, playload){
  			let productInGoods = state.goods.find(item =>{
  				return item.id === playload.product_id
  			})

  			let productInCart = state.localCart.find(item =>{
  				return item.product_id === playload.product_id
  			})

        let productInMain = state.cart.find(item =>{
            return item.product_id === playload.product_id
          })

  			productInCart.quantity -= 1;
  			productInCart.price = productInGoods.price * (productInCart.quantity);
        productInMain.quantity -= 1;
  		},
  		DELITE_QUANT(state, playload){
  			if(state.localCart[playload].quantity == 0){
  				state.localCart.splice(playload, 1)
  			}

        if(state.cart[playload].quantity == 0){
          state.cart.splice(playload, 1)
        }
  		},
      ADD_MAIN(state, playload){
        
        let productInCart = state.cart.find(item =>{
          return item.product_id === playload.product_id
        })

        if(productInCart){
          productInCart.quantity += playload.quantity;
          return
        }
        
        state.cart.push(playload)

      },
      SET_PAYMENT(state, playload){
        state.payment = playload
      },
      SET_SHIPPING(state, playload){
        state.shipping = playload
      }
  	},
	 actions: {
	  	loadGoods({commit}){
	  		axios
	  			.get('https://zt.webink.site/wp-json/wc/v2/products/?consumer_key=ck_1b3bd4c37269692bd10e544448eca18fee4765f2&consumer_secret=cs_292587791608de25be0fc86e4fc35f0d4dbaf0fb')
	  			.then(response =>{
	  				console.log(response.data)
	  				commit('SET_GOODS', response.data)
	  			})
	  			.catch(error => console.log(error))
	  	},
	  	addToCart({commit}, playload){
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
	  	},
	  	addQuant({commit}, playload){
	  		commit('ADD_QUANT', playload)
	  	},
	  	removeQuant({commit}, playload){
	  		commit('REMOVE_QUANT', playload)
	  	},
	  	deliteQuant({commit}, playload){
	  		commit('DELITE_QUANT', playload)
	  	},
      addCart({commit}, playload){
        commit('ADD_MAIN', playload)
      },
      loadPayment({commit}){
        axios
          .get('https://zt.webink.site/wp-json/wc/v3/payment_gateways?consumer_key=ck_1b3bd4c37269692bd10e544448eca18fee4765f2&consumer_secret=cs_292587791608de25be0fc86e4fc35f0d4dbaf0fb')
          .then(response =>{
            console.log(response.data.find(item => item.enabled === true))
            commit('SET_PAYMENT', response.data.find(item => item.enabled === true))
          })
          .catch(error => console.log(error))
      },
      setShipping({commit}, playload){
        
        commit('SET_SHIPPING', playload)
      }
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