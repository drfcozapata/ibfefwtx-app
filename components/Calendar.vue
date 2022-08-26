<template>
	<div>
		<section class="button">
			<button @click="prev">
				<ChevronLeft />
			</button>
			<h3>
				{{ lang.spaOrEngLng ? ActualMonthName : ActualMonthNameEn }}
				{{ actualYear }}
			</h3>
			<button @click="next">
				<ChevronRigth />
			</button>
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
			<div class="date">
				<p v-for="day in firstDay()" :key="day"></p>
				<button
					v-for="date in daysInMonth(actualYear, actualMonth)"
					:key="date"
					ref="date"
					@click="getDate"
					:class="actualDay(date)"
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
	// let today = ref(
	// 	new Date(actualYear.value, actualMonth.value, actualDay.value)
	// );
	const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb', 'Dom'];
	const daysEn = ['Mon', 'Tue', 'Wen', 'Thu', 'Fry', 'Sat', 'Sun'];

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
	const actualDay = date => {
		let calendarDate = new Date(
			actualYear.value,
			actualMonth.value,
			date
		).toDateString();
		let today = new Date().toDateString();

		return calendarDate === today ? 'today-class' : '';
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
	.days,
	.date {
		text-align: center;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 40px;
	}
	.days p {
		margin-bottom: 40px;
	}
	h1,
	p {
		text-align: center;
	}
	.button {
		padding: 15px 0 30px 0;
		display: flex;
		justify-content: space-between;
	}
	button {
		cursor: pointer;
		font-size: 20px;
		border: none;
		background-color: transparent;
	}
	button.today-class {
		font-weight: 700;
		z-index: 2;
	}
	button.today-class::before {
		content: '';
		position: absolute;
		border: 3px solid rgb(2, 132, 199);
		padding: 25px;
		transform: translate(-30%, -25%);
		border-radius: 50%;
		z-index: 0;
	}
</style>
