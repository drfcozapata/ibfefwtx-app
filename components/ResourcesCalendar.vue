<template>
	<body>
		<div class="calendar">
			<div class="calendar-a">
				<ResourcesECCalendar />
			</div>
			<div class="calendar-b">
				<ResourcesECEvents />
			</div>
		</div>
	</body>
</template>

<script setup>
	import { ref } from 'vue';
	import { useLangStore } from '../stores/LangStore';

	let date = new Date();
</script>

<style scoped>
	.calendar-a {
		min-height: 420px;
		max-height: 480px;
		margin: 40px 0;
		padding: 0 24px;
		background-color: white;
		border-radius: 8px;
		grid-area: a;
	}
	.calendar-b {
		margin: 40px 0;
		padding: 0 24px;
		background-color: white;
		border-radius: 8px;
		grid-area: b;
	}
	.calendar {
		width: 100%;
		background-color: rgb(228, 228, 231);
		padding: 0 40px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 40px;
		grid-template-rows: auto;
		grid-template-areas: 'a a a a a a b b b b b b';
		margin-bottom: 64px;
		box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
	}

	@media screen and (max-width: 1024px) {
		.calendar {
			grid-template-areas: 'a a a a a a a a a a a a' 'b b b b b b b b b b b';
			padding: 0 20px;
			grid-gap: 20px;
		}
	}
	@media screen and (max-width: 820px) {
		.calendar {
			grid-template-areas: 'a a a a a a a a a a a a' 'b b b b b b b b b b b b';
			padding: 0 30px;
			grid-gap: 30px;
		}
		.calendar-a {
			padding: 0 45px;
			margin-bottom: 0;
		}
	}
	@media screen and (max-width: 576px) {
		.calendar {
			grid-template-areas: 'a a a a a a a a' 'b b b b b b b b';
			padding: 0 10px;
		}
	}
	@media screen and (max-width: 420px) {
		.calendar {
			grid-template-areas: 'a a a a a a a' 'b b b b b b b';
			padding: 0 10px;
			margin: 0 auto;
		}
		.calendar-a {
			width: 82vw;
			margin: 20px auto 0 auto;
			padding: 0 15px;
			min-height: 320px !important;
		}
		.calendar-b {
			width: 82vw;
			margin: 0 auto 20px auto;
			padding: 0 15px;
		}
	}
	@media screen and (max-width: 360px) {
		.calendar-a {
			width: 81vw;
		}
		.calendar-b {
			width: 81vw;
		}
	}

	@media screen and (max-width: 320px) {
		.calendar {
			padding: 0 6px;
		}
		.calendar-a {
			width: 91vw;
		}
		.calendar-b {
			width: 91vw;
		}
	}
</style>
