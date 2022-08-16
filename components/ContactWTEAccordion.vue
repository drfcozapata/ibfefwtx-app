<template>
	<div class="border-1 p-2 mt-2 mb-14">
		<Accordion
			titleEs="¿Qué tipo de personas asisten a Fe?"
			titleEn="What kind of people attend Fe?"
		>
			<p class="leading-8">
				{{
					lang.spaOrEngLng
						? 'Somos una iglesia multicultural, en algunos aspectos bilingües y multigeneracional, mayormente conformada por familias que incluye además grupos de solteros, viudos, divorciados, jóvenes y niños.'
						: 'We are a multicultural church, in some aspects bilingual and multigenerational, mostly made up of families that also includes groups of singles, widowed, divorced, youth and children.'
				}}
			</p>
		</Accordion>
		<Accordion titleEs="¿Cómo debo vestir?" titleEn="How should I dress?">
			<p>
				{{
					lang.spaOrEngLng
						? 'Algunas personas visten de manera casual y otros vienen muy elegantes, pero eres libre de venir de la manera que te sientas más cómodo, tal cual como eres.'
						: 'Some people dress casually and others dress very elegantly, but you are free to come in whatever way you feel most comfortable, just the way you are.'
				}}
			</p>
		</Accordion>
		<Accordion
			titleEs="¿Cómo son nuestras actividades?"
			titleEn="How are our activities?"
		>
			<p>
				{{
					lang.spaOrEngLng
						? 'Frecuentemente, nuestras actividades comienzan con un tiempo de cánticos variados; seguido a esto, un mensaje práctico por parte de nuestro pastor o algún invitado especial motivándonos a la aplicación de los principios y animándonos a mejorar aquellos aspectos de la vida que necesitamos perfeccionar. Este tiempo es de aproximadamente una hora. Posterior a esto tenemos nuestro tiempo de grupos pequeños donde cada uno, de acuerdo con su edad, se reúne para profundizar en temas específicos.'
						: 'Often, our activities begin with a time of various songs, followed by a practical message from our pastor or a special guest motivating us to apply the principles and encouraging us to improve those aspects of life that we need to perfect. This time is approximately one hour. After this we have our small group time where everyone, according to their age, meets to go deeper into specific topics.'
				}}
			</p>
		</Accordion>
		<Accordion
			titleEs="¿Hay actividades para niños y jóvenes?"
			titleEn="Are there activities for children and youth?"
		>
			<p>
				{{
					lang.spaOrEngLng
						? 'Tenemos un programa para cada grupo de edades y personas entrenadas para servir a nuestros niños, adolescentes y jóvenes. Todos ellos han pasado un proceso de entrenamiento el cual incluye un background check.'
						: 'We have a program for each age group and people trained to serve our children, teens and young adults. All of them have passed a training process which includes a background check.'
				}}
			</p>
		</Accordion>
		<Accordion titleEs="¿Dónde nos reunimos?" titleEn="Where do we meet?">
			<p>
				{{
					lang.spaOrEngLng
						? `Las actividades se desarrollan en el local de nuestra iglesia ubicado en: \n2813 Sappington Pl. Fort Worth, Texas, 76116`
						: `Activities take place at our church premises located at: \n2813 Sappington Pl. Fort Worth, Texas, 76116.`
				}}
			</p>
		</Accordion>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';
	import { Accordion } from '../.nuxt/components';

	const lang = useLangStore();
</script>

<style scoped></style>
