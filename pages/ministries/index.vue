<template>
	<div class="w-full h-full">
		<Head>
			<Title>{{ lang.spaOrEngLng ? 'Ministerios' : 'Ministries' }}</Title>
			<Meta
				name="description"
				content="Los diversos ministerios de nuestra iglesia"
			/>
		</Head>
		<MinistriesBanner />
		<MinistriesHero />
		<MinistriesContent />
		<Slide3d />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
