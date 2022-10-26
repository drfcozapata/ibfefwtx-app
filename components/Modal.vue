<template>
	<button @click="open = true">Open Modal</button>
	<Teleport to="body">
		<div v-if="open" class="modal">
			<div class="card">
				<p>Hello from the modal!</p>
				<button @click="open = false">Close</button>
			</div>
		</div>
	</Teleport>
</template>

<script setup>
	import { ref } from 'vue';

	const open = ref(false);
</script>

<style scoped>
	.modal {
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		font-size: 50px;
		background-color: rgba(0, 0, 0, 0.7);
		color: gray;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}
	button {
		margin: 40px;
		padding: 10px 20px;
		font-size: 16px;
		font-weight: bold;
		background-color: blue;
		color: white;
	}
	.card {
		padding: 80px;
		border-radius: 20px;
		background-color: white;
	}
</style>
