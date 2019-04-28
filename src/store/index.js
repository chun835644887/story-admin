import Vuex from 'vuex';
import Vue from 'vue';
import actions from '@/store/actions';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import state from '@/store/state';
import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
	actions,
	getters,
	mutations,
	state,
	modules: modules
});