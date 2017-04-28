import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: require('../views/Index.vue')
	},
	{
		path: '/about',
		component: require('../views/About.vue')
	},
	{
		path: '/trainer/:name',
		component: require('../views/Trainer.vue'),
		props: true
	},
	{
		path: '/host',
		component: require('../views/Host.vue')
	},
	{
		path: '*',
		component: require('../views/404.vue')
	}
];

const router = new VueRouter({
	routes
});

export default router;