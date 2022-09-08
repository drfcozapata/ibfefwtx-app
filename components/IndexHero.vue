<template>
	<div class="showcase">
		<div class="video-container">
			<video src="../assets/videos/ibfe-cover.mp4" autoplay muted loop></video>
		</div>
		<div class="content">
			<h1 class="mb-16">
				{{ lang.spaOrEngLng ? 'Un lugar donde' : 'A place where' }}
				<br />
				<span>
					{{ lang.spaOrEngLng ? 'eres aceptado' : 'you are accepted' }}
				</span>
			</h1>
			<nuxt-link to="/about/our-church" class="flex justify-center">
				<button>{{ lang.spaOrEngLng ? 'Conócenos' : 'Meet Us' }}</button>
			</nuxt-link>
		</div>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped>
	.showcase {
		color: white;
		position: relative;
		height: 85vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.video-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #3a4052 url('../assets/images/ibfe-00.png') no-repeat center
			center/cover;
		z-index: -2;
	}
	.video-container video {
		min-width: 100%;
		min-height: 100%;
		object-fit: cover;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.video-container::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}
	.content {
		z-index: 1;
	}
	.showcase h1 {
		font-family: 'Open Sans', sans-serif;
		font-size: 90px;
		font-weight: 700;
		line-height: 90px;
		color: transparent;
		-webkit-text-stroke: 2.5px white;
	}
	.showcase h1 span {
		color: transparent;
		-webkit-text-stroke: 2.5px rgb(255, 196, 0);
	}
	@media screen and (max-width: 992px) {
		.showcase h1 {
			font-size: 80px;
			text-align: center;
			line-height: 80px;
		}
	}
	@media screen and (max-width: 768px) {
		.showcase h1 {
			font-size: 70px;
			line-height: 70px;
			-webkit-text-stroke: 2px white;
		}
		.showcase h1 span {
			-webkit-text-stroke: 2px rgb(255, 196, 0);
		}
	}
	@media screen and (max-width: 576px) {
		.showcase h1 {
			font-size: 55px;
			line-height: 55px;
		}
	}
	@media screen and (max-width: 480px) {
		.showcase h1 {
			font-size: 45px;
			line-height: 45px;
			-webkit-text-stroke: 1.5px white;
		}
		.showcase h1 span {
			-webkit-text-stroke: 1.5px rgb(255, 196, 0);
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
