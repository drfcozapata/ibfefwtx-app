<template>
	<div class="w-full h-full">
		<Head>
			<Title>{{ lang.spaOrEngLng ? 'Matrimonios' : 'Marriages' }}</Title>
			<Meta
				name="description"
				content="Ministerio de matrimonios de la Iglesia Bautista Fe"
			/>
		</Head>
		<MinistriesMARBanner />
		<MinistriesMARHero />
		<MinistriesMARContent />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
