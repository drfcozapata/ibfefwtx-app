<template>
	<div class="w-full grid grid-cols-1 bg-gray-50 ministries">
		<div
			class="w-11/12 mx-auto mb-8 pl-10 flex flex-col justify-start ministries__border"
		>
			<h2 id="marriages">
				{{ lang.spaOrEngLng ? 'Matrimonios' : 'Marriages' }}
			</h2>
			<div v-if="lang.spaOrEngLng === true" class="mb-8 spanish">
				<p>
					Sabiendo que Dios ha establecido la familia como elemento fundamental
					de la iglesia, deseamos que nuestros matrimonios puedan tener la
					capacidad de sobrellevar las diferentes situaciones que se enfrentan a
					diario.
				</p>
				<p>
					También deseamos que nuestros matrimonios puedan convertirse en
					mentores de otros más jóvenes, propiciando buen ejemplo de cómo
					desarrollar familias saludables de acuerdo con el modelo de Dios.
				</p>
				<p>
					Para esto hemos establecido un proceso de capacitación integral
					equipando a las parejas no solamente a aprender como tener un
					matrimonio saludable sino también a poder servir de modelos o mentores
					para otros.
				</p>
			</div>
			<div v-else class="mb-8 english">
				<p>
					Knowing that God has established the family as a fundamental element
					of the church, we desire that our marriages may have the ability to
					cope with the different situations they face on a daily basis.
				</p>
				<p>
					We also desire that our couples can become mentors to younger ones,
					setting a good example of how to develop healthy families according to
					God's model.
				</p>
				<p>
					For this we have established a comprehensive training process
					equipping couples not only to learn how to have a healthy marriage but
					also to be able to serve as role models or mentors for others.
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
		border-left: 20px solid #fb923c;
	}
</style>
