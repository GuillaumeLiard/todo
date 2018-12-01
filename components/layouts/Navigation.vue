<template>
	<v-navigation-drawer app clipped v-model="drawer">
		<v-list>
			<v-list-tile
			v-for="link in links"
			:key="link.title">
			<v-list-tile-action>
				<v-icon>
					{{ link.icon }}
				</v-icon>
			</v-list-tile-action>

			<v-list-tile-content>
				<v-list-tile-title>
					<nuxt-link
					:to="link.url">
					{{ link.title }}
				</nuxt-link>
			</v-list-tile-title>
		</v-list-tile-content>
	</v-list-tile>
</v-list>
</v-navigation-drawer>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
	computed: {
		// ...mapGetters({
		// 	drawerState: 'getDrawerState'
		// })
		drawer: {
			set(drawerState) {
				this.$store.commit('setDrawerState', drawerState)
			},
			get() {
				return this.$store.state.drawer
			}
		}
	},
	data () {
		return {
			links: [
				{ title: 'Ongoing', icon: 'dashboard', url: '/' },
				{ title: 'Done', icon: 'widgets', url: '/done' }
			],
			// drawer: false
		}
	},
	// watch: {
	// 	drawerState: function() {
	// 		this.drawer = this.drawerState
	// 	}
	// }
}
</script>
