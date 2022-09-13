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
							class="text-3xl font-medium text-right"
							:class="{ nextDay: event.isPrev === false }"
						>
							{{ event.date.slice(8) }}
						</td>
						<td class="pl-4">
							<h4 class="text-lg font-medium">{{ event.title }}</h4>
							<p>{{ event.content }}</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup>
	import { reactive } from 'vue';

	const events = reactive([
		{
			date: '2022-09-4',
			title: 'Santa Cena',
			content: '11:00am - 12:00pm',
			isPrev: true,
		},
		{
			date: '2022-09-7',
			title: 'Orar los unos por los otros',
			content: '8:00 - 9:30pm',
			isPrev: true,
		},
		{
			date: '2022-09-11',
			title: 'Reunión Dominical',
			content: '11:00am - 12:00pm',
			isPrev: true,
		},
		{
			date: '2022-09-11',
			title: 'Reunión de Grupos Pequeños',
			content: '12:00 - 1:00pm',
			isPrev: true,
		},
		{
			date: '2022-09-14',
			title: 'Orar por la iglesia',
			content: '8:00 - 9:30 pm',
			isPrev: false,
		},
		{
			date: '2022-09-18',
			title: 'Reunión Dominical',
			content: '11:00am - 12:00pm',
			isPrev: false,
		},
		{
			date: '2022-09-18',
			title: 'Reunión de Grupos Pequeños',
			content: '12:00 - 1:00pm',
			isPrev: false,
		},
		{
			date: '2022-09-18',
			title: 'FE Youth Group',
			content: '2:00 - 6:00pm',
			isPrev: false,
		},
		{
			date: '2022-09-21',
			title: 'Orar por las necesidades de otros',
			content: '8:00 - 9:30 pm',
			isPrev: false,
		},
		{
			date: '2022-09-24',
			title: 'Fiesta en la Calle',
			content: 'Todo el día',
			isPrev: false,
		},
		{
			date: '2022-09-25',
			title: 'IBFE en el parque',
			content: '11:00am - 2:00pm',
			isPrev: false,
		},
		{
			date: '2022-09-28',
			title: 'Tiempo de oración y reflexión bíblica',
			content: '8:00 - 9:30 pm',
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
</style>
