<template>
	<v-app>
		<Navigation/>
		<Toolbar :title="title"/>
		<v-content>
			<v-container fluid>
				<router-view>
					<nuxt/>
				</router-view>
				<v-btn
				color="success"
				fixed
				bottom
				right
				fab
				>
				<nuxt-link to="/add"	exact>
					<v-icon>add</v-icon>
				</nuxt-link>
			</v-btn>
		</v-container>
	</v-content>
	<v-footer app></v-footer>
</v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from '~/components/layouts/Navigation.vue'
import Toolbar from '~/components/layouts/Toolbar.vue'
export default {
	components: {
		Toolbar,
		Navigation
	},
	computed: {
		...mapGetters({
			getPageTitle: 'getPageTitle'
		}),
		title: function() {
			return this.getPageTitle(this.$route.fullPath)
		}
	},
	// mounted: function() {
	// 	console.log('this', this);
	// }
}
</script>

<style scoped>

a {
	text-decoration: none;
}

</style>
