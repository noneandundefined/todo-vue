import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';

const Router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			children: [
				{
					path: '',
					component: Home,
				},
			],
		},
	],
});

export default Router;
