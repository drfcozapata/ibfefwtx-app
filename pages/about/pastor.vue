<template>
	<div class="w-full pt-32 page-title">
		<Head>
			<Title>{{
				lang.spaOrEngLng ? 'Conoce al Pastor' : 'Meet the Pastor'
			}}</Title>
			<Meta name="description" content="Conoce a nuestro pastor y su familia" />
		</Head>

		<h1>{{ lang.spaOrEngLng ? 'Conoce al Pastor' : 'Meet the Pastor' }}</h1>

		<AboutUsPastor />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
