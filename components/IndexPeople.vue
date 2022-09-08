<template>
	<div class="w-full people">
		<img
			class="w-full h-full object-cover"
			src="../assets/images/ibfe-01.jpg"
			alt="La gente de nuestar iglesia"
		/>
		<div class="bg-sky-700 text-slate-100 flex flex-col justify-center">
			<h3 class="text-3xl font-medium uppercase mb-6">
				{{
					lang.spaOrEngLng
						? 'Estamos comprometidos con la causa y los unos a los otros'
						: 'We are committed to the cause and to each other'
				}}
			</h3>
			<p class="text-xl mb-10">
				{{
					lang.spaOrEngLng
						? 'Jesús nos envía a hacer discípulos, en todas las naciones. Por esto deseamos que cada persona pueda escuchar la voz De Dios, involucrándose en un proceso de transformación y aprenda a compartir lo que aprende.'
						: 'Jesus sends us to make disciples in all nations. This is why we want each person to be able to hear the voice of God, engage in a process of transformation and learn to share what they learn.'
				}}
			</p>
			<nuxt-link to="/ministries" class="hover:bg-light-50 hover:text-dark-800">
				<button>{{ lang.spaOrEngLng ? 'Aprender más' : 'Learn more' }}</button>
			</nuxt-link>
		</div>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped>
	.people {
		height: 630px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	.people > div {
		padding: 112px;
	}
	@media screen and (max-width: 992px) {
		.people {
			grid-template-columns: 5fr 7fr;
		}
		.people > div {
			padding: 90px;
		}
	}
	@media screen and (max-width: 768px) {
		.people {
			height: 648px;
			display: flex;
			flex-direction: column;
		}
		.people > img {
			height: 300px;
			object-position: bottom;
		}
		.people > div {
			padding: 50px;
		}
		.people h3 {
			font-size: 26px;
		}
		.people p {
			font-size: 18px;
		}
	}
	@media screen and (max-width: 576px) {
		.people {
			height: 630px;
		}
		.people > img {
			height: 280px;
		}
		.people > div {
			padding: 40px;
		}
		.people h3 {
			font-size: 22px;
		}
		.people p {
			font-size: 16px;
			margin-bottom: 30px;
		}
	}
	@media screen and (max-width: 480px) {
		.people {
			height: 648px;
		}
		.people > img {
			height: 270px;
		}
		.people > div {
			padding: 30px;
		}
		.people h3 {
			font-size: 22px;
		}
		.people p {
			font-size: 16px;
			margin-bottom: 30px;
		}
	}

	/* From uiverse.io by @nikk7007 */
	button {
		padding: 1.25rem 2rem;
		border: 2px solid #f3f4f6;
		position: relative;
		overflow: hidden;
		background-color: transparent;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 600;
		font-size: 13px;
		transition: 0.3s;
		z-index: 1;
		font-family: inherit;
		color: #f3f4f6;
	}
	button::before {
		content: '';
		width: 0;
		height: 300%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		background: #f3f4f6;
		transition: 0.5s ease;
		display: block;
		z-index: -1;
	}
	button:hover::before {
		width: 105%;
	}
	button:hover {
		color: #111;
	}
</style>
