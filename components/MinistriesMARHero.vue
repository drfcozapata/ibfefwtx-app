<template>
	<div class="hero-contact">
		<div class="content">
			<h1 class="mb-16">
				{{ lang.spaOrEngLng ? 'Matrimonios' : 'Marriages' }}
			</h1>
		</div>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped>
	.hero-contact {
		color: white;
		position: relative;
		height: 480px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.content {
		padding: 300px;
		z-index: 1;
	}
	.content h1 {
		margin-top: 100px;
		font-family: 'Open Sans', sans-serif;
		font-size: 46px;
		font-weight: 700;
		line-height: 56px;
		color: rgb(248, 250, 252);
		text-transform: uppercase;
	}
	@media screen and (max-width: 992px) {
		.content {
			padding: 200px;
		}
		.content h1 {
			font-size: 42px;
			text-align: center;
			line-height: 52px;
		}
	}
	@media screen and (max-width: 768px) {
		.content {
			padding: 110px;
		}
		.content h1 {
			font-size: 38px;
			line-height: 48px;
		}
	}
	@media screen and (max-width: 576px) {
		.content {
			padding: 60px;
		}
		.content h1 {
			font-size: 32px;
			line-height: 42px;
		}
	}
</style>
