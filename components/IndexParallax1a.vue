<template>
	<div class="w-full bg-gray-100 parallax1a">
		<div>
			<div
				class="w-full flex flex-col justify-start border-l border-b border-r rounded-t-lg rounded-b-lg parallax1a__card hover:shadow-md"
			>
				<nuxt-link to="/about/pastor">
					<div class="parallax1a__img">
						<img
							class="rounded-t-lg img1"
							src="../assets/images/ibfe-04.jpg"
							alt="{{ lang.spaOrEngLng ? 'Familia pastoral' : 'Pastoral Family' }}"
						/>
						<div class="rounded-t-lg overlay">
							<i class="fa-solid fa-hand-pointer svg"></i>
						</div>
					</div>
				</nuxt-link>
				<div class="p-4">
					<div class="parallax1a__content">
						<nuxt-link to="/about/pastor">
							<h3 class="text-lg font-semibold text-center pb-4 text-sky-700">
								{{
									lang.spaOrEngLng
										? 'Nuestra Familia Pastoral'
										: 'Our Pastoral Family'
								}}
							</h3>
						</nuxt-link>
						<p class="text-sm pb-2">
							{{
								lang.spaOrEngLng
									? 'El pastor David Escalona, su esposa Suely y su pequeño hijo Andrés David proceden de Venezuela, país que dejaron para liderar nuestra congregación.'
									: 'Pastor David Escalona, his wife Suely and their young son Andrés David come from Venezuela, a country they left to lead our congregation. congregation.'
							}}
						</p>
						<p class="text-sm">
							{{
								lang.spaOrEngLng
									? 'Mientras el pastor David conduce la Iglesia, nuestra amada Suely dirige el Ministerio de Adoración.'
									: 'While Pastor David leads the church, our beloved Suely leads the worship ministry.'
							}}
						</p>
					</div>
					<hr class="my-3" />
					<nuxt-link class="flex justify-center" to="/about/pastor"
						><button class="learn-more">
							<span class="circle" aria-hidden="true">
								<span class="icon arrow"></span>
							</span>
							<span class="button-text">{{
								lang.spaOrEngLng ? 'Conoce más' : 'Learn more'
							}}</span>
						</button></nuxt-link
					>
				</div>
			</div>
			<div
				class="w-full flex flex-col justify-start border-l border-b border-r rounded-t-lg rounded-b-lg parallax1a__card hover:shadow-md"
			>
				<nuxt-link to="/ministries">
					<div class="parallax1a__img">
						<img
							class="rounded-t-lg"
							src="../assets/images/ibfe-05.jpg"
							alt="{{ lang.spaOrEngLng ? 'Celebración del Día del Padre 2022' : '2022 Father\'s Day Celebration' }}"
						/>
						<div class="rounded-t-lg overlay">
							<i class="fa-solid fa-hand-pointer svg"></i>
						</div>
					</div>
				</nuxt-link>
				<div class="p-4">
					<div class="parallax1a__content">
						<nuxt-link to="/ministries">
							<h3 class="text-lg font-semibold text-center pb-4 text-sky-700">
								{{
									lang.spaOrEngLng
										? 'Nuestras Celebraciones'
										: 'Our Celebrations'
								}}
							</h3>
						</nuxt-link>
						<p class="text-sm pb-4">
							{{
								lang.spaOrEngLng
									? 'La celebración es un elemento importante en nuestra congregación en la misma medida en que nos permite ejercitar los 5 ministerios que consideramos esenciales: Proclamación, Enseñanza, Servicio, Compañerismo y Adoración.'
									: 'The celebration is an important element in our congregation to the extent that it allows us to exercise the 5 ministries that we consider essential: Proclamation, Teaching, Service, Fellowship and Worship.'
							}}
						</p>
					</div>
					<hr class="my-3" />
					<nuxt-link class="flex justify-center" to="/ministries"
						><button class="learn-more">
							<span class="circle" aria-hidden="true">
								<span class="icon arrow"></span>
							</span>
							<span class="button-text">{{
								lang.spaOrEngLng ? 'Conoce más' : 'Learn more'
							}}</span>
						</button></nuxt-link
					>
				</div>
			</div>
			<div
				class="w-full flex flex-col justify-start border-l border-b border-r rounded-t-lg rounded-b-lg parallax1a__card hover:shadow-md"
			>
				<nuxt-link to="/about/our-church">
					<div class="parallax1a__img">
						<img
							class="rounded-t-lg"
							src="../assets/images/ibfe-06.jpg"
							alt="{{ lang.spaOrEngLng ? '' : '' }}Nuestra edificación"
						/>
						<div class="rounded-t-lg overlay">
							<i class="fa-solid fa-hand-pointer svg"></i>
						</div>
					</div>
				</nuxt-link>
				<div class="p-4">
					<div class="parallax1a__content">
						<nuxt-link to="/about/our-church">
							<h3 class="text-lg font-semibold text-center pb-4 text-sky-700">
								{{ lang.spaOrEngLng ? 'Nuestras Creencias' : 'Our Beliefs' }}
							</h3>
						</nuxt-link>
						<p class="text-sm pb-4">
							{{
								lang.spaOrEngLng
									? 'Creemos en: un Dios verdadero y vivo, en la Santa Biblia, en el hombre como creación especial, en Jesús su Hijo eterno, que salvación implica redención total, en el Espíritu Santo, en la iglesia como congregación local y autónoma y que Dios traerá el mundo a su fin apropiado.'
									: 'We believe in: a true and living God, in the Holy Bible, in man as a special creation, in Jesus his eternal Son, that salvation implies total redemption, in the Holy Spirit, in the church as a local and autonomous congregation, and that God will bring the world to its proper end.'
							}}
						</p>
					</div>
					<hr class="my-3" />
					<nuxt-link class="flex justify-center" to="/about/our-church"
						><button class="learn-more">
							<span class="circle" aria-hidden="true">
								<span class="icon arrow"></span>
							</span>
							<span class="button-text">{{
								lang.spaOrEngLng ? 'Conoce más' : 'Learn more'
							}}</span>
						</button></nuxt-link
					>
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
	.parallax1a {
		height: 840px;
		font-family: 'Montserrat';
	}
	.parallax1a > div {
		width: 75%;
		padding: 128px 0;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		gap: 36px;
	}
	.parallax1a__card {
		height: 567px;
		background-color: #fff;
	}
	.parallax1a__img {
		width: 100%;
		height: 218px;
		position: relative;
	}
	.parallax1a__img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.parallax1a__img .overlay {
		position: absolute;
		border: none;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		font-size: 2.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
		backdrop-filter: blur(2px);
		transition: opacity 0.5s;
	}
	.parallax1a__img .overlay .svg {
		color: rgb(243, 244, 246);
	}
	.parallax1a__img .overlay:hover {
		opacity: 1;
	}
	.parallax1a__content {
		height: 224px;
	}
	@media screen and (max-width: 1024px) {
		.parallax1a > div {
			width: 90%;
			gap: 22px;
		}
	}
	@media screen and (max-width: 768px) {
		.parallax1a > div {
			width: 96%;
			gap: 12px;
		}
		.parallax1a > div {
			padding: 100px 0;
		}
		.parallax1a__card {
			height: 634px;
			background-color: #fff;
		}
		.parallax1a__content {
			height: 290px;
		}
	}
	@media screen and (max-width: 576px) {
		.parallax1a {
			height: 1860px;
		}
		.parallax1a > div {
			padding: 80px 0;
			width: 90%;
			flex-direction: column;
			gap: 38px;
		}
		.parallax1a__img {
			height: 190px;
		}
		.parallax1a__card {
			height: 540px;
			background-color: #fff;
		}
		.parallax1a__content {
			height: 224px;
		}
		.parallax1a__card h3 {
			margin-top: 20px;
		}
		.parallax1a__card hr {
			margin-top: 0;
			margin-bottom: 8px;
		}
	}
	/* From uiverse.io */
	button {
		position: relative;
		display: inline-block;
		cursor: pointer;
		outline: none;
		border: 0;
		vertical-align: middle;
		text-decoration: none;
		background: transparent;
		padding-top: 12px;
		font-size: inherit;
		font-family: inherit;
	}
	button.learn-more {
		width: 12rem;
		height: auto;
	}
	button.learn-more .circle {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		position: relative;
		display: block;
		margin: 0;
		width: 3rem;
		height: 3rem;
		background: #0369a1;
		border-radius: 1.625rem;
	}
	button.learn-more .circle .icon {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		background: #fff;
	}
	button.learn-more .circle .icon.arrow {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		left: 0.625rem;
		width: 1.125rem;
		height: 0.125rem;
		background: none;
	}
	button.learn-more .circle .icon.arrow::before {
		position: absolute;
		content: '';
		top: -0.28rem;
		right: 0.0625rem;
		width: 0.625rem;
		height: 0.625rem;
		border-top: 0.125rem solid #fff;
		border-right: 0.125rem solid #fff;
		transform: rotate(45deg);
	}
	button.learn-more .button-text {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 1.5rem 0;
		margin: 0 0 0 1.85rem;
		color: #282936;
		font-weight: 700;
		line-height: 1.6;
		text-align: center;
		text-transform: uppercase;
	}
	button:hover .circle {
		width: 100%;
	}
	button:hover .circle .icon.arrow {
		background: #fff;
		transform: translate(1rem, 0);
	}
	button:hover .button-text {
		color: #fff;
	}
</style>
