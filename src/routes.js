import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Single from './pages/Single.vue'
import Zatochka from './pages/Zatochka.vue'
import Catalog from './pages/Catalog.vue'
import Contacts from './pages/Contacts.vue'
import Cart from './pages/Cart.vue'

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/catalog/:id',
			component: Single
		},
		{
			path: '/zatochka',
			component: Zatochka
		},
		{
			path: '/catalog',
			component: Catalog
		},
		{
			path: '/cart',
			component: Cart
		},
		{
			path: '/contacts',
			component: Contacts
		}
	],
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
  		return { x: 0, y: 0 }
	}
})
