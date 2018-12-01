<template>
	<v-card>
	<!-- <v-card :color="cardColor"> -->
		<v-layout>
			<v-flex xs10>
				<v-card-title primary-title>
					<div>
						<h3 class="headline mb-0">{{title}}</h3>
						<div>{{content}}</div>
					</div>
				</v-card-title>
			</v-flex>
			<v-flex xs2>
				<v-card-actions>
					<v-switch
					v-model="switch1"
					></v-switch>
				</v-card-actions>
			</v-flex>
		</v-layout>
	</v-card>
</template>

<script>
export default {
	data: function() {
		return {
			switch1: true
		}
	},
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
			return this.status ? this.$vuetify.theme.error : this.$vuetify.theme.success
		}
	}
}
</script>
