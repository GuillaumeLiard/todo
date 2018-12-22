<template>
	<v-navigation-drawer app clipped v-model="drawerModel">
		<v-list>
			<nuxt-link
				v-for="link in linksOtherPages"
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
			<a id="github_link" href="https://github.com/GuillaumeLiard/todo" target="_blank" rel="noopener">
				<img class="github_image" src="~/static/github-corner-right.svg">
				<span>Github</span>
			</a>
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
			},
			get() {
				return this.drawer
			}
		},
		linksOtherPages: function() {
			return this.links.filter(link => link.url != this.$route.path)
		}
	},
	methods: {
		...mapMutations(['setDrawerState']),
	},
	data () {
		return {
			links: [
				{ title: 'Ongoing', icon: 'hourglass_empty', url: '/' },
				{ title: 'Done', icon: 'done', url: '/done' }
			],
		}
	}
}
</script>

<style media="screen" scoped>
a {
	display: block;
	text-decoration: none;
}
#github_link {

	display: flex;
	align-items: center;
	position: absolute;
	bottom: 0;
	right: 2em;
}
.github_image {
	width: 65px;
	height: auto;
}
</style>
