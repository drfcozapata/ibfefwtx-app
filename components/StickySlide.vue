<template>
	<div class="sticky-slide">
		<div class="slide">
			<div class="mb-2 gallery">
				<img src="../public/ibfe-events-20.jpg" alt="" />
				<img src="../public/ibfe-events-01.jpg" alt="" />
				<img src="../public/ibfe-events-02.jpg" alt="" />
				<img src="../public/ibfe-events-03.jpg" alt="" />
				<img src="../public/ibfe-events-04.jpg" alt="" />
				<img src="../public/ibfe-events-05.jpg" alt="" />
				<img src="../public/ibfe-events-06.jpg" alt="" />
				<img src="../public/ibfe-events-07.jpg" alt="" />
				<img src="../public/ibfe-events-08.jpg" alt="" />
				<img src="../public/ibfe-events-09.jpg" alt="" />
				<img src="../public/ibfe-events-10.jpg" alt="" />
				<img src="../public/ibfe-events-11.jpg" alt="" />
				<img src="../public/ibfe-events-12.jpg" alt="" />
				<img src="../public/ibfe-events-13.jpg" alt="" />
				<img src="../public/ibfe-events-14.jpg" alt="" />
				<img src="../public/ibfe-events-15.jpg" alt="" />
				<img src="../public/ibfe-events-16.jpg" alt="" />
				<img src="../public/ibfe-events-17.jpg" alt="" />
				<img src="../public/ibfe-events-18.jpg" alt="" />
				<img src="../public/ibfe-events-19.jpg" alt="" />
			</div>
			<i class="fa-solid fa-angles-down"></i>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
	.sticky-slide {
		width: 100%;
		padding-bottom: 80px;
		background-color: #f9fafb;
	}
	.slide {
		position: relative;
		max-width: 83%;
		margin: 0 auto;
	}
	.gallery {
		height: 419px;
		width: 100%;
		display: flex;
		flex-direction: column;
		overflow: auto;
		scroll-behavior: smooth;
		position: relative;
		left: 0;
		top: 0;
		z-index: 1;
	}
	.gallery img {
		height: 100%;
		width: 100%;
		flex-shrink: 0;
		object-fit: cover;
		position: sticky;
		top: 0;
	}
	i {
		position: absolute;
		font-size: 22px;
		top: 20px;
		right: 20px;
		z-index: 2;
		color: white;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
	}
	::-webkit-scrollbar {
		display: none;
	}
	@media screen and (max-width: 576px) {
		.slide {
			max-width: 88%;
		}
	}
</style>
