<template>
	<div class="text-box">
		<h1 class="mb-16">Somos <span>iglesia</span></h1>
		<nuxt-link to="/about/beliefs" class="flex justify-center">
			<button>Conócenos</button>
		</nuxt-link>
	</div>
</template>

<style scoped>
	.text-box {
		color: white;
	}
	.text-box h1 {
		font-family: 'Open Sans', sans-serif;
		font-size: 100px;
		font-weight: 700;
		line-height: 80px;
		color: transparent;
		-webkit-text-stroke: 2px white;
	}
	.text-box h1 span {
		color: transparent;
		-webkit-text-stroke: 2px rgb(255, 196, 0);
	}
	@media screen and (max-width: 992px) {
		.text-box h1 {
			font-size: 90px;
			text-align: center;
			line-height: 90px;
		}
	}
	@media screen and (max-width: 768px) {
		.text-box h1 {
			font-size: 80px;
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
