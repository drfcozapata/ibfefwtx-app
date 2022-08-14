<template>
	<div class="w-full pt-32 page-title">
		<Head>
			<Title>{{
				lang.spaOrEngLng ? '¿Qué Creemos?' : 'What Do We Believe?'
			}}</Title>
			<Meta name="description" content="Conoce a nuestro pastor y su familia" />
		</Head>

		<h1>{{ lang.spaOrEngLng ? '¿Qué Creemos?' : 'What Do We Believe?' }}</h1>

		<OurChurchContent />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
