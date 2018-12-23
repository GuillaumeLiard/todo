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
