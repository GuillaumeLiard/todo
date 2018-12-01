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
	getPageTitle: function(state) {
		return function(payload) {
			const match = state.pages.filter(page => page.fullPath === payload)
			return match ? match.length > 0 ? match[0].title : '' : ''
		}
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
