<template>
	<v-layout>
		<v-flex xs12 sm6 offset-sm3>
			<Todo
				v-for="(todo, index) in todos"
				:key="index"
			/>
		</v-flex>
	</v-layout>
</template>

<script>
import {mapGetters} from 'vuex'
import Todo from '~/components/Todo.vue'
export default {
	computed: {
		...mapGetters({
			'todos': 'todos/get'
		})
	},
	components: {
		Todo
	}
}
</script>
