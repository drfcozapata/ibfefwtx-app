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
					Entendemos que la vida se desenvuelve mejor en comunidad que caminando
					individualmente. Nos gustaría saber de qué manera podemos servirte.
					Ponemos a tu servicio:
				</p>
				<p class="text-indent">
					<i class="fa-sharp fa-solid fa-church"></i>
					<span>Consejería Bíblica Individual:</span> Estas sesiones
					individuales con un consejero voluntario te guiarán a través de un
					proceso donde podrás descubrir quién eres realmente, cuál es la razón
					por la que estás en la tierra y cómo puedes vivir una vida con un
					sentido de propósito claro.
				</p>
				<p class="text-indent">
					<i class="fa-sharp fa-solid fa-church"></i>
					<span>Consejería Bíblica Prematrimonial:</span> Frecuentemente se
					escucha que el matrimonio debe ser para toda la vida, pero ¿cuánto
					tiempo dedicamos a prepararnos para este? Por esta razón queremos
					conectarte con una pareja de mentores que te pueden ayudar a construir
					bases fuertes para el matrimonio. Al conectarte con ellos, recibirás
					las herramientas que matrimonios exitosos han puesto en práctica y les
					han ayudado a tener el tipo de matrimonio diseñado y soñado por Dios.
				</p>
				<p class="text-indent">
					<i class="fa-sharp fa-solid fa-church"></i>
					<span>Consejería Bíblica Matrimonial:</span> El mundo nos ha dado
					hecho creer que si escogemos a la pareja ideal no tendremos de qué
					preocuparnos pues se supone que entonces el matrimonio funcionará. No
					es suficiente escoger a la pareja ideal, y por eso queremos conectarte
					con parejas que te ayuden a aprender como mantener la llama ardiente y
					vivir el matrimonio de la manera como Dios lo ha diseñado.
				</p>
				<p>
					Sabiendo que muchas situaciones vienen a nuestras vidas y necesitamos
					el respaldo y/o la guía de alguien para superarlas, déjanos saber a
					través del siguiente formulario de contacto ¿cómo podemos servirte?
				</p>
			</div>
			<div v-else class="english">
				<p>
					We understand that life unfolds better in community than walking
					individually. We would like to know how we can be of service to you.
					We put at your service:
				</p>
				<p class="text-indent">
					<i class="fa-sharp fa-solid fa-church"></i>
					<span>Individual Biblical Counseling:</span> These one-on-one sessions
					with a volunteer counselor will guide you through a process where you
					can discover who you really are, what is the reason you are on earth
					and how you can live a life with a clear sense of purpose.
				</p>
				<p class="text-indent">
					<i class="fa-sharp fa-solid fa-church"></i>
					<span>Biblical Premarital Counseling:</span> We often hear that
					marriage should be for life, but how much time do we spend preparing
					for it? That's why we want to connect you with a couple of mentors who
					can help you build a strong foundation for marriage. By connecting
					with them, you will receive the tools that successful marriages have
					put into practice and have helped them to have the kind of marriage
					God designed and dreamed of.
				</p>
				<p class="text-indent">
					<i class="fa-sharp fa-solid fa-church"></i>
					<span>Biblical Marriage Counseling:</span> The world has led us to
					believe that if we choose the ideal mate we have nothing to worry
					about because the marriage is supposed to work out. It's not enough to
					choose the ideal partner, and that's why we want to connect you with
					couples who will help you learn how to keep the flame burning and live
					marriage the way God designed it to be.
				</p>
				<p>
					Knowing that many situations come into our lives and we need someone's
					support and/or guidance to overcome them, let us know through the
					following contact form how we can be of service to you.
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
		min-height: 680px;
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
	.text-indent {
		text-indent: -36px;
		padding-left: 36px;
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
		.contact-serve {
			min-height: 860px;
		}
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
