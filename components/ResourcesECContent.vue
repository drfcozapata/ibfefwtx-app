<template>
	<div class="w-full grid grid-cols-1 bg-gray-50 event" id="event-form">
		<div class="w-10/12 mx-auto mb-8 flex flex-col justify-start calendar-global">
			<h1>
				{{ lang.spaOrEngLng ? 'Calendario de Eventos' : 'Events Calendar' }}
			</h1>
			<ResourcesCalendar />
		</div>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped>
	.event {
		min-height: 790px;
		font-family: 'Montserrat', sans serif;
	}
	.event h1 {
		font-family: 'Poppins', sans serif;
		font-size: 40px;
		line-height: 40px;
		font-weight: 500;
		margin: 90px 0 60px 0;
	}
	.event p {
		font-size: 16px;
		line-height: 1.8;
		margin-bottom: 10px;
	}
	.event input[type='text'],
	.event input[type='email'],
	.event textarea {
		padding: 6px;
		border-radius: 6px;
		border: 0.5px solid #ccc;
	}
	.event label {
		margin-bottom: 2px;
	}
	.event input[type='submit'] {
		padding: 10px 30px;
		border: 2px solid rgb(3, 105, 161);
		text-transform: uppercase;
		font-weight: 500;
		transition: 0.5s ease all;
	}
	.event input[type='submit']:hover {
		border: 2px solid transparent;
		background-color: rgb(3, 105, 161);
		color: rgb(241, 245, 249);
		font-weight: 600;
		letter-spacing: 1px;
	}
	@media screen and (max-width: 1024px) {
		.calendar-global {
			width: 90%;
		}
	}
	@media screen and (max-width: 992px) {
		.event > div {
			padding: 0 40px;
		}
		.event h1 {
			font-size: 38px;
			line-height: 38px;
			margin-bottom: 54px;
		}
	}
	@media screen and (max-width: 768px) {
		.event > div {
			padding: 0 20px;
		}
		.event h1 {
			font-size: 34px;
			line-height: 34px;
			margin: 60px 0 48px 0;
		}
		.wrap {
			flex-wrap: wrap;
			gap: 12px;
		}
	}
	@media screen and (max-width: 576px) {
		.event {
			min-height: 860px;
		}
		.event > div {
			width: 90%;
			padding: 0 6px;
		}
		.event h1 {
			font-size: 30px;
			line-height: 30px;
			margin-bottom: 42px;
		}
		.event p,
		label,
		input {
			font-size: 14px;
		}
	}
	@media screen and (max-width: 420px) {
		.event h1 {
			font-size: 30px;
			line-height: 30px;
			margin: 42px 0;
		}
	}
	@media screen and (max-width: 360px) {
		.event h1 {
			font-size: 26px !important;
		}
	}
	@media screen and (max-width: 320px) {
		.calendar-global {
			width: 98% !important;
		}
		.event h1 {
			font-size: 23px !important;
		}
	}
</style>
