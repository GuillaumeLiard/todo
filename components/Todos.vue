<template>
	<draggable v-model="todos" :options="draggableOptions">
		<transition-group name="list" tag="div" mode="out-in">
			<Todo
			v-for="(todo) in todos"
			:key="todo.id"
			:title="todo.title"
			:content="todo.content"
			:done="todo.done"
			:id="todo.id"
			/>
		</transition-group>
	</draggable>
</template>

<script>
import {mapGetters} from 'vuex'
import draggable from 'vuedraggable'

import Todo from '~/components/Todo.vue'
export default {
	mounted: function() {
		alert('debug');
		alert(JSON.stringify(this.todos))
	},
	components: {
		Todo,
		draggable
	},
	props: {
		filter: {
			type: String,
			default: 'todos'
		}
	},
	data: function() {
		return {
			draggableOptions: {
				handle: '.v-list__tile__action',
				animation: 150,
				ghostClass: 'ghost'
			}
		}
	},
	computed: {
		...mapGetters({
			'todos': 'todos/get',
			'ongoing': 'todos/getOngoing',
			'done': 'todos/getDone'
		}),
		todos: {
			get() {
				return this.todosDisplay
			},
			set(value) {
				this.$store.commit('todos/updateOrder', { todosOrderUpdated: value})
			}
		},
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
	}
}
</script>

<style scoped>
.list-enter-active, .list-leave-active {
	transition: all 0.4s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateX(30px);
}
.ghost {
	opacity: 0;
}
</style>
