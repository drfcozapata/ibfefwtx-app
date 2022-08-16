<template>
	<div class="w-full h-full showcase">
		<Head>
			<Title>{{ lang.spaOrEngLng ? 'Conectarme' : 'Connect Me' }}</Title>
			<Meta name="description" content="Sobre la Iglesia Bautista Fe" />
		</Head>
		<ContactBanner />
		<ContactHero />
		<ContactForm />
		<!-- <ContactBanner2 /> -->
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>

<!-- <style scoped>
	.showcase {
		color: white;
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		overflow: hidden;
		background-image: #3a4052 url('../../assets/images/ibfe-13.jpg') no-repeat
			center center/cover;
		z-index: -2;
	}
	.page-title {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.page-title::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: -1;
	}
</style> -->
