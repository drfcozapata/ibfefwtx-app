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
						<nuxt-link
							to="https://drive.google.com/file/d/1QzMNTvRS6So_groFMCPmfj6zRXgR7kki/preview"
							target="_blank"
						>
							<i
								class="fa-solid fa-headphones"
								:title="lang.spaOrEngLng ? 'Descargar audio' : 'Download audio'"
							></i>
						</nuxt-link>
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
						<nuxt-link
							to="https://drive.google.com/file/d/1UuU_CJinLYye0mG4NjL7GFsjb_qhUaRp/preview"
							target="_blank"
						>
							<i
								class="fa-solid fa-headphones"
								:title="lang.spaOrEngLng ? 'Descargar audio' : 'Download audio'"
							></i>
						</nuxt-link>
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
						<nuxt-link
							to="https://drive.google.com/file/d/1ozDyvTXyV2HKug6iJQ0uBxSFzVhFZrve/preview"
							target="_blank"
						>
							<i
								class="fa-solid fa-headphones"
								:title="lang.spaOrEngLng ? 'Descargar audio' : 'Download audio'"
							></i>
						</nuxt-link>
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
				<div class="card">
					<div class="card-img">
						<img src="../public/productividad.jpg" alt="Imagen del video" />
					</div>
					<div class="card-icons">
						<nuxt-link to="https://www.youtube.com/watch?v=yJcxnagu7yA&" target="_blank">
							<i
								class="fa-regular fa-circle-play"
								:title="lang.spaOrEngLng ? 'Ver video' : 'Watch video'"
							>
							</i>
						</nuxt-link>
						<nuxt-link
							to="https://drive.google.com/file/d/1JSZyN9iCDTQbiqRlwlrIRmxwFGk86YOQ/preview"
							target="_blank"
						>
							<i
								class="fa-solid fa-headphones"
								:title="lang.spaOrEngLng ? 'Descargar audio' : 'Download audio'"
							></i>
						</nuxt-link>
					</div>
					<div class="card-content">
						<h3>{{ lang.spaOrEngLng ? 'Productividad 4' : 'Productivity 4' }}</h3>
						<p>
							<span>{{ lang.spaOrEngLng ? 'Predicador' : 'Speaker' }}:</span>
							David Escalona
						</p>
						<p>
							<span>{{ lang.spaOrEngLng ? 'Fecha' : 'Date' }}:</span>
							{{ lang.spaOrEngLng ? '28 de Agosto, 2022' : 'August 28, 2022' }}
						</p>
						<p>
							<span>{{ lang.spaOrEngLng ? 'Descripción' : 'Description' }}:</span>
							{{
								lang.spaOrEngLng
									? 'La semilla que cayó en buena tierra representa a aquel que escucha lo que Dios dice por medio de su palabra, la retiene y es constante en ponerla en práctica; estas cualidades lo llevan a vivir vidas productivas.'
									: 'The seed that fell on good soil represents the one who listens to what God says through his word, retains it and is constant in putting it into practice; these qualities lead to productive lives.'
							}}
						</p>
					</div>
				</div>

				<!-- <AudioVideoMessages
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
				</AudioVideoMessages> -->

				<!-- Video Modal -->
				<!-- <ModalVideoPlayer :show="showModal" :video="showVideo" @close="showModal = false">
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
				</ModalVideoPlayer> -->
			</div>
		</div>
	</div>
</template>

<script setup>
	// import { reactive, ref } from 'vue';
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
	// const messages = reactive([
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
	// 		'',
	// 	descriptionEs:
	// 		'La semilla que cayó entre espinos, representa a personas que igual que los anteriores oyen pero no escuchan con atención. Así que las preocupaciones de la vida, deseos de riquezas y deseos de placer ahogan lo poco que retuvieron; por esta razón son improductivos.',
	// 	descriptionEn:
	// 		'The seed that fell among thorns represents people who, like the above, hear but do not listen carefully. So the worries of life, desires for riches and desires for pleasure choke what little they have retained; for this reason they are unproductive.',
	// },
	// {
	// 	id: 4,
	// 	img: 'productividad',
	// 	titleEs: 'Productividad 4',
	// 	titleEn: 'Productivity 4',
	// 	speaker: 'David Escalona',
	// 	dateEs: '28 de Agosto, 2022',
	// 	dateEn: 'August 28, 2022',
	// 	video: 'https://www.youtube.com/embed/yJcxnagu7yA&',
	// 	audio: `<iframe
	// 		frameborder="0"
	// 		width="400"
	// 		height="200"
	// 		src="https://drive.google.com/file/d/1JSZyN9iCDTQbiqRlwlrIRmxwFGk86YOQ/preview">
	// 	</iframe>`,
	// 	descriptionEs:
	// 		'La semilla que cayó en buena tierra representa a aquel que escucha lo que Dios dice por medio de su palabra, la retiene y es constante en ponerla en práctica; estas cualidades lo llevan a vivir vidas productivas.',
	// 	descriptionEn:
	// 		'The seed that fell on good soil represents the one who listens to what God says through his word, retains it and is constant in putting it into practice; these qualities lead to productive lives.',
	// },
	// ]);

	// let showModal = ref(false);
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
