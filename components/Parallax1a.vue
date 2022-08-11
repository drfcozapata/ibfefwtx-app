<template>
	<div class="w-full bg-gray-100 banner">
		<div>
			<div
				class="w-full flex flex-col justify-start border-l border-b border-r rounded-t-lg rounded-b-lg banner__card hover:shadow-md"
			>
				<nuxt-link to="/about/pastor">
					<div class="banner__img">
						<img
							class="rounded-t-lg img1"
							src="../assets/images/family.jpg"
							alt="Familia pastoral"
						/>
						<div class="rounded-t-lg overlay">
							<svg
								class="w-8 h-8 fill-current svg"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path
									d="M400 224c-9.148 0-17.62 2.697-24.89 7.143C370.9 208.9 351.5 192 328 192c-17.38 0-32.46 9.33-40.89 23.17C282.1 192.9 263.5 176 240 176c-12.35 0-23.49 4.797-32 12.46V40c0-22.09-17.9-40-39.1-40C145.9 0 128 17.91 128 40v322.7L72 288C64.15 277.5 52.13 272 39.97 272c-21.22 0-39.97 17.06-39.97 40.02c0 8.356 2.608 16.78 8.005 23.98l91.22 121.6C124.8 491.7 165.5 512 208 512h96C383.4 512 448 447.4 448 368v-96C448 245.5 426.5 224 400 224zM240 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C208 295.2 215.2 288 224 288s16 7.156 16 16V400zM304 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C272 295.2 279.2 288 288 288s16 7.156 16 16V400zM368 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C336 295.2 343.2 288 352 288s16 7.156 16 16V400z"
								/>
							</svg>
						</div>
					</div>
				</nuxt-link>
				<div class="p-4">
					<div class="h-56">
						<nuxt-link to="/about/pastor">
							<h3 class="text-lg font-semibold text-center pb-4 text-sky-700">
								Nuestra Familia Pastoral
							</h3>
						</nuxt-link>
						<p class="text-sm pb-2">
							El pastor David Escalona, su esposa Suely y su pequeño hijo Andrés
							David proceden de Venezuela, país que dejaron para liderar nuestra
							congregación.
						</p>
						<p class="text-sm">
							Mientras el pastor David conduce la Iglesia, nuestra amada Suely
							dirige el Ministerio de Adoración.
						</p>
					</div>
					<hr class="my-3" />
					<nuxt-link class="flex justify-center" to="/about/pastor"
						><button class="learn-more">
							<span class="circle" aria-hidden="true">
								<span class="icon arrow"></span>
							</span>
							<span class="button-text">Conoce más</span>
						</button></nuxt-link
					>
				</div>
			</div>
			<div
				class="w-full flex flex-col justify-start border-l border-b border-r rounded-t-lg rounded-b-lg banner__card hover:shadow-md"
			>
				<nuxt-link to="/ministries">
					<div class="banner__img">
						<img
							class="rounded-t-lg"
							src="../assets/images/fathers-day.jpg"
							alt="Celebración del Día del Padre 2022"
						/>
						<div class="rounded-t-lg overlay">
							<svg
								class="w-8 h-8 fill-current svg"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path
									d="M400 224c-9.148 0-17.62 2.697-24.89 7.143C370.9 208.9 351.5 192 328 192c-17.38 0-32.46 9.33-40.89 23.17C282.1 192.9 263.5 176 240 176c-12.35 0-23.49 4.797-32 12.46V40c0-22.09-17.9-40-39.1-40C145.9 0 128 17.91 128 40v322.7L72 288C64.15 277.5 52.13 272 39.97 272c-21.22 0-39.97 17.06-39.97 40.02c0 8.356 2.608 16.78 8.005 23.98l91.22 121.6C124.8 491.7 165.5 512 208 512h96C383.4 512 448 447.4 448 368v-96C448 245.5 426.5 224 400 224zM240 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C208 295.2 215.2 288 224 288s16 7.156 16 16V400zM304 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C272 295.2 279.2 288 288 288s16 7.156 16 16V400zM368 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C336 295.2 343.2 288 352 288s16 7.156 16 16V400z"
								/>
							</svg>
						</div>
					</div>
				</nuxt-link>
				<div class="p-4">
					<div class="h-56">
						<nuxt-link to="/ministries">
							<h3 class="text-lg font-semibold text-center pb-4 text-sky-700">
								Nuestras Celebraciones
							</h3>
						</nuxt-link>
						<p class="text-sm pb-4">
							La celebración es un elemento importante en nuestra congregación
							en la misma medida en que nos permite ejercitar los 5 ministerios
							que consideramos esenciales: Proclamación, Enseñanza, Servicio,
							Compañerismo y Adoración.
						</p>
					</div>
					<hr class="my-3" />
					<nuxt-link class="flex justify-center" to="/ministries"
						><button class="learn-more">
							<span class="circle" aria-hidden="true">
								<span class="icon arrow"></span>
							</span>
							<span class="button-text">Conoce más</span>
						</button></nuxt-link
					>
				</div>
			</div>
			<div
				class="w-full flex flex-col justify-start border-l border-b border-r rounded-t-lg rounded-b-lg banner__card hover:shadow-md"
			>
				<nuxt-link to="/about/beliefs">
					<div class="banner__img">
						<img
							class="rounded-t-lg"
							src="../assets/images/ibfe-05.jpg"
							alt="Nuestra edificación"
						/>
						<div class="rounded-t-lg overlay">
							<svg
								class="w-8 h-8 fill-current svg"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path
									d="M400 224c-9.148 0-17.62 2.697-24.89 7.143C370.9 208.9 351.5 192 328 192c-17.38 0-32.46 9.33-40.89 23.17C282.1 192.9 263.5 176 240 176c-12.35 0-23.49 4.797-32 12.46V40c0-22.09-17.9-40-39.1-40C145.9 0 128 17.91 128 40v322.7L72 288C64.15 277.5 52.13 272 39.97 272c-21.22 0-39.97 17.06-39.97 40.02c0 8.356 2.608 16.78 8.005 23.98l91.22 121.6C124.8 491.7 165.5 512 208 512h96C383.4 512 448 447.4 448 368v-96C448 245.5 426.5 224 400 224zM240 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C208 295.2 215.2 288 224 288s16 7.156 16 16V400zM304 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C272 295.2 279.2 288 288 288s16 7.156 16 16V400zM368 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C336 295.2 343.2 288 352 288s16 7.156 16 16V400z"
								/>
							</svg>
						</div>
					</div>
				</nuxt-link>
				<div class="p-4">
					<div class="h-56">
						<nuxt-link to="/about/beliefs">
							<h3 class="text-lg font-semibold text-center pb-4 text-sky-700">
								Nuestras Creencias
							</h3>
						</nuxt-link>
						<p class="text-sm pb-4">
							Creemos en: un Dios verdadero y vivo, en la Santa Biblia, en el
							hombre como creación especial, en Jesús su Hijo eterno, que
							salvación implica redención total, en el Espíritu Santo, en la
							iglesia como congregación local y autónoma y que Dios traerá el
							mundo a su fin apropiado.
						</p>
					</div>
					<hr class="my-3" />
					<nuxt-link class="flex justify-center" to="/about/beliefs"
						><button class="learn-more">
							<span class="circle" aria-hidden="true">
								<span class="icon arrow"></span>
							</span>
							<span class="button-text">Conoce más</span>
						</button></nuxt-link
					>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.banner {
		height: 840px;
		font-family: 'Montserrat';
	}
	.banner > div {
		width: 75%;
		padding: 128px 0;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		gap: 36px;
	}
	@media screen and (max-width: 1024px) {
		.banner > div {
			width: 90%;
			gap: 22px;
		}
	}
	@media screen and (max-width: 768px) {
		.banner > div {
			width: 96%;
			gap: 12px;
		}
	}
	@media screen and (max-width: 480px) {
		.banner > div {
			padding: 80px 0;
			width: 80%;
			flex-wrap: wrap;
		}
	}
	.banner__card {
		height: 567px;
		background-color: #fff;
	}
	.banner__img {
		width: 100%;
		height: 218px;
		position: relative;
	}
	.banner__img img {
		width: 100%;
		display: block;
	}
	.banner__img .overlay {
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
	.banner__img .overlay .svg {
		color: rgb(243, 244, 246);
		/* border: 3.5px solid rgb(243, 244, 246); */
		/* border-radius: 50%;
		padding: 1rem 1.3rem; */
	}
	.banner__img .overlay:hover {
		opacity: 1;
	}
	@media screen and (max-width: 480px) {
		.banner__img {
			height: 190px;
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
