<template>
	<div class="w-full h-full">
		<Head>
			<Title>{{
				lang.spaOrEngLng ? '¿Cómo podemos servirte?' : 'How can we serve you?'
			}}</Title>
			<Meta
				name="description"
				content="Infórmanos de qué manera podemos servirte"
			/>
		</Head>
		<ContactHSYBanner />
		<ContactHSYHero />
		<ContactHSYContent />
		<ContactHSYForm />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped></style>
