<template>
	<v-navigation-drawer app clipped v-model="drawerModel">
		<v-list>
			<nuxt-link
				v-for="link in links"
				:key="link.title"
				:to="link.url"
				exact>
				<v-list-tile>
					<v-list-tile-action>
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>{{ link.title }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</nuxt-link>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
	computed: {
		...mapGetters(['drawer']),
		drawerModel: {
			set(drawerState) {
				this.setDrawerState(drawerState)
				// this.$store.commit('setDrawerState', drawerState)
			},
			get() {
				return this.drawer
			}
		}
	},
	methods: {
		...mapMutations(['setDrawerState']),
	},
	data () {
		return {
			links: [
				{ title: 'Ongoing', icon: 'dashboard', url: '/' },
				{ title: 'Done', icon: 'widgets', url: '/done' }
			],
		}
	},
}
</script>

<style media="screen">
a {

	display: block
}
.nuxt-link-active {
	opacity: 0.2;
	text-decoration: none;
}
</style>
