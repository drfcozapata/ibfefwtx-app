<template>
	<div v-if="show" class="modal-mask">
		<div class="modal-container">
			<header class="flex justify-end">
				<button @click="$emit('close')">
					<i class="fa-regular fa-circle-xmark"></i>
				</button>
			</header>
			<main>
				<slot name="main" />
			</main>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		show: Boolean,
	});
</script>

<style scoped>
	.modal-mask {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.7);
		display: grid;
		place-items: center;
	}
	.modal-container {
		border-radius: 12px;
		padding: 1rem 1.5rem;
		width: 80vw;
		height: 430px;
		max-width: 607px;
	}
	header button {
		text-align: right;
	}
	i {
		color: white;
		font-weight: 500;
		font-size: 24px;
	}
</style>
