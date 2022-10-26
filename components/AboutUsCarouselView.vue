<template>
	<div class="carousel-view">
		<div class="about">
			<Carousel class="carousel" v-slot="{ currentSlide }">
				<Slide v-for="(slide, index) in carouselSlides" :key="index">
					<div v-show="currentSlide === index + 1" class="slide-info">
						<img :src="`${slide}.jpg`" alt="" />
					</div>
				</Slide>
			</Carousel>
		</div>
	</div>
</template>

<script setup>
	import { reactive } from 'vue';
	import Carousel from '../components/Carousel.vue';
	import Slide from '../components/Slide.vue';

	const carouselSlides = reactive([
		'ibfe-about-01',
		'ibfe-about-02',
		'ibfe-about-03',
		'ibfe-about-04',
		'ibfe-about-05',
		'ibfe-about-06',
		'ibfe-about-07',
		'ibfe-about-08',
		'ibfe-about-09',
		'ibfe-about-10',
		'ibfe-about-11',
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
	.carousel-view {
		width: 100%;
		background-color: #f9fafb;
	}
	.about {
		width: 84%;
		margin: 0 auto;
		padding: 40px 0 80px 0;
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
