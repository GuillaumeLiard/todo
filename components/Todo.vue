<template>
	<v-card>
	<!-- <v-card :color="cardColor"> -->
		<v-layout>
			<v-flex xs10>
				<v-card-title primary-title>
					<div>
						<h3 class="headline mb-0">{{title}}</h3>
						<!-- <div>{{content}}</div> -->
					</div>
				</v-card-title>
			</v-flex>
			<v-flex xs2>
				<v-card-actions>
					<v-switch
					v-model="done"
					></v-switch>
				</v-card-actions>
			</v-flex>
		</v-layout>
	</v-card>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
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
		id: {
			type: Number,
			default: 0
		}
	},
	computed: {
		...mapGetters({
			getDoneStatusById: 'todos/getDoneStatusById'
		}),
		cardColor: function() {
			return this.status ? this.$vuetify.theme.error : this.$vuetify.theme.success
		},
		done: {
			set(status) {
				this.setTodoStatus({id: this.id, done: status})
			},
			get() {
				return this.getDoneStatusById(this.id)
			}
		}
	},
	methods: {
		...mapMutations({
			setTodoStatus: 'todos/setTodoStatus'
		}),
	}
}
</script>
