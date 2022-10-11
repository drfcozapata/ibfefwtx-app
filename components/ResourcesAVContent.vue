<template>
	<div class="w-full grid grid-cols-1 bg-gray-50 resources">
		<div class="w-10/12 mx-auto mb-8 flex flex-col justify-start">
			<h1>
				{{ lang.spaOrEngLng ? 'Mensajes en Audio y Video' : 'Audio & Video Messages' }}
			</h1>
			<div class="cards flex flex-wrap justify-between pb-10">
				<div class="card">
					<div class="card-img">
						<img src="../public/productividad.jpg" alt="Imagen del video" />
					</div>
					<div class="card-icons">
						<nuxt-link to="https://www.youtube.com/watch?v=hMNazSmidag" target="_blank">
							<i
								class="fa-regular fa-circle-play"
								:title="lang.spaOrEngLng ? 'Ver video' : 'Watch video'"
							>
							</i>
						</nuxt-link>
						<i
							class="fa-solid fa-headphones"
							:title="lang.spaOrEngLng ? 'Escuchar audio' : 'Listen audio'"
						></i>
						<!-- <i
							class="fa-regular fa-circle-down"
							:title="lang.spaOrEngLng ? 'Descargar' : 'Download'"
						></i> -->
					</div>
					<div class="card-content">
						<h3>{{ lang.spaOrEngLng ? 'Productividad 1' : 'Productivity 1' }}</h3>
						<p>
							<span>{{ lang.spaOrEngLng ? 'Predicador' : 'Speaker' }}:</span>
							David Escalona
						</p>
						<p>
							<span>{{ lang.spaOrEngLng ? 'Fecha' : 'Date' }}:</span>
							{{ lang.spaOrEngLng ? '7 de Agosto, 2022' : 'August 7, 2022' }}
						</p>
						<p>
							<span>{{ lang.spaOrEngLng ? 'Descripción' : 'Description' }}:</span>
							{{
								lang.spaOrEngLng
									? 'Lo que haces con lo que escuchas o lees de la Biblia influirá en gran manera en la productividad en tu vida. La semilla junto al camino, representa a personas que no prestan ninguna atención a lo que la Biblia dice; estas son personas improductivas.'
									: 'What you do with what you hear or read from the Bible will greatly influence the productivity in your life. The seed by the roadside represents people who pay no attention to what the Bible says; these are unproductive people.'
							}}
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card-img">
						<img src="../public/productividad.jpg" alt="Imagen del video" />
					</div>
					<div class="card-icons">
						<nuxt-link to="https://www.youtube.com/watch?v=n7MXrnNExgI" target="_blank">
							<i
								class="fa-regular fa-circle-play"
								:title="lang.spaOrEngLng ? 'Ver video' : 'Watch video'"
							>
							</i>
						</nuxt-link>
						<i
							class="fa-solid fa-headphones"
							:title="lang.spaOrEngLng ? 'Escuchar audio' : 'Listen audio'"
						></i>
						<!-- <i
							class="fa-regular fa-circle-down"
							:title="lang.spaOrEngLng ? 'Descargar' : 'Download'"
						></i> -->
					</div>
					<div class="card-content">
						<h3>{{ lang.spaOrEngLng ? 'Productividad 2' : 'Productivity 2' }}</h3>
						<p>
							<span>{{ lang.spaOrEngLng ? 'Predicador' : 'Speaker' }}:</span>
							David Escalona
						</p>
						<p>
							<span>{{ lang.spaOrEngLng ? 'Fecha' : 'Date' }}:</span>
							{{ lang.spaOrEngLng ? '14 de Agosto, 2022' : 'August 14, 2022' }}
						</p>
						<p>
							<span>{{ lang.spaOrEngLng ? 'Descripción' : 'Description' }}:</span>
							{{
								lang.spaOrEngLng
									? 'La semilla que cayó en las piedras, representa a personas que oyen y podrían emocionarse por un poco de tiempo pero no buscan profundizar en conocer más de Dios y su palabra, así que la emoción se va y por falta de profundidad no es productivo.'
									: 'The seed that fell on the stones, represents people who hear and might get excited for a little while but do not seek to go deeper in knowing more about God and his word, so the excitement goes away and for lack of depth it is not productive.'
							}}
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card-img">
						<img src="../public/productividad.jpg" alt="Imagen del video" />
					</div>
					<div class="card-icons">
						<nuxt-link to="https://www.youtube.com/watch?v=p_s0GF73w0I" target="_blank">
							<i
								class="fa-regular fa-circle-play"
								:title="lang.spaOrEngLng ? 'Ver video' : 'Watch video'"
							>
							</i>
						</nuxt-link>
						<i
							class="fa-solid fa-headphones"
							:title="lang.spaOrEngLng ? 'Escuchar audio' : 'Listen audio'"
						></i>
						<!-- <i
							class="fa-regular fa-circle-down"
							:title="lang.spaOrEngLng ? 'Descargar' : 'Download'"
						></i> -->
					</div>
					<div class="card-content">
						<h3>{{ lang.spaOrEngLng ? 'Productividad 3' : 'Productivity 3' }}</h3>
						<p>
							<span>{{ lang.spaOrEngLng ? 'Predicador' : 'Speaker' }}:</span>
							David Escalona
						</p>
						<p>
							<span>{{ lang.spaOrEngLng ? 'Fecha' : 'Date' }}:</span>
							{{ lang.spaOrEngLng ? '21 de Agosto, 2022' : 'August 21, 2022' }}
						</p>
						<p>
							<span>{{ lang.spaOrEngLng ? 'Descripción' : 'Description' }}:</span>
							{{
								lang.spaOrEngLng
									? 'La semilla que cayó entre espinos, representa a personas que igual que los anteriores oyen pero no escuchan con atención. Así que las preocupaciones de la vida, deseos de riquezas y deseos de placer ahogan lo poco que retuvieron; por esta razón son improductivos.'
									: 'The seed that fell among thorns represents people who, like the above, hear but do not listen carefully. So the worries of life, desires for riches and desires for pleasure choke what little they have retained; for this reason they are unproductive.'
							}}
						</p>
					</div>
				</div>

				<AudioVideoMessages
					@add="showModal = true"
					v-for="message in messages"
					:key="message.id"
				>
					<template #image>
						<img src="../public/productividad.jpg" alt="Imagen del video" />
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
				<ModalVideoPlayer :show="showModal" :video="showVideo" @close="showModal = false">
					<template #main>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/yJcxnagu7yA"
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
		// {
		// 	id: 1,
		// 	img: 'productividad',
		// 	titleEs: 'Productividad 1',
		// 	titleEn: 'Productivity 1',
		// 	speaker: 'David Escalona',
		// 	dateEs: '7 de Agosto, 2022',
		// 	dateEn: 'August 7, 2022',
		// 	video: 'https://www.youtube.com/embed/hMNazSmidag',
		// 	audio: '',
		// 	descriptionEs:
		// 		'Lo que haces con lo que escuchas o lees de la Biblia influirá en gran manera en la productividad en tu vida. La semilla junto al camino, representa a personas que no prestan ninguna atención a lo que la Biblia dice; estas son personas improductivas.',
		// 	descriptionEn:
		// 		'What you do with what you hear or read from the Bible will greatly influence the productivity in your life. The seed by the roadside represents people who pay no attention to what the Bible says; these are unproductive people.',
		// },
		// {
		// 	id: 2,
		// 	img: 'productividad',
		// 	titleEs: 'Productividad 2',
		// 	titleEn: 'Productivity 2',
		// 	speaker: 'David Escalona',
		// 	dateEs: '14 de Agosto, 2022',
		// 	dateEn: 'August 14, 2022',
		// 	video: 'https://www.youtube.com/embed/RtddIDmnTlw',
		// 	audio: '',
		// 	descriptionEs:
		// 		'La semilla que cayó en las piedras, representa a personas que oyen y podrían emocionarse por un poco de tiempo pero no buscan profundizar en conocer más de Dios y su palabra, así que la emoción se va y por falta de profundidad no es productivo.',
		// 	descriptionEn:
		// 		'The seed that fell on the stones, represents people who hear and might get excited for a little while but do not seek to go deeper in knowing more about God and his word, so the excitement goes away and for lack of depth it is not productive.',
		// },
		// {
		// 	id: 3,
		// 	img: 'productividad',
		// 	titleEs: 'Productividad 3',
		// 	titleEn: 'Productivity 3',
		// 	speaker: 'David Escalona',
		// 	dateEs: '21 de Agosto, 2022',
		// 	dateEn: 'August 21, 2022',
		// 	video: 'https://www.youtube.com/embed/p_s0GF73w0I',
		// 	audio:
		// 		'https://doc-00-bs-docs.googleusercontent.com/docs/securesc/91esn652jfh5sigieel8bsqe52nk6vim/tq9elo5o1o5sahqn5lk1ljo1efer3e32/1664798250000/05086046920343273477/08809574515513452285/1ozDyvTXyV2HKug6iJQ0uBxSFzVhFZrve?e=download&ax=ALW9-sD9UjrSIAaEmXHhj9leEOs8IcBo-jVXFTM1ALonZUpDKfcz5Xdk3QjDWluab8N9kVgbxeitudpOS0qwWeJDVZxo7FvBEcaPDxy9xrqRKzystOW71jHXtSEZvtWsrrF9Pd7dK-GAnchuStLJ8XAMKq7KVRCTlr_6gXdc6somHHbP9qxFje5dgt72h2ki3_i_HGfmpzZAv2A7tqTNjnS-i9OppSnU-3H-fv5zeL1xx_AYeP8cYQVWLGTr-6JjBwRszwmnvpDkLt1fRTMEwi1kctmYjywqbl62jblTxmRy0Nl0lo3dWL7XtWgoeEr0xE3HLol3TVbjjjw5KzBVBRpWWlAnEYAmOUy0ai6SOcbMFa7UnobrRUB02TXx9EW7aLzBfaInoZRfLrVu2YRBKdf_po0LaHUMbL5-DpmCq2p-ucxxI3kWdWTQZlGyd-HKPSy2fvjRgonEITaJVNbQLFeEMZIznsmLkDCSDIFWeQjBuTkqlrs31GZkdNoOVXFZ_DN5S-XSUyQATUqApos6a0pHD1dc1YfdctsNbTRrUrqoD-TQMeZaifl94QfE6uBESnZAzq7IqRfTAs8Lh9GhaLlYbWyrPkfkxjQa6F6tJGyyriO7XZkPX88bYlBvUVd22G7RyDxam-MUK2opQxlyXCHIHYCQ8Jk2P-nhz8BOnSMeWxVxiwC2CRoKud5GD13aaBoi88VcmmoPchDOGAC1XCR1WGcUct1SEZCIf1BrUgFlgDnqWXSiTfs8PU1ALV4ZFxCPVEVvZuFlbO5LN8rHzKgmfVLPriI9p4U_CocbQep9S7LI6Ds46vDayD89GoHbnX8i0o8MTvKA6ZFlfT9dXYaZekrZNd1sfPgnHgdpK-n5u4zzKhrj0NGEzL4iePqkpFHPqMXkO7M2e3y3xdOm2I04U9AgYT7jg04QjNTNygeD8hCzVyrd0NRBdOYZ7UM52W6ngHKgPitwlmq29tD2yVRNDUg1Ym_5Mw_Wz-10A2tf9k1TL9NTgzZHdux7U1d813fnoaLJ41MrRg&uuid=a11a7ede-ba83-41b3-a5f3-ecaaf6410ace&authuser=0',
		// 	descriptionEs:
		// 		'La semilla que cayó entre espinos, representa a personas que igual que los anteriores oyen pero no escuchan con atención. Así que las preocupaciones de la vida, deseos de riquezas y deseos de placer ahogan lo poco que retuvieron; por esta razón son improductivos.',
		// 	descriptionEn:
		// 		'The seed that fell among thorns represents people who, like the above, hear but do not listen carefully. So the worries of life, desires for riches and desires for pleasure choke what little they have retained; for this reason they are unproductive.',
		// },
		{
			id: 4,
			img: 'productividad',
			titleEs: 'Productividad 4',
			titleEn: 'Productivity 4',
			speaker: 'David Escalona',
			dateEs: '28 de Agosto, 2022',
			dateEn: 'August 28, 2022',
			video: 'https://www.youtube.com/embed/yJcxnagu7yA&',
			audio:
				'https://drive.google.com/drive/u/0/folders/1kyjR_wHUrRWOLQbCZ2ZZJ7QjXzLfLSTs',
			descriptionEs:
				'La semilla que cayó en buena tierra representa a aquel que escucha lo que Dios dice por medio de su palabra, la retiene y es constante en ponerla en práctica; estas cualidades lo llevan a vivir vidas productivas.',
			descriptionEn:
				'The seed that fell on good soil represents the one who listens to what God says through his word, retains it and is constant in putting it into practice; these qualities lead to productive lives.',
		},
		// {
		// 	id: 5,
		// 	img: 'audio-video-05',
		// 	titleEs: '¿Cambia Dios de opinión alguna vez?',
		// 	titleEn: 'Does God Ever Change His Mind?',
		// 	speaker: 'Boanerges Jr. De Armas',
		// 	dateEs: '14 de Agosto, 2022',
		// 	dateEn: 'August 14, 2022',
		// 	video: '',
		// 	audio: '',
		// 	descriptionEs:
		// 		'Alias cumque ipsam quis repellat et porro dolore ut nostrum soluta. Dolor harum itaque quae beatae doloremque provident.',
		// 	descriptionEn:
		// 		'Minima, sunt dolore ipsa aliquam cumque eaque dolores doloremque maxime modi mollitia vel ad dolor dolorem laborum.',
		// },
		// {
		// 	id: 6,
		// 	img: 'audio-video-06',
		// 	titleEs: '5 Pasos para el Perdón',
		// 	titleEn: '5 Steps to Forgiveness',
		// 	speaker: 'Suely Escalona',
		// 	dateEs: '21 de Agosto, 2022',
		// 	dateEn: 'August 21, 2022',
		// 	video: '',
		// 	audio: '',
		// 	descriptionEs:
		// 		'Fugiat tempore, dolorem necessitatibus velit optio distinctio ipsum ea quas mollitia dolore suscipit, beatae itaque.',
		// 	descriptionEn:
		// 		'Laboriosam saepe quae dolor labore autem pariatur magnam quos. Voluptas minima deserunt esse, asperiores consectetur nulla?',
		// },
		// {
		// 	id: 7,
		// 	img: 'audio-video-07',
		// 	titleEs: 'La Prueba de Nuestra Fe',
		// 	titleEn: 'The Testing of Our Faith',
		// 	speaker: 'David Escalona',
		// 	dateEs: '28 de Agosto, 2022',
		// 	dateEn: 'August 28, 2022',
		// 	video: '',
		// 	audio: '',
		// 	descriptionEs:
		// 		'Non beatae tenetur quod maiores fugiat? Aliquam nemo maxime doloribus odio ratione expedita reprehenderit at placeat!',
		// 	descriptionEn:
		// 		'Quas voluptatibus cum temporibus, repellat tempore eius pariatur numquam explicabo facilis officia, vel error.',
		// },
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
	.card {
		min-width: 250px;
		max-width: 320px;
		margin-bottom: 40px;
		border-top: none;
		border-radius: 8px;
	}
	.card-img {
		width: 100%;
		height: 180px;
	}
	.card-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.card-icons {
		display: flex;
		gap: 30px;
		justify-content: center;
		padding: 15px 0 8px 0;
		border-left: 0.5px solid #e5e7eb;
		border-right: 0.5px solid #e5e7eb;
	}
	i {
		font-size: 24px;
		cursor: pointer;
		color: #71717a;
	}
	.card-content {
		min-height: 290px;
		padding: 20px;
		border: 0.5px solid #e5e7eb;
		border-radius: 0 0 12px 12px;
	}
	.card-content h3 {
		font-size: 20px;
		font-weight: 500;
		line-height: 1.3;
		color: #0284c7;
		margin-bottom: 20px;
	}
	.card-content p {
		font-size: 15px;
		line-height: 1.6;
		padding-bottom: 8px;
	}
	.card-content p:last-child {
		padding-bottom: 10px;
	}
	.card-content span {
		color: #71717a;
		font-style: italic;
		padding-right: 6px;
	}
</style>
