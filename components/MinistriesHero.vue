<template>
	<div class="hero-contact">
		<div class="content">
			<h1 class="mb-16">
				{{
					lang.spaOrEngLng
						? '“Espera grandes de cosas de Dios e intenta hacer grandes cosas por Dios”'
						: '“Expect great things from God, attempt great things for God”'
				}}
			</h1>
			<p>― William Carey</p>
			<!-- <nuxt-link to="/contact#contact-form" class="flex justify-center">
				<button>
					{{ lang.spaOrEngLng ? 'Conéctate' : 'Connect' }}
				</button>
			</nuxt-link> -->
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
		height: 100vh;
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

	/* From uiverse.io by @nikk7007 */
	button {
		padding: 1rem 1.75rem;
		border: 2px solid #f3f4f6;
		position: relative;
		overflow: hidden;
		background-color: transparent;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 500;
		transition: 0.3s;
		z-index: 1;
		font-family: inherit;
		color: #f3f4f6;
	}
	button::before {
		content: '';
		width: 0;
		height: 300%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		background: #f3f4f6;
		transition: 0.5s ease;
		display: block;
		z-index: -1;
	}
	button:hover::before {
		width: 105%;
	}
	button:hover {
		color: #111;
	}
</style>
