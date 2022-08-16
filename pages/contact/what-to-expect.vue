<template>
	<div class="w-full h-full">
		<Head>
			<Title>{{
				lang.spaOrEngLng ? '¿Qué Esperar?' : 'What to Expect?'
			}}</Title>
			<Meta
				name="description"
				content="Qué esperar de la Iglesia Bautista Fe"
			/>
		</Head>
		<ContactWTEBanner />
		<ContactWTEHero />
		<ContactWTEContent />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
