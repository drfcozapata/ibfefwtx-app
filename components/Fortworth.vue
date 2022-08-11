<template>
	<div class="w-full flex flex-col justify-center items-center fort-worth">
		<img
			class="mb-10"
			src="../assets/images/fort-worth-map.png"
			alt="Mapa de Fort Worth"
		/>
		<div class="animated">
			<h2>Nuestro objetivo: <span>ganar Fort Worth para Cristo</span></h2>
		</div>
	</div>
</template>

<style scoped>
	.fort-worth {
		height: 630px;
		background-color: rgb(2, 0, 51);
	}
	.fort-worth img {
		height: 360px;
	}
	@media screen and (max-width: 992px) {
		.fort-worth img {
			height: 340px;
		}
	}
	@media screen and (max-width: 768px) {
		.fort-worth img {
			height: 320px;
		}
	}
	@media screen and (max-width: 576px) {
		.fort-worth img {
			height: 300px;
		}
	}
	@media screen and (max-width: 480px) {
		.fort-worth img {
			height: 260px;
		}
	}
	.animated h2 {
		font-family: 'Poppins', sans-serif;
		color: white;
		font-size: 40px;
		font-weight: 300;
		text-align: center;
		line-height: 1.5;
	}
	.animated span {
		font-weight: 700;
		display: block;
		white-space: nowrap;
		border-right: 4px solid;
		width: 29ch;
		color: rgb(251, 191, 36);

		animation: typing 7s steps(29) infinite,
			blink 0.5s infinite step-end alternate;
		animation-delay: 5s;
		overflow: hidden;
	}
	@keyframes typing {
		0% {
			width: 0;
		}
		50%,
		100% {
			width: 100%;
		}
	}
	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}
	@media screen and (max-width: 768px) {
		.animated h2 {
			font-size: 32px;
		}
	}
	@media screen and (max-width: 576px) {
		.animated h2 {
			font-size: 26px;
		}
	}
	@media screen and (max-width: 480px) {
		.animated h2 {
			font-size: 20px;
		}
	}
</style>
