export const state = function() {
	return {
		drawer: false,
		pages: [
			{
				fullPath:'/',
				title: 'Ongoing todos',
			},
			{
				fullPath:'/done',
				title: 'Done todos',
			},
			{
				fullPath:'/add',
				title: 'Add todo',
			}
		]
	}
}

export const getters = {
	getPages: function(state) {
		return state.pages
	},
	drawer: function(state) {
		return state.drawer
	}
}

export const mutations = {
	toggleDrawer: function(state) {
		state.drawer = !state.drawer
	},
	setDrawerState: function(state, payload) {
		state.drawer = payload
	}
}
