<template>
	<v-app>
		<Navigation/>
		<Toolbar :title="title"/>
		<v-content>
			<v-container fluid>
				<v-container grid-list-md>
					<router-view>
						<nuxt/>
					</router-view>
				</v-container>
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
			pages: 'navigation/getPages'
		}),
		title: function () {
			const matches = this.pages.filter(page => page.name === this.$route.name)
			if (matches.length) {
				return matches[0].title
			} else {
				return 'default'
			}
	  }
	},
}
</script>

<style scoped>

a {
	text-decoration: none;
}

</style>
