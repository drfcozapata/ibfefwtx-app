<template>
	<div class="w-full h-full">
		<Head>
			<Title>{{
				lang.spaOrEngLng ? 'Calendario de Eventos' : 'Events Calendar'
			}}</Title>
			<Meta
				name="description"
				content="Calendario de eventos de la Iglesia Bautista Fe"
			/>
		</Head>
		<ResourcesECBanner />
		<ResourcesECHero />
		<ResourcesECContent />
		<ResourcesECCarouselView />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
