import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';
import trainer from './modules/trainer.js'

Vue.use(Vuex);

const state = {
	
}

// 使用嚴格模式
const debug = true;

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		trainer
	},
	strict: debug
});

if(module.hot){
	module.hot.accept([
		'./getters.js',
		'./actions.js',
		'./mutations.js',
		'./modules/trainer.js'
	], () => {
		store.hotUpdate({
			getters: require('./getters.js'),
			actions: require('./actions.js'),
			mutations: require('./mutations.js'),
			modules: {
				trainer: require('./modules/trainer.js')
			}
		});
	});
	
}
export default store;