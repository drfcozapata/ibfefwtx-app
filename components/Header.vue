<template>
	<header>
		<div class="header-all">
			<nav class="navbar">
				<div class="branding">
					<nuxt-link to="/">
						<img
							class="w-16 h-16"
							src="../assets/images/ibfe-w.svg"
							alt="Logo Iglesia Bautista Fe"
						/>
					</nuxt-link>
				</div>
				<div class="navigation">
					<input type="checkbox" class="toggle-menu" />
					<div class="hamburger"></div>
					<ul class="menu">
						<li>
							<nuxt-link class="block relative hover:bg-slate-800" to="/about"
								>{{ lang.spaOrEngLng ? 'Nosotros' : 'About Us' }}
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
									<nuxt-link to="/about/our-church">{{
										lang.spaOrEngLng ? '¿Qué Creemos?' : 'What Do We Believe?'
									}}</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/about/pastor">{{
										lang.spaOrEngLng ? 'Conoce al Pastor' : 'Meet the Pastor'
									}}</nuxt-link>
								</li>
							</ul>
						</li>
						<li>
							<nuxt-link
								class="block relative hover:bg-slate-800"
								to="/ministries"
								>{{ lang.spaOrEngLng ? 'Ministerios' : 'Ministries' }}
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
									<nuxt-link to="/ministries/teaching">{{
										lang.spaOrEngLng ? 'Enseñanza' : 'Teaching'
									}}</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/ministries/missions">{{
										lang.spaOrEngLng ? 'Misiones' : 'Misions'
									}}</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/ministries/marriages">{{
										lang.spaOrEngLng ? 'Matrimonios' : 'Marriages'
									}}</nuxt-link>
								</li>
							</ul>
						</li>
						<li>
							<nuxt-link class="block hover:bg-slate-800" to="/contact"
								>{{ lang.spaOrEngLng ? 'Conectarme' : 'Connect Me' }}
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
									<nuxt-link to="/contact/what-to-expect">{{
										lang.spaOrEngLng ? '¿Qué esperar?' : 'What to Expect?'
									}}</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/contact#first-steps">{{
										lang.spaOrEngLng ? 'Primeros Pasos' : 'First Steps'
									}}</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/contact#how-to-get-involved">{{
										lang.spaOrEngLng
											? '¿Cómo involucrarme?'
											: 'How to Get Involved?'
									}}</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/contact/serve-you">{{
										lang.spaOrEngLng
											? '¿Cómo podemos servirte?'
											: 'How Can We Serve You?'
									}}</nuxt-link>
								</li>
							</ul>
						</li>
						<li>
							<nuxt-link class="block relative hover:bg-slate-800">
								{{ lang.spaOrEngLng ? 'Recursos' : 'Resources' }}
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
									<nuxt-link to="/resources">{{
										lang.spaOrEngLng
											? 'Calendario de Eventos'
											: 'Events Calendar'
									}}</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/resources/audio-video">{{
										lang.spaOrEngLng
											? 'Mensajes Audio / Video'
											: 'Audio & Video Messages'
									}}</nuxt-link>
								</li>
							</ul>
						</li>
					</ul>
					<div class="dropdown-menu">
						<h3>
							<nuxt-link to="/about">{{
								lang.spaOrEngLng ? 'Nosotros' : 'About Us'
							}}</nuxt-link>
						</h3>
						<p>
							<nuxt-link to="/about/our-church">{{
								lang.spaOrEngLng ? '¿Qué Creemos?' : 'What Do We Believe?'
							}}</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/about/pastor">{{
								lang.spaOrEngLng ? 'Conoce al Pastor' : 'Meet the Pastor'
							}}</nuxt-link>
						</p>
						<h3>
							<nuxt-link to="/ministries">{{
								lang.spaOrEngLng ? 'Ministerios' : 'Ministries'
							}}</nuxt-link>
						</h3>
						<p>
							<nuxt-link to="/ministries/teaching">{{
								lang.spaOrEngLng ? 'Enseñanza' : 'Teaching'
							}}</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/ministries/missions">{{
								lang.spaOrEngLng ? 'Misiones' : 'Missions'
							}}</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/ministries/marriages">{{
								lang.spaOrEngLng ? 'Matrimonios' : 'Marriages'
							}}</nuxt-link>
						</p>
						<h3>
							<nuxt-link to="/contact">{{
								lang.spaOrEngLng ? 'Conectarme' : 'Connect Me'
							}}</nuxt-link>
						</h3>
						<p>
							<nuxt-link to="/contact/what-to-expect">{{
								lang.spaOrEngLng ? '¿Qué esperar?' : 'What to Expect?'
							}}</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/contact#first-steps">{{
								lang.spaOrEngLng ? 'Primeros Pasos' : 'First Steps'
							}}</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/contact#how-to-get-involved">{{
								lang.spaOrEngLng
									? '¿Cómo Involucrarme?'
									: 'How to Get Involved?'
							}}</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/contact/serve-you">{{
								lang.spaOrEngLng
									? '¿Cómo Podemos Servirte?'
									: 'How Can We Serve You?'
							}}</nuxt-link>
						</p>
						<h3>
							<nuxt-link to="/resources">{{
								lang.spaOrEngLng ? 'Recursos' : 'Resources'
							}}</nuxt-link>
						</h3>
						<p>
							<nuxt-link to="/resources">{{
								lang.spaOrEngLng ? 'Calendario de Eventos' : 'Events Calendar'
							}}</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/resources/audio-video">{{
								lang.spaOrEngLng
									? 'Mensajes Audio / Video'
									: 'Audio & Video Messages'
							}}</nuxt-link>
						</p>
					</div>
				</div>
			</nav>
			<div class="flex items-center justify-center language mr-1">
				<button
					v-if="lang.spaOrEngLng"
					class="w-8 h-8 text-xs hover:text-amber-400"
					@click="lang.setLangEs"
				>
					English
					<!-- <abbr :title="lang.spaOrEngAlt">
						<Usa />
					</abbr> -->
				</button>
				<button
					v-else
					class="w-8 h-8 text-xs hover:text-amber-400"
					@click="lang.setLangEs"
				>
					Español
					<!-- <abbr :title="lang.spaOrEngAlt">
						<Mexico />
					</abbr> -->
				</button>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped>
	header {
		background-color: rgb(12, 74, 110);
		z-index: 99;
		width: 100%;
		position: fixed;
		transition: 0.5s ease all;
		color: rgb(248, 250, 252);
		box-shadow: 0 5px 10px #0000004d;
	}
	.header-all {
		width: 84%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	@media (max-width: 992px) {
		.header-all {
			width: 88%;
		}
	}
	@media (max-width: 768px) {
		.header-all {
			width: 92%;
		}
	}
	@media (max-width: 576px) {
		.header-all {
			width: 96%;
		}
	}
	nav {
		position: relative;
		flex-direction: row;
		display: flex;
		justify-content: space-between;
		height: 96px;
		transition: 0.5s ease all;
		width: 94%;
	}
	@media (max-width: 992px) {
		nav {
			width: 90%;
		}
	}
	.branding {
		display: flex;
		align-items: center;
	}
	.branding img {
		transition: 0.5s ease all;
	}
	.navigation {
		display: flex;
		align-items: center;
	}
	.menu {
		display: flex;
		align-items: center;
		flex: 1;
		justify-content: flex-end;
	}
	.navbar ul li {
		font-size: 15px;
		text-transform: uppercase;
		position: relative;
	}
	.navbar ul li a {
		padding: 38px 28px;
		transition: 0.5s ease all;
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
	@media screen and (max-width: 1024px) {
		.navbar ul li a {
			padding: 38px 22px;
		}
	}
	.navbar ul li ul {
		position: absolute;
		left: 0;
		width: 260px;
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
	.hamburger {
		position: relative;
		width: 30px;
		height: 4px;
		background-color: rgb(248, 250, 252);
		border-radius: 10px;
		cursor: pointer;
		z-index: 2;
		transition: 0.3s;
	}
	.hamburger::before,
	.hamburger::after {
		content: '';
		position: absolute;
		width: 30px;
		height: 4px;
		right: 0;
		background-color: rgb(248, 250, 252);
		border-radius: 10px;
		transition: 0.3s;
	}
	.hamburger::before {
		top: -10px;
	}
	.hamburger::after {
		top: 10px;
	}
	.toggle-menu {
		position: absolute;
		width: 30px;
		height: 100%;
		z-index: 3;
		cursor: pointer;
		opacity: 0;
	}
	.hamburger,
	.toggle-menu,
	.dropdown-menu {
		display: none;
	}
	.navigation input:checked ~ .hamburger {
		background-color: transparent;
	}
	.navigation input:checked ~ .hamburger::before {
		top: 0;
		transform: rotate(-45deg);
	}
	.navigation input:checked ~ .hamburger::after {
		top: 0;
		transform: rotate(45deg);
	}
	.navigation input:checked ~ .dropdown-menu {
		right: 0;
		box-shadow: -6px 0 10px rgba(0, 0, 0, 0.2);
	}
	@media screen and (max-width: 992px) {
		.hamburger,
		.toggle-menu {
			display: block;
		}
		.menu {
			display: none;
		}
		.dropdown-menu {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			position: fixed;
			background-color: rgb(248, 250, 252);
			color: rgb(12 74 110);
			top: 96px;
			right: -300px;
			width: 100%;
			max-width: 300px;
			height: 100%;
			transition: 0.5s ease-in-out all;
			overflow-y: scroll;
		}
		.dropdown-menu h3 {
			padding: 15px 0 0 30px;
			line-height: 2;
			text-transform: uppercase;
			font-weight: 500;
			color: rgb(31, 41, 55);
		}
		.dropdown-menu h3:first-of-type {
			padding: 30px 0 0 30px;
		}
		.dropdown-menu p {
			width: 100%;
			padding: 5px 0 5px 60px;
			line-height: 1;
			text-transform: none;
		}
	}
	@media screen and (max-width: 576px) {
		.hamburger,
		.toggle-menu {
			margin-right: 12px;
		}
		.dropdown-menu {
			max-width: 250px;
		}
		.dropdown-menu h3 {
			padding: 15px 0 0 25px;
		}
		.dropdown-menu h3:first-of-type {
			padding: 30px 0 0 25px;
		}
		.dropdown-menu p {
			padding: 5px 0 5px 40px;
		}
		.language button {
			font-size: 10px;
		}
	}
</style>
