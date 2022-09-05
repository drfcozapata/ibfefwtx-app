<template>
	<div class="w-full grid grid-cols-1 bg-gray-50 resources">
		<div class="w-10/12 mx-auto mb-8 flex flex-col justify-start">
			<h1>
				{{
					lang.spaOrEngLng
						? 'Mensajes en Audio y Video'
						: 'Audio & Video Messages'
				}}
			</h1>
			<div class="cards flex flex-wrap justify-between pb-10">
				<AudioVideoMessages
					@add="showModal = true"
					v-for="message in messages"
					:key="message.id"
				>
					<template #image>
						<img :src="`../${message.img}.jpg`" alt="Imagen del video" />
					</template>
					<template #title>{{
						lang.spaOrEngLng ? message.titleEs : message.titleEn
					}}</template>
					<template #video>{{ (showVideo = message.video) }} </template>
					<template #speaker>{{ message.speaker }}</template>
					<template #date>{{
						lang.spaOrEngLng ? message.dateEs : message.dateEn
					}}</template>
					<template #description>{{
						lang.spaOrEngLng ? message.descriptionEs : message.descriptionEn
					}}</template>
				</AudioVideoMessages>

				<!-- Video Modal -->
				<ModalVideoPlayer
					:show="showModal"
					:video="showVideo"
					@close="showModal = false"
				>
					<template #main>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/hqENO99n1ig"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</template>
				</ModalVideoPlayer>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { reactive, ref } from 'vue';
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
	const messages = reactive([
		{
			id: 1,
			img: 'audio-video-08',
			titleEs: 'Sabiduría para Tiempos Difíciles',
			titleEn: 'Wisdom for Difficult Times',
			speaker: 'Charles Stanley',
			dateEs: '17 de Julio, 2022',
			dateEn: 'July 17, 2022',
			video: '',
			audio: '',
			descriptionEs:
				'Unde veniam corporis soluta dolorem sapiente commodi ex fuga laborum cumque quia itaque, labore magnam dolor at.',
			descriptionEn:
				'Fugiat tempore, dolorem necessitatibus velit optio distinctio ipsum ea quas mollitia dolore suscipit, beatae itaque.',
		},
		{
			id: 2,
			img: 'audio-video-07',
			titleEs: 'Renovarse... Otra Vez',
			titleEn: 'Renew yourself... Again',
			speaker: 'Dante Gebel',
			dateEs: '24 de Julio, 2022',
			dateEn: 'July 24, 2022',
			video: 'https://www.youtube.com/embed/RtddIDmnTlw',
			audio: '',
			descriptionEs:
				'Et adipisci earum alias, laborum modi ullam esse impedit sint quaerat nostrum ut velit incidunt maxime debitis ex.',
			descriptionEn:
				'Alias cumque ipsam quis repellat et porro dolore ut nostrum soluta. Dolor harum itaque quae beatae doloremque provident.',
		},
		{
			id: 3,
			img: 'audio-video-09',
			titleEs: 'La Vida es Corta',
			titleEn: 'Life is Short',
			speaker: 'Billy Graham',
			dateEs: '31 de Julio, 2022',
			dateEn: 'July 31, 2022',
			video: 'https://www.youtube.com/embed/HhBNGdS5Kqk',
			audio: '',
			descriptionEs:
				'Laboriosam saepe quae dolor labore autem pariatur magnam quos. Voluptas minima deserunt esse, asperiores consectetur nulla?',
			descriptionEn:
				'Non beatae tenetur quod maiores fugiat? Aliquam nemo maxime doloribus odio ratione expedita reprehenderit at placeat!',
		},
		{
			id: 4,
			img: 'ibfe-videos',
			titleEs: 'Leyendo la Palabra de Dios',
			titleEn: 'Reading the God’s Word',
			speaker: 'David Escalona',
			dateEs: '7 de Agosto, 2022',
			dateEn: 'August 7, 2022',
			video: '',
			audio: '',
			descriptionEs:
				'Quas voluptatibus cum temporibus, repellat tempore eius pariatur numquam explicabo facilis officia, vel error.',
			descriptionEn:
				'Et adipisci earum alias, laborum modi ullam esse impedit sint quaerat nostrum ut velit incidunt maxime debitis ex.',
		},
		{
			id: 5,
			img: 'audio-video-04',
			titleEs: '¿Cambia Dios de opinión alguna vez?',
			titleEn: 'Does God Ever Change His Mind?',
			speaker: 'Boanerges Jr. De Armas',
			dateEs: '14 de Agosto, 2022',
			dateEn: 'August 14, 2022',
			video: '',
			audio: '',
			descriptionEs:
				'Alias cumque ipsam quis repellat et porro dolore ut nostrum soluta. Dolor harum itaque quae beatae doloremque provident.',
			descriptionEn:
				'Minima, sunt dolore ipsa aliquam cumque eaque dolores doloremque maxime modi mollitia vel ad dolor dolorem laborum.',
		},
		{
			id: 6,
			img: 'audio-video-01',
			titleEs: '5 Pasos para el Perdón',
			titleEn: '5 Steps to Forgiveness',
			speaker: 'Suely Escalona',
			dateEs: '21 de Agosto, 2022',
			dateEn: 'August 21, 2022',
			video: '',
			audio: '',
			descriptionEs:
				'Fugiat tempore, dolorem necessitatibus velit optio distinctio ipsum ea quas mollitia dolore suscipit, beatae itaque.',
			descriptionEn:
				'Laboriosam saepe quae dolor labore autem pariatur magnam quos. Voluptas minima deserunt esse, asperiores consectetur nulla?',
		},
		{
			id: 7,
			img: 'audio-video-06',
			titleEs: 'La Prueba de Nuestra Fe',
			titleEn: 'The Testing of Our Faith',
			speaker: 'David Escalona',
			dateEs: '28 de Agosto, 2022',
			dateEn: 'August 28, 2022',
			video: '',
			audio: '',
			descriptionEs:
				'Non beatae tenetur quod maiores fugiat? Aliquam nemo maxime doloribus odio ratione expedita reprehenderit at placeat!',
			descriptionEn:
				'Quas voluptatibus cum temporibus, repellat tempore eius pariatur numquam explicabo facilis officia, vel error.',
		},
	]);

	let showModal = ref(false);
</script>

<style scoped>
	.resources {
		min-height: 790px;
		font-family: 'Montserrat', sans serif;
	}
	.resources h1 {
		font-family: 'Poppins', sans serif;
		font-size: 40px;
		line-height: 40px;
		font-weight: 500;
		margin: 90px 0 60px 0;
	}
	@media screen and (max-width: 992px) {
		.resources > div {
			padding: 0 40px;
		}
		.resources h1 {
			font-size: 38px;
			line-height: 38px;
			margin-bottom: 54px;
		}
	}
	@media screen and (max-width: 768px) {
		.resources > div {
			padding: 0 20px;
		}
		.resources h1 {
			font-size: 34px;
			line-height: 34px;
			margin-bottom: 48px;
		}
		.wrap {
			flex-wrap: wrap;
			gap: 12px;
		}
	}
	@media screen and (max-width: 576px) {
		.resources {
			min-height: 860px;
		}
		.resources > div {
			width: 90%;
			padding: 0 6px;
		}
		.resources h1 {
			font-size: 30px;
			line-height: 30px;
			margin-bottom: 42px;
		}
		.resources p,
		label,
		input {
			font-size: 14px;
		}
	}
</style>
