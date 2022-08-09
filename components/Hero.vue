<template>
	<div class="w-full relative grid grid-cols-1 hero">
		<div class="flex justify-center items-center">
			<Church />
		</div>
	</div>
</template>

<style scoped>
	.hero {
		height: 768px;
	}
	.hero::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
				rgba(16, 16, 16, 0.6),
				rgba(16, 16, 16, 0.8)
			),
			url('../assets/images/ibfe-01.jpg');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		z-index: -2;
	}
</style>
