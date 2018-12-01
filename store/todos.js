export const state = function() {
	return {
		todos: [
			{
				id: 1,
				title: 'abc',
				content: 'more content about abc',
				done: true
			},
			{
				id: 2,
				title: 'def',
				content: 'more content about def',
				done: false
			},
			{
				id: 3,
				title: 'ghi',
				content: 'more content about ghi',
				done: true
			},
		]
	}
}

export const getters = {
	get: function(state) {
		return state.todos
	},
	getOngoing: function(state) {
		return state.todos.filter(todo => !todo.done)
	},
	getDone: function(state) {
		return state.todos.filter(todo => todo.done)
	},
	getDoneStatusById: function(state) {
		return function(payload) {
			const match = state.todos.filter(todo => todo.id === payload)
			return match[0].done
			// return match[0] ? match[0].done : false
		}
	}
}

export const mutations = {
	setTodoStatus: function(state, payload) {
		const match = state.todos.filter(todo => todo.id === payload.id)
		match[0].done = payload.done
		console.log('setTodoStatus', match[0])
	}
}
