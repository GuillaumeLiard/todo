<template>
	<v-toolbar dark color="primary">
		<v-toolbar-side-icon></v-toolbar-side-icon>
		<v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn icon>
			<v-icon>more_vert</v-icon>
		</v-btn>
	</v-toolbar>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		}
	}
}
</script>
