<template>
	<v-app>
		<!-- <v-navigation-drawer app></v-navigation-drawer> -->
		<v-toolbar dark color="primary">
			<v-toolbar-side-icon></v-toolbar-side-icon>
			<v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>more_vert</v-icon>
			</v-btn>
		</v-toolbar>
		<v-content>
			<v-container fluid>
				<router-view>
					<nuxt/>
				</router-view>
			</v-container>
		</v-content>
		<v-footer app></v-footer>
	</v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters({
			getPageTitle: 'getPageTitle'
		}),
		title: function() {
			return this.getPageTitle(this.$route.fullPath)
		}
	},
	mounted: function() {
		console.log('this', this);
	}
}
</script>
