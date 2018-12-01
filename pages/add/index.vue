<template>
	<v-form>
		<v-container>
			<v-layout row wrap>
				<v-flex xs12 sm6 md3>
					<v-text-field
					ref='input'
					label="Title"
					outline
					v-model="title"
					></v-text-field>
				</v-flex>
				<v-flex xs12 sm6 md3>
					<v-btn
					@click="addTodo"
					>
					 add
				</v-btn>
			</v-flex>
		</v-layout>
	</v-container>
</v-form>
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
