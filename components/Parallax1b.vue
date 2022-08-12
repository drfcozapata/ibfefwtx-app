<template>
	<div class="w-full grid grid-cols-1 banner2">
		<div class="flex flex-col justify-center">
			<p class="italic leading-relaxed text-center mb-4">
				"La gracia es la aceptación de nosotros por parte de Dios. La fe es
				nuestra aceptación de que Dios nos acepta".
			</p>
			<p class="text-right mb-8"><span>― Adrian Rogers</span></p>
			<nuxt-link to="/ministries" class="flex justify-center">
				<button>Conoce más</button>
			</nuxt-link>
		</div>
	</div>
</template>

<style scoped>
	.banner2 {
		height: 630px;
		color: white;
		font-family: 'Open Sans', sans-serif;
	}
	.banner2 > div {
		padding: 0 280px;
	}
	.banner2 p {
		font-size: 30px;
	}
	.banner2 p span {
		font-size: 20px;
	}
	@media screen and (max-width: 1200px) {
		.banner2 > div {
			padding: 0 200px;
		}
	}
	@media screen and (max-width: 992px) {
		.banner2 > div {
			padding: 0 180px;
		}
		.banner2 p {
			font-size: 27px;
		}
		.banner2 p span {
			font-size: 19px;
		}
	}
	@media screen and (max-width: 768px) {
		.banner2 > div {
			padding: 0 110px;
		}
		.banner2 p {
			font-size: 24px;
		}
		.banner2 p span {
			font-size: 18px;
		}
	}
	@media screen and (max-width: 576px) {
		.banner2 > div {
			padding: 0 60px;
		}
		.banner2 p {
			font-size: 23px;
		}
		.banner2 p span {
			font-size: 16px;
		}
	}

	/* From uiverse.io by @nikk7007 */
	button {
		padding: 1.25rem 2rem;
		border: 2px solid #f3f4f6;
		position: relative;
		overflow: hidden;
		background-color: transparent;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 600;
		/* font-size: 16px; */
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
