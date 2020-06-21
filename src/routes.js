import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Single from './pages/Single.vue'

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/catalog/:id',
			component: Single
		}
	],
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
  		return { x: 0, y: 0 }
	}
})
