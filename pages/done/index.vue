<template>
	<div class="page">
		<div class="main">
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

<style scoped>
	/* .page {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
	} */
</style>
