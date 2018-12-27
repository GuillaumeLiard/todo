import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
	window.onNuxtReady(() => {
		createPersistedState({
			// key: 'yourkey',
			// paths: [...]
			// getState: function(state) {
			// 	console.log('state', state)
			// },
			paths: ['todos', 'navigation'],
			arrayMerger: function(store, saved) {
				return [
					...saved,
					...store
				]
			}
			// ...
		})(store)
	})
}
