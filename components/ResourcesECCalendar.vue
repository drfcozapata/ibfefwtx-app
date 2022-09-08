<template>
	<div>
		<section class="calendar-head">
			<h2>
				{{ lang.spaOrEngLng ? ActualMonthName : ActualMonthNameEn }}
				{{ actualYear }}
			</h2>
			<div>
				<button class="hover:text-sky-700" @click="prev">
					<i class="fa-solid fa-chevron-left"></i>
				</button>
				<button class="chevron-next hover:text-sky-700" @click="next">
					<i class="fa-solid fa-chevron-right"></i>
				</button>
			</div>
		</section>

		<section>
			<div v-if="lang.spaOrEngLng" class="days">
				<p v-for="(day, index) in days" :key="index">
					{{ day }}
				</p>
			</div>
			<div v-else class="days">
				<p v-for="(day, index) in daysEn" :key="index">
					{{ day }}
				</p>
			</div>
		</section>

		<section>
			<div class="date mb-5">
				<p v-for="day in firstDay()" :key="day"></p>
				<button
					v-for="date in daysInMonth(actualYear, actualMonth)"
					:key="date"
					ref="date"
					@click="getDate"
					:class="{
						'prev-class disabled': prevDay(date),
						'today-class': actualDay(date),
					}"
				>
					{{ date }}
				</button>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue';
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();

	let actualMonth = ref(new Date().getMonth()); // Mes actual
	let actualYear = ref(new Date().getFullYear()); // Año actual
	let isToday = ref(new Date().getDate());
	const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb', 'Dom'];
	const daysEn = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];

	// Número de días del mes
	const daysInMonth = (year, month) => {
		let daysMonth = new Date(actualYear.value, actualMonth.value, 0).getDate();
		return daysMonth;
	};
	// Índice del primer día del mes
	const firstDay = () => {
		let initDay = new Date(actualYear.value, actualMonth.value, 0).getDay();
		return initDay;
	};
	// Día actual
	const prevDay = date => {
		let calendarDate = new Date(actualYear.value, actualMonth.value, date);
		let today = new Date();

		console.log(calendarDate, today);

		return calendarDate < today;
	};
	// Día actual
	const actualDay = date => {
		let calendarDate = new Date(
			actualYear.value,
			actualMonth.value,
			date
		).toDateString();
		let today = new Date().toDateString();

		return calendarDate === today;
	};
	// Desplaza hasta el mes previo
	const prev = () => {
		if (actualMonth.value === 0) {
			actualYear.value--;
			actualMonth.value = 11;
		} else {
			actualMonth.value--;
		}
	};
	// Desplaza hasta el siguiente mes
	const next = () => {
		if (actualMonth.value === 11) {
			actualYear.value++;
			actualMonth.value = 0;
		} else {
			actualMonth.value++;
		}
	};
	const getDate = () => {
		console.log(ref.date);
		return;
	};

	// Obtiene el nombre del mes en español
	const ActualMonthName = computed(() => {
		let str = new Date(actualYear.value, actualMonth.value).toLocaleString(
			'es-Es',
			{ month: 'long' }
		);
		return str.charAt(0).toUpperCase() + str.slice(1);
	});
	// Obtiene el nombre del mes en inglés
	const ActualMonthNameEn = computed(() => {
		return new Date(actualYear.value, actualMonth.value).toLocaleString(
			'en-US',
			{ month: 'long' }
		);
	});
</script>

<style scoped>
	.calendar-head {
		display: flex;
		justify-content: space-between;
		margin: 32px 0 40px 0;
	}
	.calendar-head h2 {
		font-size: 30px;
		line-height: 36px;
		font-weight: 500;
		margin-left: 16px;
	}
	.chevron-next {
		margin-left: 24px;
	}
	i {
		font-size: 23px;
		margin-top: 6px;
	}
	.days,
	.date {
		text-align: center;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: auto;
		grid-gap: 5px;
		justify-content: center;
		align-items: center;
	}
	.days {
		font-size: 20px;
		font-weight: 500;
		grid-gap: 20px;
		color: rgb(107, 114, 128);
	}
	.days p {
		margin-bottom: 20px;
	}
	p {
		text-align: center;
	}
	button {
		cursor: pointer;
		font-size: 20px;
		line-height: 1.5;
		border: none;
		background-color: transparent;
	}
	.date button {
		padding: 10px 12px;
		border: 3px solid transparent;
		background-color: transparent;
		border-radius: 50%;
		font-weight: 500;
	}
	button.prev-class {
		color: rgb(212, 212, 216);
		cursor: default;
	}
	button.today-class {
		font-weight: 700;
		background-color: rgb(2, 132, 199);
		color: rgb(248, 250, 252);
		cursor: pointer;
	}
	@media screen and (max-width: 768px) {
		.calendar-head h2 {
			margin-left: 4px;
			font-size: 28px;
			line-height: 34px;
		}
		.date {
			grid-gap: 10px;
		}
		.date button {
			font-size: 18px;
			padding: 10.5px 10px;
		}
		.days {
			font-size: 18.5px;
			grid-gap: 15px;
		}
	}
	@media screen and (max-width: 576px) {
		.calendar-head h2 {
			margin-left: 0;
			font-size: 24px;
			line-height: 30px;
		}
		.date button {
			padding: 7px 10px;
		}
		.days {
			font-size: 17px;
			grid-gap: 15px;
		}
	}
	@media screen and (max-width: 400px) {
		.calendar-head h2 {
			margin-left: 0;
			font-size: 20px;
			line-height: 24px;
		}
		.chevron-next {
			margin-left: 16px;
		}
		.date {
			grid-gap: 0;
		}
		.date button {
			padding: 5px 7px;
			font-size: 16px;
		}
		.days {
			font-size: 14px;
			grid-gap: 14px;
		}
	}
</style>
