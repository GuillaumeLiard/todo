export const state = function() {
	return {
		// todos: []
		todos: [
			// {
			// 	id: 1,
			// 	title: 'abc',
			// 	content: 'more content about abc',
			// 	done: true,
			// 	order: 1,
			// },
			// {
			// 	id: 2,
			// 	title: 'def',
			// 	content: 'more content about def',
			// 	done: true,
			// 	order: 2,
			// },
			// {
			// 	id: 3,
			// 	title: 'ghi',
			// 	content: 'more content about ghi',
			// 	done: false,
			// 	order: 1,
			// },
		]
	}
}

export const getters = {
	get: function(state) {
		return state.todos.slice(0, state.todos.length).sort((firstEl, secondEl) => firstEl.order > secondEl.order)
	},
	getHighestId: function(state) {
		let work = 0
		for (let todo of getters.get(state)){
			if (todo.id > work) work = todo.id
		}
		return work
	},
	getOngoing: function(state) {
		return getters.get(state).filter(todo => !todo.done)
	},
	getDone: function(state) {
		return getters.get(state).filter(todo => todo.done)
	},
	getDoneStatusById: function(state) {
		return function(payload) {
			const match = getters.get(state).filter(todo => todo.id === payload)
			return match[0].done
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
	},
	updateOrder: function(state, payload) {
		const { todos } = state
		const { todosOrderUpdated } = payload
		let todosOutput = []

		for (let [index, todoUpdated] of todosOrderUpdated.entries()) {
			const matches = todos.filter(todo => todo.id === todoUpdated.id)
			if (matches.length) {
				matches[0].order = index
				todosOutput.push(matches[0])
			}
		}
		this.todos = todosOutput
	}
}
