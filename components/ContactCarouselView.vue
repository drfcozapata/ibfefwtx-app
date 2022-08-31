<template>
	<div class="home">
		<Carousel class="carousel" v-slot="{ currentSlide }">
			<Slide v-for="(slide, index) in carouselSlides" :key="index">
				<div v-show="currentSlide === index + 1" class="slide-info">
					<img :src="`../public/${slide}.jpg`" alt="" />
				</div>
			</Slide>
		</Carousel>
	</div>
</template>

<script setup>
	import { reactive } from 'vue';
	import Carousel from '../components/Carousel.vue';
	import Slide from '../components/Slide.vue';

	const carouselSlides = reactive([
		'ibfe-bg-13',
		'ibfe-bg-14',
		'ibfe-bg-15',
		'ibfe-bg-16',
		'ibfe-bg-17',
		'ibfe-bg-18',
	]);
</script>

<style scoped>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	.carousel {
		position: relative;
		max-height: 400px;
		height: 400px;
	}
	.slide-info {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		max-height: 100%;
		height: 100%;
		display: flex;
	}
	.slide-info img {
		min-width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
