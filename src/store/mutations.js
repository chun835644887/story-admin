import types from './types';

const mutations = {
	[types.SET_USER](state, data){
		state.user = data;
	}
};

export default mutations;