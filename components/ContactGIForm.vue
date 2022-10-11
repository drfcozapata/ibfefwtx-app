<template>
	<div class="w-full grid grid-cols-1 bg-slate-50 contact" id="contact-form">
		<div class="w-10/12 mx-auto mb-20 flex flex-col justify-start">
			<!-- <h1>
				{{
					lang.spaOrEngLng ? '¿Cómo podemos servirte?' : 'How can we serve you?'
				}}
			</h1> -->
			<form
				action="https://formsubmit.co/drfcozapata@gmail.com"
				method="POST"
				class="w-full py-10 px-20 rounded-xl bg-gray-100"
			>
				<div class="flex gap-10 mb-4 wrap">
					<div class="w-full flex flex-col">
						<label for="name-involve">{{ lang.spaOrEngLng ? 'Nombre' : 'Name' }}</label>
						<input
							type="text"
							id=""
							name="name-involve"
							:placeholder="lang.spaOrEngLng ? 'Nombre' : 'Name'"
						/>
					</div>
					<div class="w-full flex flex-col">
						<label for="lastname-involve">{{
							lang.spaOrEngLng ? 'Apellido' : 'Lastname'
						}}</label>
						<input
							type="text"
							id="lastname"
							name="lastname-involve"
							:placeholder="lang.spaOrEngLng ? 'Apellido' : 'Lastname'"
						/>
					</div>
				</div>
				<div class="flex gap-10 mb-4 wrap">
					<div class="w-full flex flex-col">
						<label for="email-involve">{{
							lang.spaOrEngLng ? 'Correo Electrónico' : 'Email'
						}}</label>
						<input
							type="email"
							id=""
							name="email-involve"
							:placeholder="lang.spaOrEngLng ? 'Correo Electrónico' : 'Email'"
						/>
					</div>
					<div class="w-full flex flex-col">
						<label for="phone-involve">{{
							lang.spaOrEngLng ? 'Teléfono' : 'Phone'
						}}</label>
						<input
							type="text"
							id="phone"
							name="phone-involved"
							:placeholder="lang.spaOrEngLng ? 'Teléfono' : 'Phone'"
						/>
					</div>
				</div>
				<div class="flex flex-col mb-4">
					<p>
						{{
							lang.spaOrEngLng
								? '¿Ya asistes a la Iglesia Bautista Fe?'
								: 'Do you already attend Iglesia Bautista Fe?'
						}}
					</p>
					<div class="flex">
						<div class="flex gap-2 items-baseline ml-16">
							<label for="asist-yes">
								<input type="radio" id="asist-yes" name="assistent-involve" value="yes" />
								{{ lang.spaOrEngLng ? 'Sí' : 'Yes' }}
							</label>
						</div>
						<div class="flex gap-2 items-baseline ml-16">
							<label for="asist-no">
								<input type="radio" id="asist-no" name="assistent-involve" value="no" />
								No
							</label>
						</div>
					</div>
				</div>
				<div class="flex flex-col mb-10">
					<label for="message-involve">{{
						lang.spaOrEngLng
							? 'Indícanos de qué manera te gustaría involucrarte para servir junto a nosotros'
							: 'Let us know how you would like to get involved in serving with us'
					}}</label>
					<textarea
						id="message"
						name="message-involve"
						:placeholder="
							lang.spaOrEngLng
								? '¿De qué manera te gustaría involucrarte para servir junto a nosotros?'
								: 'How would you like to get involved in serving with us?'
						"
					/>
				</div>
				<div class="flex items-end">
					<input class="uppercase font-medium" type="submit" value="Enviar" />
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
	// const sendForm = () => {
	// 	console.log('Formulario enviado');
	// };
</script>

<style scoped>
	.contact {
		/* height: 790px; */
		font-family: 'Montserrat', sans serif;
	}
	.contact h1 {
		font-family: 'Poppins', sans serif;
		font-size: 40px;
		line-height: 40px;
		font-weight: 500;
		margin: 90px 0 60px 0;
	}
	.contact p {
		font-size: 16px;
		margin-bottom: 4px;
	}
	.contact input[type='text'],
	.contact input[type='email'],
	.contact textarea {
		padding: 6px;
		border-radius: 6px;
		border: 0.5px solid #ccc;
	}
	.contact label {
		margin-bottom: 2px;
	}
	.contact input[type='submit'] {
		padding: 10px 30px;
		border: 2px solid rgb(3, 105, 161);
		text-transform: uppercase;
		font-weight: 500;
		transition: 0.5s ease all;
	}
	.contact input[type='submit']:hover {
		border: 2px solid transparent;
		background-color: rgb(3, 105, 161);
		color: rgb(241, 245, 249);
		font-weight: 600;
		letter-spacing: 1px;
	}
	@media screen and (max-width: 992px) {
		.contact > div {
			padding: 0 40px;
		}
		.contact h1 {
			font-size: 38px;
			line-height: 38px;
			margin-bottom: 54px;
		}
	}
	@media screen and (max-width: 768px) {
		.contact > div {
			padding: 0 20px;
		}
		.contact h1 {
			font-size: 34px;
			line-height: 34px;
			margin-bottom: 48px;
		}
		form {
			padding: 40px;
		}
		.wrap {
			flex-wrap: wrap;
			gap: 12px;
		}
	}
	@media screen and (max-width: 576px) {
		.contact {
			height: 800px;
		}
		.contact > div {
			padding: 0 6px;
		}
		.contact h1 {
			font-size: 30px;
			line-height: 30px;
			margin-bottom: 42px;
		}
		form {
			padding: 20px;
		}
		.contact p,
		label,
		input {
			font-size: 14px;
		}
	}
</style>
