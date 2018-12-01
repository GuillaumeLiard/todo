export const state = function() {
	return {
		todos: []
		// todos: [
		// 	{
		// 		id: 1,
		// 		title: 'abc',
		// 		content: 'more content about abc',
		// 		done: true
		// 	},
		// 	{
		// 		id: 2,
		// 		title: 'def',
		// 		content: 'more content about def',
		// 		done: false
		// 	},
		// 	{
		// 		id: 3,
		// 		title: 'ghi',
		// 		content: 'more content about ghi',
		// 		done: true
		// 	},
		// ]
	}
}

export const getters = {
	get: function(state) {
		return state.todos
	},
	getHighestId: function(state) {
		let work = 0
		for (let todo of state.todos){
			if (todo.id > work) work = todo.id
		}
		return work
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
	},
	add: function(state, payload) {
		state.todos.push({
			id: getters.getHighestId(state) + 1,
			title: payload,
			content: 'default',
			done: false
		})
	}
}
