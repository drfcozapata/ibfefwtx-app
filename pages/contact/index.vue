<template>
	<div class="w-full h-full">
		<Head>
			<Title>{{ lang.spaOrEngLng ? 'Conectarme' : 'Connect Me' }}</Title>
			<Meta name="description" content="Conectarse a la Iglesia Bautista Fe" />
		</Head>
		<ContactBanner />
		<ContactHero />
		<ContactForm />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
