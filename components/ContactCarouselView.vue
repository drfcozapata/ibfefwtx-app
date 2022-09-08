<template>
	<div class="carousel-contact">
		<div class="contact">
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
		'ibfe-contact-01',
		'ibfe-contact-02',
		'ibfe-contact-03',
		'ibfe-contact-04',
		'ibfe-contact-05',
		'ibfe-contact-06',
		'ibfe-contact-07',
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
	.carousel-contact {
		width: 100%;
		background-color: #f3f4f6;
	}
	.contact {
		width: 84%;
		margin: 0 auto;
		padding-bottom: 80px;
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
