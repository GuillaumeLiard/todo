<template>
	<v-toolbar dark color="primary" fixed app>
		<v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
		<v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
		<v-spacer></v-spacer>
		<!-- <v-btn
              color="pink"
              dark
              small
              absolute
              bottom
              left
              fab
            >
		<nuxt-link to="/add"	exact>
			<v-icon>add</v-icon>
		</nuxt-link>
		</v-btn> -->
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
			toggleDrawer: 'navigation/toggleDrawer'
		}),
		// toggleDrawer: function() {
		// 	console.log('click')
		// }
	}
}
</script>
