<template>
	<div class="w-full pt-32 page-title">
		<Head>
			<Title>{{ lang.spaOrEngLng ? 'Nosotros' : 'About Us' }}</Title>
			<Meta name="description" content="Sobre la Iglesia Bautista Fe" />
		</Head>

		<h1>{{ lang.spaOrEngLng ? 'Nosotros' : 'About Us' }}</h1>

		<AboutUsContent />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
