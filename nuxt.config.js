import { defineNuxtConfig } from 'nuxt';
import Icons from 'unplugin-icons/vite';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.js',
		exposeConfig: false,
		config: {},
		injectPosition: 0,
		viewer: true,
	},
	vite: {
		plugins: [
			Icons({
				autoInstall: true,
			}),
			{
				src: '../plugins/vue-video-background',
				ssr: false,
			},
		],
	},
	meta: {
		title: 'Iglesia Bautista Fe',
	},
	typescript: {
		shim: false,
	},
});
