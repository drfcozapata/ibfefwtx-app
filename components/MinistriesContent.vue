<template>
	<div
		class="w-full grid grid-cols-1 bg-gray-50 ministries ministries__content"
	>
		<div class="w-10/12 mx-auto mb-8 flex flex-col justify-start">
			<h1>
				{{ lang.spaOrEngLng ? 'Ministerios' : 'Ministries' }}
			</h1>
			<MinistriesTEAContent />
			<MinistriesMISContent />
			<MinistriesMARContent />
		</div>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style>
	.ministries__content {
		min-height: 790px;
		font-family: 'Montserrat', sans serif;
	}
	.ministries h1 {
		font-family: 'Poppins', sans serif;
		font-size: 40px;
		line-height: 40px;
		font-weight: 500;
		margin: 90px 0 60px 0;
	}
	.ministries h2 {
		font-size: 30px;
		font-weight: 500;
		margin: 32px 0 50px 0;
	}
	.ministries p {
		font-size: 16px;
		line-height: 1.8;
		margin-bottom: 10px;
	}
	.ministries input[type='text'],
	.ministries input[type='email'],
	.ministries textarea {
		padding: 6px;
		border-radius: 6px;
		border: 0.5px solid #ccc;
	}
	.ministries label {
		margin-bottom: 2px;
	}
	.ministries input[type='submit'] {
		padding: 10px 30px;
		border: 2px solid rgb(3, 105, 161);
		text-transform: uppercase;
		font-weight: 500;
		transition: 0.5s ease all;
	}
	.ministries input[type='submit']:hover {
		border: 2px solid transparent;
		background-color: rgb(3, 105, 161);
		color: rgb(241, 245, 249);
		font-weight: 600;
		letter-spacing: 1px;
	}
	@media screen and (max-width: 992px) {
		.ministries > div {
			padding: 0 40px;
		}
		.ministries h1 {
			font-size: 38px;
			line-height: 38px;
			margin-bottom: 54px;
		}
	}
	@media screen and (max-width: 768px) {
		.ministries > div {
			padding: 0 20px;
		}
		.ministries h1 {
			font-size: 34px;
			line-height: 34px;
			margin-bottom: 48px;
		}
		.wrap {
			flex-wrap: wrap;
			gap: 12px;
		}
	}
	@media screen and (max-width: 576px) {
		.ministries {
			min-height: 860px;
		}
		.ministries > div {
			width: 90%;
			padding: 0 6px;
		}
		.ministries h1 {
			font-size: 30px;
			line-height: 30px;
			margin-bottom: 42px;
		}
		.ministries p,
		label,
		input {
			font-size: 14px;
		}
	}
</style>
