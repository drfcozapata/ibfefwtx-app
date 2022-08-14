<template>
	<div class="w-full relative">
		<Head>
			<Meta name="viewport" content="width=device-width, initial-scale=1" />
			<Link rel="shortcut icon" type="image/png" href="ibfe-c.png" />
			<Link rel="preconnect" href="https://fonts.googleapis.com" />
			<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<Link
				href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
				rel="stylesheet"
			/>
		</Head>
		<NuxtLayout>
			<Header />
			<NuxtPage />
			<Footer />
		</NuxtLayout>
	</div>
</template>

<script setup>
	import { useLangStore } from './stores/LangStore';

	useLangStore;
</script>

<style>
	.main {
		font-family: 'Poppins', sans serif;
	}
	.page-title h1 {
		width: 83.33%;
		margin: 56px auto;
		font-size: 40px;
		font-weight: 500;
		line-height: 40px;
	}
	@media screen and (max-width: 768px) {
		.page-title h1 {
			margin: 35px auto;
			font-size: 38px;
		}
	}
	@media screen and (max-width: 576px) {
		.page-title h1 {
			width: 90%;
			margin: 20px auto 30px auto;
			font-size: 34px;
		}
	}
</style>
