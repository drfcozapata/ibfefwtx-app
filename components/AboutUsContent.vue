<template>
	<div class="w-full grid grid-cols-1 bg-gray-50 contact">
		<div class="w-10/12 mx-auto mb-8 flex flex-col justify-start">
			<h1>
				{{ lang.spaOrEngLng ? 'Nosotros' : 'About Us' }}
			</h1>
			<div class="about">
				<div class="about__image">
					<img
						class="rounded-lg"
						src="../assets/images/ibfe-09.jpg"
						alt="Iglesia Bautista Fe"
					/>
				</div>
				<div class="about__text">
					<div v-if="lang.spaOrEngLng === true" class="spanish">
						<p>
							Desde el 2020, Dios nos dio la oportunidad de iniciar Iglesia
							Bautista Fe con el deseo de que esta se convierta en:
						</p>
						<p>
							<i class="fa-sharp fa-solid fa-church"></i>
							<span>
								Una comunidad donde las familias se integran para crecer
								sanamente dependiendo del Espíritu Santo, aprendiendo de Dios a
								través de su palabra, desarrollando sus dones y talentos,
								guiándoles en un proceso intencional que les capacite
								integralmente.
							</span>
						</p>
						<p>
							<i class="fa-sharp fa-solid fa-church"></i>
							<span>
								Una comunidad donde hombres y mujeres estén comprometidos en
								compartir el evangelio con otros e invertir sus vidas en guiar a
								personas a aprender más de Jesús. Desarrollando discípulos que
								hagan discípulos. Influenciando la vida de miles en el área de
								Fort Worth, Texas, USA y el mundo.
							</span>
						</p>
						<p>
							<i class="fa-sharp fa-solid fa-church"></i>
							<span>
								Una comunidad con corazón dispuesto a mostrar el amor de Dios
								visible por medio de nuestro ejemplo y actos de servicio en
								nuestra ciudad y donde Dios nos dirija a servir.
							</span>
						</p>
						<p>
							<i class="fa-sharp fa-solid fa-church"></i>
							<span>
								Una comunidad que está activamente yendo no solo en Texas, sino
								en Estados Unidos y al mundo, llevando el evangelio sirviendo en
								la extensión del Reino de Dios en la tierra.
							</span>
						</p>
					</div>
					<div v-else class="english">
						<p>
							Since 2020, God gave us the opportunity to start Faith Baptist
							Church with the desire that it will become:
						</p>
						<p>
							<i class="fa-sharp fa-solid fa-church"></i>
							<span>
								A community where families join to grow, learn to depend on the
								Holy Spirit, learn from God through his word, developing their
								gifts and talents, guiding them in an intentional process that
								fully empowers them.
							</span>
						</p>
						<p>
							<i class="fa-sharp fa-solid fa-church"></i>
							<span>
								A community where men and women are committed to sharing the
								gospel with others and investing their lives in leading people
								to learn more about Jesus. Developing Disciples Who Make
								Disciples. Influencing the lives of thousands in the Fort Worth
								area, Texas, USA and the world.
							</span>
						</p>
						<p>
							<i class="fa-sharp fa-solid fa-church"></i>
							<span>
								A community with a heart willing to show the love of God visible
								through our example and acts of service in our city and where
								God directs us to serve.
							</span>
						</p>
						<p>
							<i class="fa-sharp fa-solid fa-church"></i>
							<span>
								A community that is actively going not only to Texas, but in the
								United States and the world, taking the gospel serving in
								extending the Kingdom of God on earth.
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped>
	.contact {
		min-height: 920px;
		font-family: 'Montserrat', sans serif;
	}
	.contact h1 {
		font-family: 'Poppins', sans serif;
		font-size: 40px;
		line-height: 40px;
		font-weight: 500;
		margin: 90px 0 60px 0;
	}
	.about__image {
		grid-area: a;
	}
	.about__text {
		grid-area: b;
	}
	.about {
		position: relative;
		font-family: 'Montserrat';
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-gap: 60px;
		grid-template-rows: auto;
		grid-template-areas: 'a a a b b b b b';
	}
	.about__text h2 {
		font-size: 30px;
		line-height: 32px;
		font-weight: 600;
		margin-bottom: 32px;
	}
	.about__text p {
		font-size: 18px;
		line-height: 1.8;
		margin-bottom: 20px;
		text-indent: -36px;
		padding-left: 36px;
	}
	.about__text p:first-of-type {
		text-indent: 0;
		padding-left: 0;
	}
	i {
		color: #0369a1;
		font-size: 16px;
		display: inline;
		margin-right: 12px;
	}

	@media screen and (max-width: 768px) {
		.about {
			padding: 18px 0 70px 0;
			grid-gap: 40px;
			grid-template-areas: 'a a a a . . .' 'b b b b b b b';
		}
		.about__text h2 {
			font-size: 28px;
			line-height: 30px;
			margin-bottom: 26px;
		}
		.about p {
			font-size: 17px;
			line-height: 1.7;
			margin-bottom: 19px;
		}
	}
	@media screen and (max-width: 576px) {
		.about {
			width: 92%;
			grid-template-columns: repeat(12, 1fr);
			grid-gap: 30px;
			grid-template-areas: 'a a a a a a a . . . . .' 'b b b b b b b b b b b b';
		}
		.about__text h2 {
			font-size: 26px;
			line-height: 28px;
		}
		.about p {
			font-size: 16px;
			line-height: 1.6;
			margin-bottom: 18px;
		}
	}
</style>
