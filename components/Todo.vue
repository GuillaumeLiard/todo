<template>
	<v-layout>
		<v-flex>
			<v-card>
				<v-list>
					<v-list-tile>

						<v-list-tile-action>
							<v-icon color="info">drag_indicator</v-icon>
						</v-list-tile-action>

						<v-list-tile-content>
							<v-list-tile-title>{{title}}</v-list-tile-title>
						</v-list-tile-content>

						<v-list-tile-avatar>
							<v-switch
							v-model="doneModel"
							/>
						</v-list-tile-avatar>

					</v-list-tile>
				</v-list>
			</v-card>
		</v-flex>
	</v-layout>
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
		done: {
			type: Boolean,
			default: false
		},
		id: {
			type: Number,
			default: 0
		},
	},
	computed: {
		doneModel: {
			set(status) {
				setTimeout(() => {
					this.setTodoStatus({id: this.id, done: status})
				}, 150)
			},
			get() {
				return this.done
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

<style scoped>
.v-list__tile__action {
	cursor: pointer;
	cursor: grab;
}
</style>
