<!-- <template>
	<div class="my-8">
		<div class="border-b pb-4 border-gray-400 border-dashed">
			<p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
				9:00 AM
			</p>
			<a
				tabindex="0"
				class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
				>Zoom call with design team</a
			>
			<p class="text-sm pt-2 leading-4 text-gray-600 dark:text-gray-300">
				Discussion on UX sprint and Wireframe review
			</p>
		</div>
		<div class="border-b pb-4 border-gray-400 border-dashed pt-5">
			<p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
				10:00 AM
			</p>
			<a
				tabindex="0"
				class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
				>Orientation session with new hires</a
			>
		</div>
		<div class="border-b pb-4 border-gray-400 border-dashed pt-5">
			<p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
				9:00 AM
			</p>
			<a
				tabindex="0"
				class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
				>Zoom call with design team</a
			>
			<p
				class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300"
			>
				Discussion on UX sprint and Wireframe review
			</p>
		</div>
	</div>
</template> -->

<template>
	<div class="my-8">
		<div v-for="(event, index) in events" class="border py-2 mb-2" :key="index">
			<table>
				<tbody>
					<tr :class="{ prevDay: event.isPrev === true }">
						<td
							width="45px"
							class="text-3xl font-medium text-right event-date"
							:class="{ nextDay: event.isPrev === false }"
						>
							{{ event.date.slice(8) }}
						</td>
						<td class="pl-4">
							<h4 class="text-lg font-medium event-title">
								{{ lang.spaOrEngLng ? event.titleEs : event.titleEn }}
							</h4>
							<p class="event-time">{{ event.content }}</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup>
	import { reactive } from 'vue';
	import jsonData from '../helper/events.json';
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();

	const data = jsonData;
	console.log(data);

	const events = reactive([
		{
			date: '2022-10-2',
			titleEs: 'Reunión Dominical',
			titleEn: 'Sunday Meeting',
			content: '11:00am - 12:00pm',
			isPrev: true,
		},
		{
			date: '2022-10-2',
			titleEs: 'Reunión de Grupos Pequeños',
			titleEn: 'Small Groups Meeting',
			content: '12:00 - 1:00pm',
			isPrev: true,
		},
		{
			date: '2022-10-5',
			titleEs: 'Orar los unos por los otros',
			titleEn: 'Praying for each other',
			content: '8:00 - 9:30pm',
			isPrev: true,
		},
		{
			date: '2022-10-5',
			titleEs: 'Tiempo de oración y reflexión bíblica',
			titleEn: 'Time for prayer and biblical reflection',
			content: '8:00 - 9:30 pm',
			isPrev: true,
		},
		{
			date: '2022-10-8',
			titleEs: 'Celebración de la Herencia Hispana',
			titleEn: 'Hispanic Heritage Celebration',
			content: '4:00 - 7:00 pm',
			isPrev: true,
		},
		{
			date: '2022-10-9',
			titleEs: 'Reunión Dominical',
			titleEn: 'Sunday Meeting',
			content: '11:00am - 12:00pm',
			isPrev: true,
		},
		{
			date: '2022-10-9',
			titleEs: 'Reunión de Grupos Pequeños',
			titleEn: 'Small Groups Meeting',
			content: '12:00 - 1:00pm',
			isPrev: true,
		},
		{
			date: '2022-10-12',
			titleEs: 'Tiempo de oración y reflexión bíblica',
			titleEn: 'Time for prayer and biblical reflection',
			content: '8:00 - 9:30 pm',
			isPrev: true,
		},
		{
			date: '2022-10-12',
			titleEs: 'Orar por la iglesia',
			titleEn: 'Praying for the Church',
			content: '8:00 - 9:30 pm',
			isPrev: true,
		},
		{
			date: '2022-10-16',
			titleEs: 'Reunión Dominical',
			titleEn: 'Sunday Meeting',
			content: '11:00am - 12:00pm',
			isPrev: true,
		},
		{
			date: '2022-10-16',
			titleEs: 'Reunión de Grupos Pequeños',
			titleEn: 'Small Groups Meeting',
			content: '12:00 - 1:00pm',
			isPrev: true,
		},
		{
			date: '2022-10-19',
			titleEs: 'Orar por las necesidades de otros',
			titleEn: 'Praying for the needs of others',
			content: '8:00 - 9:30 pm',
			isPrev: true,
		},
		{
			date: '2022-10-19',
			titleEs: 'Tiempo de oración y reflexión bíblica',
			titleEn: 'Time for prayer and biblical reflection',
			content: '8:00 - 9:30 pm',
			isPrev: true,
		},
		{
			date: '2022-10-23',
			titleEs: 'Santa Cena',
			titleEn: 'Holly Supper',
			content: '11:00am - 12:00pm',
			isPrev: false,
		},
		{
			date: '2022-10-23',
			titleEs: 'Reunión Dominical',
			titleEn: 'Sunday Meeting',
			content: '11:00am - 12:00pm',
			isPrev: false,
		},
		{
			date: '2022-10-23',
			titleEs: 'Reunión de Grupos Pequeños',
			titleEn: 'Small Groups Meeting',
			content: '12:00 - 1:00pm',
			isPrev: false,
		},
		{
			date: '2022-10-26',
			titleEs: 'Tiempo de oración y reflexión bíblica',
			titleEn: 'Time for prayer and biblical reflection',
			content: '8:00 - 9:30 pm',
			isPrev: false,
		},
		{
			date: '2022-10-28',
			titleEs: 'Proyecto de Servicio Hospital',
			titleEn: 'Hospital Service Project',
			content: '(Horario a publicar)',
			isPrev: false,
		},
		{
			date: '2022-10-29',
			titleEs: 'Apoyo misionero a la Iglesia Joshua',
			titleEn: 'Missionary support to Joshua Church',
			content: '9:00am - 5:00 pm',
			isPrev: false,
		},
		{
			date: '2022-10-30',
			titleEs: 'Reunión Dominical',
			titleEn: 'Sunday Meeting',
			content: '11:00am - 12:00pm',
			isPrev: false,
		},
		{
			date: '2022-10-30',
			titleEs: 'Reunión de Grupos Pequeños',
			titleEn: 'Small Groups Meeting',
			content: '12:00 - 1:00pm',
			isPrev: false,
		},
	]);
</script>

<style scoped>
	.prevDay {
		color: #d4d4d8;
	}
	.nextDay {
		color: #0369a1;
	}
	@media screen and (max-width: 360px) {
		.event-day,
		.event-time {
			font-size: 80%;
		}
		.event-title {
			font-style: 90%;
			line-height: 1.3;
		}
	}
</style>
