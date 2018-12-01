<template>
	<div class="page">
		<div class="title">
			<h1>
				Done Todos
			</h1>
		</div>
		<div class="main">
			<a id="github_link" href="https://github.com/GuillaumeLiard/todo" target="_blank" rel="noopener">
				<img class="github_image" src="~/static/github-corner-right.svg">
			</a>
			<Todos filter="done"/>
		</div>
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
	.page {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* width: 100vw;
		height: 100vh; */
		/* margin: 15%; */
	}
	.title {
		height: 10%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.main {
		width: 100%;
		height: 60%;
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
		width: 80px;
		height: auto;
	}
</style>
