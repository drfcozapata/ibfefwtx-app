<template>
	<div class="w-full h-full">
		<Head>
			<Title>{{
				lang.spaOrEngLng
					? 'Mensajes en Audio y Video'
					: 'Audio & Video Messages'
			}}</Title>
			<Meta
				name="description"
				content="Mensajes en Audio y Video de la Iglesia Bautista Fe"
			/>
		</Head>
		<ResourcesAVBanner />
		<ResourcesAVHero />
		<ResourcesAVContent />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
