<template>
	<div class="w-full h-full">
		<Head>
			<Title>{{
				lang.spaOrEngLng ? '¿Cómo involucrarme?' : 'How to become involved?'
			}}</Title>
			<Meta
				name="description"
				content="Infórmanos de qué manera te gustaría involucrarte en nuestra iglesia"
			/>
		</Head>
		<ContactGIBanner />
		<ContactGIHero />
		<ContactGIContent />
		<ContactGIForm />
	</div>
</template>

<script setup>
	import { useLangStore } from '../../stores/LangStore';

	const lang = useLangStore();
</script>
