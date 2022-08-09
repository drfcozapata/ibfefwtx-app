<template>
	<div class="flex flex-col justify-center text-box">
		<h3 class="px-48 text-3xl italic leading-relaxed text-center mb-10">
			"La gracia es la aceptación de nosotros por parte de Dios. <br />La fe es
			nuestra aceptación de que Dios nos acepta".
		</h3>
		<p class="mb-20 px-48 text-xl text-right">― Adrian Rogers</p>
		<nuxt-link to="/ministries" class="flex justify-center">
			<button>Conoce más</button>
		</nuxt-link>
	</div>
</template>

<style scoped>
	.text-box {
		height: 630px;
		color: white;
		font-family: 'Open Sans', sans-serif;
	}
	.text-box h1 span {
		color: transparent;
		-webkit-text-stroke: 2px rgb(255, 196, 0);
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
