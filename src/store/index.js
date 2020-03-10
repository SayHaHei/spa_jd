import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
	state: {
		token: "",
		cartarry: JSON.parse(localStorage.getItem("cartarry")) || [] //存储购物车商品的数组
	},
	mutations: {
		/* 设置token */
		setToken(state, token) {
			state.token = token;
		},
		//添加商品到购物车
		tocart(state, tag) {
			let goods = state.cartarry.find(v => tag.label == v.title);
			if (goods) {
				goods.count += 1;
			} else {
				state.cartarry.push({ title: tag.label, count: 1 });
			}
		},
		//购物车商品数量+1
		cartadd(state, index) {
			state.cartarry[index].count++;
		},
		cartremove(state, index) {
			if (state.cartarry[index].count > 1) {
				state.cartarry[index].count--;
			} else {
				if (window.confirm("确定从购物车里面移除商品吗?")) {
					state.cartarry.splice(index, 1);
				}
			}
		},
		//清空购物车  删除所有信息
		clearcart(state) {
			state.cartarry = [];
		}
	},
	actions: {},
	modules: {},
	getters: {
		//相当于vue的computed
		countsum: state => {
			let num = 0;
			state.cartarry.forEach(v => {
				num += v.count;
			});
			return num;
		}
	}
});
//每次调用mutations的时候，都会进这个方法然后我们可以做一些自己想做的处理
store.subscribe((mutations, state) => {
	localStorage.setItem("cartarry", JSON.stringify(state.cartarry));
});
export default store;
