<template>
	<div class="main">
		<a id="github_link" href="https://github.com/GuillaumeLiard/todo" target="_blank">
			<img class="github_image" src="~/github-corner-right.svg">
		</a>
		<Todos/>
	</div>
</template>

<script>
	import Todos from '~/components/Todos.vue'
	export default {
		components: {
			Todos
		}
	}
</script>

<style>
	.main {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#github_link {
		position: absolute;
		top: 0;
		right: 0;
	}
	.github_image {
		width: 5vw;
		height: auto;
	}
</style>
