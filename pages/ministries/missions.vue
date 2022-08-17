<template>
	<div class="w-full h-full">
		<Head>
			<Title>{{ lang.spaOrEngLng ? 'Misiones' : 'Missions' }}</Title>
			<Meta
				name="description"
				content="Ministerio de misiones de la Iglesia Bautista Fe"
			/>
		</Head>
		<MinistriesMISBanner />
		<MinistriesMISHero />
		<MinistriesMISContent />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
