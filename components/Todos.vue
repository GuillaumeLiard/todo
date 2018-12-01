<template>
	<v-layout>
		<v-flex xs12 sm6 offset-sm3>
			<Todo
				v-for="(todo, index) in todosDisplay"
				:key="index"
				:title="todo.title"
				:content="todo.content"
				:status="todo.status"
			/>
		</v-flex>
	</v-layout>
</template>

<script>
import {mapGetters} from 'vuex'
import Todo from '~/components/Todo.vue'
export default {
	props: {
		filter: {
			type: String,
			default: 'todos'
		}
	},
	computed: {
		...mapGetters({
			'todos': 'todos/get',
			'ongoing': 'todos/getOngoing',
			'done': 'todos/getDone'
		}),
		todosDisplay: function() {
			switch(this.filter) {
				case 'ongoing':
					return this.ongoing
					break
				case 'done':
					return this.done
					break
				default:
					return this.todos
			}
		}
	},
	components: {
		Todo
	}
}
</script>
