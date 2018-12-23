<template>
	<v-layout>
		<v-flex>
			<v-form @submit.prevent="addTodo">
				<v-text-field
					ref='input'
					label="Title"
					required
					outline
					v-model="title"
				/>
				<v-btn
					type="submit"
				>
					add
				</v-btn>
			</v-form>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
	data: function() {
		return {
			title: ''
		}
	},
	methods: {
		addTodo: function(payload) {
			this.$store.commit('todos/add', this.title)
			this.title = ''
		}
	}
}
</script>
