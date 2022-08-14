import { defineStore } from 'pinia';

export const useLangStore = defineStore({
	id: 'lang',
	state: () => ({
		langEs: true,
	}),
	actions: {
		setLangEs() {
			this.langEs = !this.langEs;
		},
	},
	getters: {
		spaOrEngAlt: state => {
			if (state.langEs === true) return 'english';
			return 'español';
		},
		spaOrEngLng: state => {
			if (state.langEs === true) return true;
			return false;
		},
	},
});
