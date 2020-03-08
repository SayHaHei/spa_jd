import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "首页",
		redirect: "/login"
	},
	{
		path: "/register",
		name: "register",
		component: Register
	},
	{
		path: "/login",
		name: "login",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/Login.vue")
	},
	{
		path: "/index",
		name: "index",
		component: () => import("../views/Index.vue")
	},
	{
		path: "/botnav",
		name: "botnav",
		component: () => import("../views/Botnav.vue"),
		children: [
      /* 二级嵌套路由path不要再加/ 即/list是错误的，应该用list */
			{
				path: "index",
				name: "index",
				component: () => import("../views/Index.vue")
			},
			{
				path: "list",
				name: "list",
				component: () => import("../views/List.vue")
			},
			{
				path: "search",
				name: "search",
				component: () => import("../views/Search.vue")
			},
			{
				path: "car",
				name: "car",
				component: () => import("../views/Car.vue")
			},
			{
				path: "mine",
				name: "mine",
				component: () => import("../views/Mine.vue")
			}
		]
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
