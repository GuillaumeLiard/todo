export const state = function() {
	return {
		pages: [
			{
				fullPath:'/',
				title: 'Ongoing todos',
			},
			{
				fullPath:'/done',
				title: 'Done todos',
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
	}
}
