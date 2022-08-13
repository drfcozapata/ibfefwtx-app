<template>
	<div class="pastor">
		<div class="pastor__background">
			<img
				src="../assets/images/ibfe-c.png"
				alt="Logo Color Iglesia Bautista Fe"
			/>
		</div>
		<div class="pastor__image">
			<img
				class="rounded-lg"
				src="../assets/images/pastor.jpg"
				alt="Pastor David Escalona"
			/>
		</div>
		<div class="pastor__text">
			<h2 class="text-sky-600">David Escalona</h2>
			<p>
				El Pastor David tiene un deseo ferviente por alcanzar a los perdidos
				llevando el evangelio a las calles y haciendo visible el amor de Dios
				por medio de nuestras acciones, haciendo gala de la habilidad especial
				que Dios le ha dado para conectar con las personas en todos los niveles
				por medio de la palabra de Dios.
			</p>
			<p>
				“Yo inspiro a las personas para crecer más como Jesús” es la frase que
				lo identifica, haciéndola palpable cada día al servir de ejemplo e
				inspiración para que otros puedan llegar a ser más semejantes a Jesús.
			</p>
			<p>
				Esta casado con la mujer de sus sueños, la cual pedía a Dios desde muy
				joven. Su nombre es Suely De Armas, una hermosa joven apasionada por
				Dios, por su Palabra y por la fotografía, quien ha dedicado gran parte
				de su vida a la música sirviendo a Dios con el hermoso talento del
				canto.
			</p>
			<p>
				Juntos, tienen un hijo de nombre Andrés, que vino a completar sus vidas.
			</p>
			<p>
				El Pastor David terminó su Master en Estudios Teológicos de Southwestern
				Baptist Theological Seminary en Diciembre del 2020. Sus hobbies e
				intereses incluyen leer, aprender continuamente, pescar, volar drones y
				pasar tiempo al aire libre en familia.
			</p>
			<P
				>Puedes seguirle en
				<nuxt-link
					class="font-medium italic text-sky-600"
					to="https://www.instagram.com/davidysue/"
					target="_blank"
					>Instagram</nuxt-link
				>
				o
				<nuxt-link
					class="font-medium italic text-sky-600"
					to="https://twitter.com/es_edavid"
					target="_blank"
					>Twitter</nuxt-link
				></P
			>
		</div>
	</div>
</template>

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
