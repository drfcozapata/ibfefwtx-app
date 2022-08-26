<template>
	<body class="bg-gray-200 min-h-screen dark:bg-gray-900">
		<div class="flex items-center justify-center py-8 px-4">
			<div class="max-w-xl w-full shadow-lg">
				<div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
					<!-- <div class="px-4 flex items-center justify-between">
						<span
							tabindex="0"
							class="focus:outline-none text-xl font-bold dark:text-gray-100 text-gray-800"
							>{{ lang.spaOrEngLng ? 'Agosto 2022' : 'August 2022' }}</span
						>
						<div class="flex items-center">
							<button
								aria-label="calendar backward"
								class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="icon icon-tabler icon-tabler-chevron-left"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<polyline points="15 6 9 12 15 18" />
								</svg>
							</button>
							<button
								aria-label="calendar forward"
								class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="icon icon-tabler icon-tabler-chevron-right"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<polyline points="9 6 15 12 9 18" />
								</svg>
							</button>
						</div>
					</div>
					<div class="flex items-center justify-between pt-14 overflow-x-auto">
						<table class="w-full">
							<thead>
								<tr>
									<th>
										<div class="w-full flex justify-center">
											<p class="p__week-day">
												{{ lang.spaOrEngLng ? 'Lu' : 'Mo' }}
											</p>
										</div>
									</th>
									<th>
										<div class="w-full flex justify-center">
											<p class="p__week-day">
												{{ lang.spaOrEngLng ? 'Ma' : 'Tu' }}
											</p>
										</div>
									</th>
									<th>
										<div class="w-full flex justify-center">
											<p class="p__week-day">
												{{ lang.spaOrEngLng ? 'Mi' : 'We' }}
											</p>
										</div>
									</th>
									<th>
										<div class="w-full flex justify-center">
											<p class="p__week-day">
												{{ lang.spaOrEngLng ? 'Ju' : 'Th' }}
											</p>
										</div>
									</th>
									<th>
										<div class="w-full flex justify-center">
											<p class="p__week-day">
												{{ lang.spaOrEngLng ? 'Vi' : 'Fr' }}
											</p>
										</div>
									</th>
									<th>
										<div class="w-full flex justify-center">
											<p class="p__week-day">
												{{ lang.spaOrEngLng ? 'Sá' : 'Sa' }}
											</p>
										</div>
									</th>
									<th>
										<div class="w-full flex justify-center">
											<p class="p__week-day">
												{{ lang.spaOrEngLng ? 'Do' : 'Su' }}
											</p>
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="pt-7">
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">1</p>
										</div>
									</td>
									<td class="pt-7">
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">2</p>
										</div>
									</td>
									<td class="pt-7">
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">3</p>
										</div>
									</td>
									<td class="pt-7">
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">4</p>
										</div>
									</td>
									<td class="pt-7">
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">5</p>
										</div>
									</td>
									<td class="pt-7">
										<div class="div__date">
											<p class="p__weekend-day" :class="is - today">6</p>
										</div>
									</td>
									<td class="pt-7">
										<div class="div__date">
											<p class="p__weekend-day" :class="is - today">7</p>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">8</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">9</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">10</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">11</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">12</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__weekend-day" :class="is - today">13</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__weekend-day" :class="is - today">14</p>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">15</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">16</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">17</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">18</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">19</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__weekend-day" :class="is - today">20</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__weekend-day" :class="is - today">21</p>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">22</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">23</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">24</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">25</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">26</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__weekend-day" :class="is - today">27</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__weekend-day" :class="is - today">28</p>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">29</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">20</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__laboral-day" :class="is - today">31</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__other-month">1</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__other-month">2</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__other-month">3</p>
										</div>
									</td>
									<td>
										<div class="div__date">
											<p class="p__other-month">4</p>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div> -->
					<Calendar />
				</div>
				<div
					class="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b"
				>
					<div class="px-4">
						<div class="border-b pb-4 border-gray-400 border-dashed">
							<p
								class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300"
							>
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
						<div class="border-b pb-4 border-gray-400 border-dashed pt-5">
							<p
								class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300"
							>
								10:00 AM
							</p>
							<a
								tabindex="0"
								class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
								>Orientation session with new hires</a
							>
						</div>
						<div class="border-b pb-4 border-gray-400 border-dashed pt-5">
							<p
								class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300"
							>
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
				</div>
			</div>
		</div>
	</body>
</template>

<script setup>
	import { ref } from 'vue';
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
	let date = new Date();
	let today = date.getDate();

	let isToday = ref(false);

	const handlerToday = () => {
		//`
	};
</script>

<style scoped></style>
