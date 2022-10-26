<template>
	<div class="w-full grid grid-cols-1 bg-gray-100 banner">
		<div class="flex flex-col justify-center">
			<p class="leading-relaxed text-center">
				{{
					lang.spaOrEngLng
						? 'Desafiando personas a convertirse en influencers al permanecer en Dios'
						: 'Challenging people to become influencers by remaining in God'
				}}
			</p>
			<!-- <p class="text-right"><span>― Charles F. Stanley</span></p> -->
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
		font-size: 36px;
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
