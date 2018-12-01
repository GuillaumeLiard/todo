<template>
	<div class="page">
		<div class="main">
			<Todos filter="ongoing"/>
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

</style>
