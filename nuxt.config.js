const pkg = require('./package')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/todo/'
  }
} : {}

module.exports = {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },

	/*
	** Global CSS
	*/
	css: [
		'~/assets/style/app.styl'
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'@/plugins/vuetify'
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/pwa',
	],

	manifest: {
		"name": "todo list",
		"short_name": "todo",
		"start_url": "/",
		"display": "fullscreen",
		"orientation": "portrait",
		"background_color": "#121212",
		"theme_color": "#121212"
	},

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},
	
	...routerBase,
  generate: {
		dir: 'docs'
	}
}
