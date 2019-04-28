import types from './types';

const mutations = {
	[types.SET_USER](state, data){
		state.user = data;
	},
	[types.SET_SIDE_BAR_FLAG](state, data){
		state.showSide = data;
	}
};

export default mutations;