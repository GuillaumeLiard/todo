<template>
	<v-card :color="cardColor">
		<v-card-title primary-title>
			<div>
				<h3 class="headline mb-0">{{title}}</h3>
				<div>{{content}}</div>
			</div>
		</v-card-title>

		<v-card-actions>
			<v-btn :flat="status" :color="$vuetify.theme.accent">done</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		},
		content: {
			type: String,
			default: ''
		},
		status: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		cardColor: function() {
			return this.status ? this.$vuetify.theme.success : this.$vuetify.theme.error
		}
	}
}
</script>
