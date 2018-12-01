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
import Todo from '~/components/Todo.vue'
export default {
	data: function() {
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
	},
	components: {
		Todo
	}
}
</script>
