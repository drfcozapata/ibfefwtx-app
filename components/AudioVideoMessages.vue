<template>
	<div class="card">
		<div class="card-img">
			<slot name="image" />
		</div>
		<div class="card-icons">
			<i
				@click="$emit('add')"
				class="fa-regular fa-circle-play"
				:title="lang.spaOrEngLng ? 'Ver video' : 'Watch video'"
			>
			</i>
			<i
				class="fa-solid fa-headphones"
				:title="lang.spaOrEngLng ? 'Escuchar audio' : 'Listen audio'"
			></i>
			<!-- <i
				class="fa-regular fa-circle-down"
				:title="lang.spaOrEngLng ? 'Descargar' : 'Download'"
			></i> -->
		</div>
		<div class="card-content">
			<h3><slot name="title" /></h3>
			<p>
				<span>{{ lang.spaOrEngLng ? 'Predicador' : 'Speaker' }}:</span>
				<slot name="speaker" />
			</p>
			<p>
				<span>{{ lang.spaOrEngLng ? 'Fecha' : 'Date' }}:</span>
				<slot name="date" />
			</p>
			<p>
				<span>{{ lang.spaOrEngLng ? 'Descripción' : 'Description' }}:</span>
				<slot name="description" />
			</p>
		</div>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped>
	.card {
		min-width: 250px;
		max-width: 320px;
		margin-bottom: 40px;
		border-top: none;
		border-radius: 8px;
	}
	.card-img {
		width: 100%;
		height: 180px;
	}
	.card-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.card-icons {
		display: flex;
		gap: 30px;
		justify-content: center;
		padding: 15px 0 8px 0;
		border-left: 0.5px solid #e5e7eb;
		border-right: 0.5px solid #e5e7eb;
	}
	i {
		font-size: 24px;
		cursor: pointer;
		color: #71717a;
	}
	.card-content {
		min-height: 290px;
		padding: 20px;
		border: 0.5px solid #e5e7eb;
		border-radius: 0 0 12px 12px;
	}
	.card-content h3 {
		font-size: 20px;
		font-weight: 500;
		line-height: 1.3;
		color: #0284c7;
		margin-bottom: 20px;
	}
	.card-content p {
		font-size: 15px;
		line-height: 1.6;
		padding-bottom: 8px;
	}
	.card-content p:last-child {
		padding-bottom: 10px;
	}
	.card-content span {
		color: #71717a;
		font-style: italic;
		padding-right: 6px;
	}
</style>
