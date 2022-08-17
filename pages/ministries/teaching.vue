<template>
	<div class="w-full h-full">
		<Head>
			<Title>{{ lang.spaOrEngLng ? 'Enseñanza' : 'Teaching' }}</Title>
			<Meta
				name="description"
				content="Ministerio de enseñanza de la Iglesia Bautista Fe"
			/>
		</Head>
		<MinistriesTEABanner />
		<MinistriesTEAHero />
		<MinistriesTEAContent />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
