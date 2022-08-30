<template>
	<div class="w-full h-full">
		<Head>
			<Title>{{ lang.spaOrEngLng ? 'Nosotros' : 'About Us' }}</Title>
			<Meta name="description" content="Sobre la Iglesia Bautista Fe" />
		</Head>
		<AboutUsBanner />
		<AboutUsHero />
		<AboutUsContent />
		<AboutUsCarouselView />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
