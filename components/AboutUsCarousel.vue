<template>
	<div class="carousel">
		<slot :currentSlide="currentSlide" />

		<!-- Navigation -->
		<!-- <div class="navigate">
			<div @click="prevSlide" class="toggle-page left">
				<i class="fa-solid fa-chevron-left"></i>
			</div>
			<div @click="nextSlide" class="toggle-page right">
				<i class="fa-solid fa-chevron-right"></i>
			</div>
		</div> -->

		<!-- Pagination -->
		<div class="pagination">
			<span
				v-for="(slide, index) in getSlideCount"
				:key="index"
				:class="{ active: index + 1 === currentSlide }"
				@click="goToSlide(index)"
			>
			</span>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue';

	const currentSlide = ref(1);
	const getSlideCount = ref(null);
	const autoPlayEnabled = ref(true);
	const timeoutDuration = ref(5000);

	onMounted(() => {
		getSlideCount.value = document.querySelectorAll('.slide').length;
	});

	// Next slide
	const nextSlide = () => {
		if (currentSlide.value === getSlideCount.value) {
			currentSlide.value = 1;
			return;
		}
		currentSlide.value += 1;
	};
	// Prev slide
	const prevSlide = () => {
		if (currentSlide.value === 1) {
			currentSlide.value = getSlideCount.value;
			return;
		}
		currentSlide.value -= 1;
	};
	// to selected slide
	const goToSlide = index => {
		currentSlide.value = index + 1;
	};
	// autoplay
	const autoplay = () => {
		setInterval(() => {
			nextSlide();
		}, timeoutDuration.value);
	};
	if (autoPlayEnabled.value) autoplay();
</script>

<style scoped>
	.navigate {
		padding: 0 16px;
		height: 100%;
		width: 100%;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.toggle-page {
		display: flex;
		flex: 1;
	}
	.right {
		justify-content: flex-end;
	}
	i {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		background-color: #6347c7;
		color: white;
	}
	.pagination {
		position: absolute;
		bottom: 24px;
		width: 100%;
		display: flex;
		gap: 16px;
		justify-content: center;
		align-items: center;
	}
	.pagination span {
		cursor: pointer;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #fff;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.6);
	}
	.pagination .active {
		background-color: #6347c7;
	}
</style>
