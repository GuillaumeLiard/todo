export const state = function() {
	return {
		todos: [
			{
				title: 'abc',
				content: 'more content about abc',
				status: true
			},
			{
				title: 'def',
				content: 'more content about def',
				status: false
			},
			{
				title: 'ghi',
				content: 'more content about ghi',
				status: true
			},
		]
	}
}

export const getters = {
	get: function(state) {
		return state.todos
	},
	getOngoing: function(state) {
		return state.todos.filter(todo => todo.status)
	},
	getDone: function(state) {
		return state.todos.filter(todo => !todo.status)
	}
}
