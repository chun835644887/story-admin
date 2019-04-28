const getters = {
	getUser: state => state.user,
	getTabMenu: state => {console.log(state.tabMenu); return state.tabMenu}
};

export default getters;