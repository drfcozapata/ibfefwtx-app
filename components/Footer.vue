<template>
	<footer class="w-full block bg-sky-900 text-slate-50">
		<div class="footer">
			<div class="flex flex-col justify-center font-15 footer__left">
				<nuxt-link
					class="w-36 py-3 uppercase hover:text-amber-400"
					to="/about/our-church"
					>{{ lang.spaOrEngLng ? 'Nosotros' : 'About Us' }}
				</nuxt-link>
				<nuxt-link
					class="w-36 py-3 uppercase hover:text-amber-400"
					to="/ministries"
					>{{ lang.spaOrEngLng ? 'Ministerios' : 'Ministries' }}
				</nuxt-link>
				<nuxt-link
					class="w-36 py-3 uppercase hover:text-amber-400"
					to="/contact"
					>{{ lang.spaOrEngLng ? 'Conectarme' : 'Connect Me' }}
				</nuxt-link>
				<nuxt-link
					class="w-36 py-3 uppercase hover:text-amber-400"
					to="/resources"
					>{{ lang.spaOrEngLng ? 'Recursos' : 'Resources' }}</nuxt-link
				>
			</div>
			<div class="flex flex-col justify-center items-center footer__mid">
				<nuxt-link to="/">
					<img
						class="w-32 h-32 mb-6"
						src="../assets/images/ibfe-w.svg"
						alt="Logo I.B. Fe"
					/>
				</nuxt-link>
				<div>
					<p class="text-xs">
						<span
							>&copy; {{ new Date().getFullYear() }} Iglesia Bautista Fe
							&nbsp;&nbsp; | &nbsp;&nbsp; Developed by Doulos Dev</span
						>
					</p>
				</div>
			</div>
			<div class="flex flex-col gap-5 justify-center items-end footer__rigth">
				<nuxt-link
					class="hover:text-amber-400"
					href="https://facebook.com/ibfefwtx/"
					target="_blank"
				>
					<i class="fa-brands fa-square-facebook"></i>
				</nuxt-link>
				<nuxt-link
					class="hover:text-amber-400"
					href="https://instagram.com/ibfefwtx/"
					target="_blank"
				>
					<i class="fa-brands fa-square-instagram"></i>
				</nuxt-link>
				<nuxt-link
					class="hover:text-amber-400"
					href="https://twitter.com/ibfefwtx"
					target="_blank"
				>
					<i class="fa-brands fa-square-twitter"></i>
				</nuxt-link>
			</div>
		</div>
	</footer>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped>
	.font-15 {
		font-size: 15px;
	}
	.footer__left {
		grid-area: a;
	}
	.footer__mid {
		grid-area: b;
	}
	.footer__rigth {
		grid-area: c;
	}
	.footer {
		width: 83.33%;
		padding: 44px 0;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		justify-content: space-between;
		align-content: center;
		grid-template-areas: 'a a b b b b b b b b c c';
	}
	i {
		font-size: 40px;
	}
	@media screen and (max-width: 480px) {
		.footer {
			width: 96%;
			grid-template-columns: repeat(4, 1fr);
			grid-template-areas:
				'a a c c'
				'b b b b';
		}
		.footer__left {
			padding-left: 24px;
		}
		.footer__rigth {
			padding-right: 24px;
		}
		.footer__mid {
			padding-top: 44px;
		}
	}
</style>
