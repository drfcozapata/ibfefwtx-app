<template>
	<div class="w-full grid grid-cols-1 bg-gray-50 ministries">
		<div
			class="w-11/12 mx-auto pl-10 mb-8 flex flex-col justify-start ministries__border"
		>
			<h2 id="teaching">
				{{ lang.spaOrEngLng ? 'Enseñanza' : 'Teaching' }}
			</h2>
			<div v-if="lang.spaOrEngLng === true" class="mb-8 spanish">
				<p>
					Tenemos la responsabilidad de capacitar a nuestras familias para
					personificar el modelo de enseñanza de Jesús. Para ello, aspiramos a
					hacer de nuestra iglesia un centro de entrenamiento para servir a Fort
					Worth, Texas, los Estados Unidos y el mundo.
				</p>
				<p>
					También deseamos que niños, adolescentes, jóvenes y adultos puedan
					recibir enseñanzas relevantes que les den herramientas para enfrentar
					los acontecimientos actuales por medio de programas sistemáticos de
					educación bíblica.
				</p>
				<p>
					Es crucial en nuestros días que la enseñanza motive a las personas a
					buscar el próximo paso, haciéndose la pregunta “¿qué debo hacer ahora
					con esto?”. Por esta razón cada mensaje guía al que escucha a la
					acción.
				</p>
				<p>
					Algo que nos gusta recordar es que “solo podemos ver el efecto de la
					Biblia en nuestra vidas cuando aplicamos lo que escuchamos”.
				</p>
			</div>
			<div v-else class="mb-8 english">
				<p>
					We have a responsibility to train our families to embody the teaching
					model of Jesus. To that end, we aspire to make our church a training
					center to serve Fort Worth, Texas, the United States and the world.
				</p>
				<p>
					We also desire that children, teenagers, youth and adults can receive
					relevant teachings that will give them tools to face current events
					through systematic Bible education programs.
				</p>
				<p>
					It is crucial in our day that teaching motivates people to seek the
					next step, asking the question "what should I do now with this?". For
					this reason every message guides the listener to action.
				</p>
				<p>
					One thing we like to remember is that "we can only see the effect of
					the Bible in our lives when we apply what we hear".
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped>
	.ministries .ministries__border {
		border-left: 20px solid #2dd4bf;
	}
</style>
