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
		spaOrEngImg: state => {
			if (state.langEs === true) return '../assets/images/english.png';
			return '../assets/images/spanish.png';
		},
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
