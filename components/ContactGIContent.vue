<template>
	<div class="w-full grid grid-cols-1 bg-gray-50 contact-serve">
		<div class="w-10/12 mx-auto mb-8 flex flex-col justify-start">
			<h1>
				{{
					lang.spaOrEngLng ? '¿Cómo podemos servirte?' : 'How can we serve you?'
				}}
			</h1>
			<div v-if="lang.spaOrEngLng === true" class="spanish">
				<p>
					A través del siguiente formulario de contacto, haznos conocer de qué
					forma te gustaría involucrarte para servir en nuestra iglesia:
				</p>
			</div>
			<div v-else class="english">
				<p>
					Through the contact form below, let us know how you would like to get
					involved in serving our church:
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped>
	.contact-serve {
		/* min-height: 680px; */
		font-family: 'Montserrat', sans serif;
	}
	.contact-serve h1 {
		font-family: 'Poppins', sans serif;
		font-size: 40px;
		line-height: 40px;
		font-weight: 500;
		margin: 90px 0 60px 0;
	}
	.contact-serve p {
		font-size: 16px;
		line-height: 1.8;
		margin-bottom: 10px;
	}
	.contact-serve p span {
		font-weight: 600;
	}
	i {
		color: #0369a1;
		font-size: 16px;
		display: inline;
		margin-right: 14px;
	}
	.contact-serve input[type='text'],
	.contact-serve input[type='email'],
	.contact-serve textarea {
		padding: 6px;
		border-radius: 6px;
		border: 0.5px solid #ccc;
	}
	.contact-serve label {
		margin-bottom: 2px;
	}
	.contact-serve input[type='submit'] {
		padding: 10px 30px;
		border: 2px solid rgb(3, 105, 161);
		text-transform: uppercase;
		font-weight: 500;
		transition: 0.5s ease all;
	}
	.contact-serve input[type='submit']:hover {
		border: 2px solid transparent;
		background-color: rgb(3, 105, 161);
		color: rgb(241, 245, 249);
		font-weight: 600;
		letter-spacing: 1px;
	}
	@media screen and (max-width: 992px) {
		.contact-serve > div {
			padding: 0 40px;
		}
		.contact-serve h1 {
			font-size: 38px;
			line-height: 38px;
			margin-bottom: 54px;
		}
	}
	@media screen and (max-width: 768px) {
		.contact-serve > div {
			padding: 0 20px;
		}
		.contact-serve h1 {
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
		/* .contact-serve {
			min-height: 860px;
		} */
		.contact-serve > div {
			width: 90%;
			padding: 0 6px;
		}
		.contact-serve h1 {
			font-size: 30px;
			line-height: 30px;
			margin-bottom: 42px;
		}
		.contact-serve p,
		label,
		input {
			font-size: 14px;
		}
	}
</style>
