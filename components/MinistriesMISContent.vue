<template>
	<div class="w-full grid grid-cols-1 bg-gray-50 text-right ministries">
		<div
			class="w-11/12 mx-auto pr-10 mb-8 flex flex-col justify-start ministries__border"
		>
			<h2 id="missions">
				{{ lang.spaOrEngLng ? 'Misiones' : 'Missions' }}
			</h2>
			<div v-if="lang.spaOrEngLng === true" class="mb-8 spanish">
				<p>
					El ministerio de misiones de nuestra iglesia tiene como finalidad
					darle oportunidad a los creyentes de cumplir la misión encomendada por
					nuestro Señor Jesús, como dice Hechos 1:8: “pero recibiréis poder,
					cuando haya venido sobre vosotros el Espíritu Santo, y me seréis
					testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de
					la tierra”.
				</p>
				<p>
					Tenemos el compromiso de Orar, Dar e Ir. Por esta razón, ofrecemos la
					oportunidad de involucrarte en viajes misioneros locales, nacionales e
					internacionales.
				</p>
				<p>
					Entendemos que el evangelio se vive y se muestra en las calles; para
					esto animamos a cada persona en nuestra iglesia a involucrarse en
					cualquiera de las formas que ponemos a disposición.
				</p>
			</div>
			<div v-else class="mb-8 english">
				<p>
					The missions ministry of our church is intended to give believers the
					opportunity to fulfill the mission entrusted by our Lord Jesus, as
					Acts 1:8 says: "But ye shall receive power, when the Holy Ghost is
					come upon you: and ye shall be witnesses unto me both in Jerusalem,
					and in all Judaea, and in Samaria, and unto the uttermost part of the
					earth."
				</p>
				<p>
					We have a commitment to Pray, Give and Go. For this reason, we offer
					the opportunity to involve you in local, national and international
					mission trips.
				</p>
				<p>
					We understand that the gospel is lived and shown on the streets; for
					this we encourage every person in our church to get involved in any of
					the ways we make available.
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
		border-right: 20px solid #a3e635;
	}
</style>
