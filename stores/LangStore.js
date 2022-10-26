import { defineStore } from 'pinia';

export const useLangStore = defineStore('lang', () => {
	const langEs = ref(true);

	const spaOrEngAlt = computed(() => {
		if (langEs.value === true) return 'english';
		return 'español';
	});
	const spaOrEngLng = computed(() => {
		if (langEs.value === true) return true;
		return false;
	});

	function setLangEs() {
		langEs.value = !langEs.value;
	}

	return { langEs, spaOrEngAlt, spaOrEngLng, setLangEs };
});
