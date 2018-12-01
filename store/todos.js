export const state = function() {
	return {
		todos: [
			{
				'text': 'abc',
				'status': 'ongoing'
			},
			{
				'text': 'def',
				'status': 'done'
			},
			{
				'text': 'ghi',
				'status': 'ongoing'
			},
		]
	}
}

export const getters = {
	get: function(state) {
		return state.todos
	}
}
