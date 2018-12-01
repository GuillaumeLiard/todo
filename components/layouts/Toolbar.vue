<template>
	<v-toolbar dark color="primary" fixed app>
		<v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
		<v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
		<v-spacer></v-spacer>
		<nuxt-link to="/add"	exact>
			<v-icon>gavel</v-icon>
		</nuxt-link>
		<!-- <v-btn icon >
			<v-icon>more_vert</v-icon>
		</v-btn> -->
	</v-toolbar>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	methods: {
		...mapMutations({
			toggleDrawer: 'toggleDrawer'
		}),
		// toggleDrawer: function() {
		// 	console.log('click')
		// }
	}
}
</script>
