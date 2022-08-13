<template>
	<footer class="w-full block bg-sky-900 text-slate-50">
		<div class="footer">
			<div class="flex flex-col justify-center font-15 footer__left">
				<nuxt-link
					class="w-36 py-3 uppercase hover:text-amber-400"
					to="/about/our-church"
					>Nosotros
				</nuxt-link>
				<nuxt-link
					class="w-36 py-3 uppercase hover:text-amber-400"
					to="/ministries"
					>Ministerios
				</nuxt-link>
				<nuxt-link
					class="w-36 py-3 uppercase hover:text-amber-400"
					to="/resources"
					>Conectarme
				</nuxt-link>
				<nuxt-link
					class="w-36 py-3 uppercase hover:text-amber-400"
					to="/contact"
					>Recursos</nuxt-link
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
					<svg
						class="w-9 h-9 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
						/>
					</svg>
				</nuxt-link>
				<nuxt-link
					class="hover:text-amber-400"
					href="https://instagram.com/ibfefwtx/"
					target="_blank"
				>
					<svg
						class="w-9 h-9 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
						/>
					</svg>
				</nuxt-link>
				<nuxt-link
					class="hover:text-amber-400"
					href="https://twitter.com/ibfefwtx"
					target="_blank"
				>
					<svg
						class="w-9 h-9 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
						/>
					</svg>
				</nuxt-link>
			</div>
		</div>
	</footer>
</template>

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
