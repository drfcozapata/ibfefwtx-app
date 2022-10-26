<template>
	<div class="w-10/12 mx-auto mb-2 accordion">
		<div
			@click="isAccordionOpen"
			class="flex gap-1 items-center p-4 font-bold border rounded cursor-pointer hover:bg-sky-500 hover:text-slate-50"
			:class="isOpen ? 'bg-sky-700 text-slate-50' : 'text-gray-900'"
		>
			<i
				class="fa-sharp fa-solid fa-church mr-3"
				:class="isOpen ? 'text-slate-50' : 'text-sky-700'"
			></i>
			<h2>
				{{ lang.spaOrEngLng ? titleEs : titleEn }}
			</h2>
		</div>
		<Transition name="slide-fade">
			<div
				v-show="isOpen"
				class="mt-2 border border-sky-700 bg-indigo-50 rounded px-8 py-6 leading-8 accordion__text"
			>
				<slot></slot>
			</div>
		</Transition>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
	const isOpen = ref(false);
	const props = defineProps(['titleEs', 'titleEn']);

	const isAccordionOpen = () => {
		return (isOpen.value = !isOpen.value);
	};
</script>

<style>
	.slide-fade-enter-active,
	.slide-fade-leave-active {
		transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter-from,
	.slide-fade-leave-to {
		transform: translateY(-20px);
		opacity: 0;
	}
	@media screen and (max-width: 768px) {
		.accordion {
			width: 90%;
		}
		.accordion p {
			line-height: 29px;
		}
		.accordion__text {
			padding: 24px;
		}
	}
	@media screen and (max-width: 576px) {
		.accordion {
			width: 100%;
		}
		.accordion h2 {
			font-size: 15px;
		}
		.accordion p {
			font-size: 14px;
			line-height: 1.9;
		}
		.accordion__text {
			padding: 16px;
		}
	}
</style>
