<template>
	<v-layout>
		<v-flex xs12 sm6 offset-sm3>
			<transition-group name="list" tag="div" mode="out-in">
				<Todo
				v-for="(todo) in todosDisplay"
				:key="todo.id"
				:title="todo.title"
				:content="todo.content"
				:status="todo.status"
				:id="todo.id"
				/>
			</transition-group>
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

<style>
.list-enter-active, .list-leave-active {
	transition: all 0.4s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateX(30px);
}
</style>
