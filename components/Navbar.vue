<template>
	<header
		class="w-full bg-sky-900 text-slate-50 flex items-center fixed z-10 header"
	>
		<div class="w-10/12 mx-auto flex items-center justify-between">
			<nav class="navbar">
				<div>
					<nuxt-link to="/">
						<img
							class="w-16 h-16"
							src="../assets/images/ibfe-w.svg"
							alt="Logo Iglesia Bautista Fe"
						/>
					</nuxt-link>
				</div>
				<ul class="flex justify-end uppercase font-15">
					<li>
						<nuxt-link
							class="pt-10 pb-9 px-6 block relative hover:bg-slate-800"
							to="/about"
							>Nosotros
							<svg
								class="fill-current w-4 h-4 arrow"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
							>
								<path
									d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
								/>
							</svg>
							<!-- <IconCaretDown class="arrow" /> -->
						</nuxt-link>
						<ul>
							<li>
								<nuxt-link to="/about/pastor">Nuestro Pastor</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/about/beliefs">¿Qué creemos? </nuxt-link>
							</li>
						</ul>
					</li>
					<li>
						<nuxt-link
							class="pt-10 pb-9 px-6 block relative hover:bg-slate-800"
							to="/ministries"
							>Ministerios
							<svg
								class="fill-current w-4 h-4 arrow"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
							>
								<path
									d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
								/>
							</svg>
						</nuxt-link>
						<ul>
							<li>
								<nuxt-link to="/ministries/proclamation"
									>Proclamación</nuxt-link
								>
							</li>
							<li>
								<nuxt-link to="/ministries/teaching">Enseñanza</nuxt-link>
							</li>
							<li><nuxt-link to="/ministries/service">Servicio</nuxt-link></li>
							<li>
								<nuxt-link to="/ministries/fellowship">Compañerismo</nuxt-link>
							</li>
							<li><nuxt-link to="/ministries/worship">Adoración</nuxt-link></li>
						</ul>
					</li>
					<li>
						<nuxt-link
							class="pt-10 pb-9 px-6 block relative hover:bg-slate-800"
							to="/resources"
							>Recursos
							<svg
								class="fill-current w-4 h-4 arrow"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
							>
								<path
									d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
								/>
							</svg>
						</nuxt-link>
						<ul>
							<li>
								<nuxt-link to="/resources/prayer">Pedir oración</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/resources/materials">Materiales</nuxt-link>
							</li>
						</ul>
					</li>
					<li>
						<nuxt-link
							class="pt-10 pb-9 px-6 block relative hover:bg-slate-800"
							to="/contact"
							>Contáctanos
						</nuxt-link>
					</li>
					<li>
						<nuxt-link
							class="pt-10 pb-9 px-6 block relative hover:bg-slate-800"
							to="/faq"
							>FAQ
						</nuxt-link>
					</li>
					<li>
						<nuxt-link
							class="pt-10 pb-9 px-6 block relative hover:bg-slate-800"
							to="/give"
							>Dar
						</nuxt-link>
					</li>
				</ul>
			</nav>
			<div class="w-14 flex flex-col items-end">
				<button
					v-if="langEs"
					class="text-xs hover:text-amber-400"
					@click="doLangEs(false)"
				>
					English
				</button>
				<button
					v-else
					class="text-xs hover:text-amber-400"
					@click="doLangEs(true)"
				>
					Español
				</button>
			</div>
		</div>
	</header>
</template>

<script setup>
	const langEs = ref(true);
	let isLangEs = true;
	let isLangEn = false;

	const doLangEs = e => {
		langEs.value = e;
		isLangEs = !isLangEs;
		console.log('isLangEs:', isLangEs);
		isLangEn = !isLangEn;
		console.log('isLangEn:', isLangEn);
	};
</script>

<style scoped>
	.header {
		box-shadow: 0 5px 10px #0000004d;
	}
	.navbar {
		display: grid;
		grid-template-columns: 4fr 8fr;
		align-items: center;
	}
	.font-15 {
		font-size: 15px;
	}
	.navbar ul li {
		position: relative;
	}
	.navbar ul li a .arrow {
		display: inline;
		position: absolute;
		bottom: 41px;
		padding-left: 5px;
	}
	.navbar ul li::after {
		content: '';
		width: 0;
		height: 2px;
		position: absolute;
		bottom: 34px;
		left: 50%;
		transform: translateX(-50%);
		background-color: rgb(251, 191, 36);
		transition: width 0.3s;
	}
	.navbar ul li:hover::after {
		width: 40%;
	}
	.navbar ul li ul {
		position: absolute;
		left: 0;
		width: 180px;
		background-color: rgb(12 74 110);
		flex-direction: column;
		display: none;
		text-align: center;
		z-index: 1;
	}
	.navbar ul li ul li {
		width: 100%;
		padding: 25px 0;
		border-top: 1px solid rgb(185, 233, 255);
	}
	.navbar ul li ul li:hover {
		background-color: rgb(30, 41, 59);
	}
	.navbar ul li ul li::after {
		bottom: 22px;
	}
	.navbar ul li:focus > ul,
	.navbar ul li:hover > ul {
		display: initial;
	}
</style>
