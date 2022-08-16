<template>
	<div class="w-full grid grid-cols-1 bg-gray-100 banner">
		<div class="flex flex-col justify-center">
			<p class="leading-relaxed text-center mb-10">
				{{
					lang.spaOrEngLng
						? '\u201cEl único nunca en el que deberías enfocarte es en el hecho de que Dios nunca te abandonará.\u201d'
						: '\u201cThe only never you should focus on is that God will never let you down.\u201d'
				}}
			</p>
			<p class="text-right"><span>― Charles F. Stanley</span></p>
		</div>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped>
	.banner {
		height: 630px;
	}
	.banner > div {
		padding: 0 280px;
	}
	.banner p {
		font-size: 30px;
	}
	.banner p span {
		font-size: 20px;
	}
	@media screen and (max-width: 1200px) {
		.banner > div {
			padding: 0 200px;
		}
	}
	@media screen and (max-width: 992px) {
		.banner > div {
			padding: 0 180px;
		}
		.banner p {
			font-size: 27px;
		}
		.banner p span {
			font-size: 19px;
		}
	}
	@media screen and (max-width: 768px) {
		.banner > div {
			padding: 0 110px;
		}
		.banner p {
			font-size: 24px;
		}
		.banner p span {
			font-size: 18px;
		}
	}
	@media screen and (max-width: 576px) {
		.banner > div {
			padding: 0 60px;
		}
		.banner p {
			font-size: 23px;
		}
		.banner p span {
			font-size: 16px;
		}
	}
</style>
