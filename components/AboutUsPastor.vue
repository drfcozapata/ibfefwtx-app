<template>
	<div class="pastor">
		<!-- <div class="pastor__background">
			<img
				src="../assets/images/ibfe-c.png"
				alt="Logo Color Iglesia Bautista Fe"
			/>
		</div> -->
		<div class="pastor__image">
			<img
				class="rounded-lg"
				src="../assets/images/ibfe-11.jpg"
				alt="Pastor David Escalona"
			/>
		</div>
		<div class="pastor__text">
			<h2 class="text-sky-600">David Escalona</h2>
			<div v-if="lang.spaOrEngLng === true" class="spanish">
				<p>
					El Pastor David tiene un deseo ferviente por alcanzar a los perdidos llevando el
					evangelio a las calles y haciendo visible el amor de Dios por medio de nuestras
					acciones, haciendo gala de la habilidad especial que Dios le ha dado para
					conectar con las personas en todos los niveles por medio de la palabra de Dios.
				</p>
				<p>
					“Yo inspiro a las personas para crecer más como Jesús” es la frase que lo
					identifica, haciéndola palpable cada día al servir de ejemplo e inspiración para
					que otros puedan llegar a ser más semejantes a Jesús.
				</p>
				<p>
					Esta casado con la mujer de sus sueños, la cual pedía a Dios desde muy joven. Su
					nombre es Suely De Armas, una hermosa joven apasionada por Dios, por su Palabra
					y por la fotografía, quien ha dedicado gran parte de su vida a la música
					sirviendo a Dios con el hermoso talento del canto.
				</p>
				<p>Juntos, tienen un hijo de nombre Andrés, que vino a completar sus vidas.</p>
				<p>
					El Pastor David terminó su Master en Estudios Teológicos de Southwestern Baptist
					Theological Seminary en Diciembre del 2020. Sus hobbies e intereses incluyen
					leer, aprender continuamente, pescar, volar drones y pasar tiempo al aire libre
					en familia.
				</p>
				<p>
					Puedes seguirle en
					<nuxt-link
						class="font-medium italic text-sky-600"
						to="https://www.instagram.com/davidysue/"
						target="_blank"
						>Instagram</nuxt-link
					>
					o
					<nuxt-link
						class="font-medium italic text-sky-600"
						to="https://twitter.com/edavidescalona"
						target="_blank"
						>Twitter</nuxt-link
					>
					o escribirle a su
					<nuxt-link
						class="font-medium italic text-sky-600"
						to="mailto:david.escalona@ibfefwtx.org"
						target="_blank"
						>correo electrónico</nuxt-link
					>.
				</p>
			</div>
			<div v-else class="english">
				<p>
					Pastor David has a fervent desire to reach the lost by taking the gospel to the
					streets and making God's love visible through our actions, displaying the
					special ability God has given him to connect with people at all levels through
					the word of God.
				</p>
				<p>
					"I inspire people to grow more like Jesus" is the phrase that identifies him,
					making it palpable every day as he serves as an example and inspiration for
					others to become more like Jesus.
				</p>
				<p>
					He is married to the woman of his dreams, which he asked God for since he was
					very young. Her name is Suely De Armas, a beautiful young woman passionate about
					God, His Word and photography, who has dedicated much of her life to music
					serving God with the beautiful talent of singing.
				</p>
				<p>Together, they have a son named Andres, who came to complete their lives.</p>
				<p>
					Pastor David completed his Master's degree in Theological Studies from
					Southwestern Baptist Theological Seminary in December 2020. His hobbies and
					interests include reading, continuous learning, fishing, flying drones, and
					spending time outdoors with family.
				</p>
				<p>
					You can follow him at.
					<nuxt-link
						class="font-medium italic text-sky-600"
						to="https://www.instagram.com/davidysue/"
						target="_blank"
						>Instagram</nuxt-link
					>
					o
					<nuxt-link
						class="font-medium italic text-sky-600"
						to="https://twitter.com/edavidescalona"
						target="_blank"
						>Twitter</nuxt-link
					>
					or write to his
					<nuxt-link
						class="font-medium italic text-sky-600"
						to="mailto:david.escalona@ibfefwtx.org"
						target="_blank"
						>email address</nuxt-link
					>.
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
	.pastor__image {
		text-align: center;
		grid-area: a;
	}
	.pastor__text {
		grid-area: b;
	}
	.pastor {
		width: 83.33%;
		margin: 0 auto;
		padding: 24px 0 96px 0;
		position: relative;
		font-family: 'Montserrat';
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 60px;
		grid-template-rows: auto;
		grid-template-areas: 'a a a b b b b';
	}
	.pastor__background {
		position: fixed;
		top: 20%;
		left: 20%;
		width: 100%;
		z-index: -2;
		opacity: 0.08;
		overflow: hidden;
	}
	.pastor__text h2 {
		font-size: 30px;
		line-height: 32px;
		font-weight: 600;
		margin-bottom: 32px;
	}
	.pastor p {
		font-size: 18px;
		line-height: 1.8;
		margin-bottom: 20px;
	}
	@media screen and (max-width: 768px) {
		.pastor {
			padding: 18px 0 70px 0;
			grid-gap: 40px;
			grid-template-areas: 'a a a a . . .' 'b b b b b b b';
		}
		.pastor__background {
			top: 25%;
			left: 15%;
			width: 70%;
		}
		.pastor__text h2 {
			font-size: 28px;
			line-height: 30px;
			margin-bottom: 26px;
		}
		.pastor p {
			font-size: 17px;
			line-height: 1.7;
			margin-bottom: 19px;
		}
	}
	@media screen and (max-width: 576px) {
		.pastor {
			width: 92%;
			grid-template-columns: repeat(12, 1fr);
			grid-gap: 30px;
			grid-template-areas: 'a a a a a a a . . . . .' 'b b b b b b b b b b b b';
		}
		.pastor__background {
			top: 38%;
			left: 18%;
			width: 60%;
			position: fixed;
		}
		.pastor__text h2 {
			font-size: 26px;
			line-height: 28px;
		}
		.pastor p {
			font-size: 16px;
			line-height: 1.6;
			margin-bottom: 18px;
		}
	}
</style>
