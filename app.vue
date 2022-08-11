import { NuxtLayout } from './.nuxt/components';
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
			<Navbar />
			<NuxtPage />
			<Footer />
		</NuxtLayout>
	</div>
</template>

<style>
	.main {
		font-family: 'Poppins', sans serif;
	}
</style>
