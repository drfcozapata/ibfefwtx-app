<template>
	<div class="w-full people">
		<img
			class="w-full h-full object-cover"
			src="../assets/images/ibfe-02.jpg"
			alt="La gente de nuestar iglesia"
		/>
		<div class="bg-sky-700 text-slate-100 flex flex-col justify-center">
			<h3 class="text-3xl font-medium uppercase mb-6">
				La iglesia no es un edificio; ¡son las personas!
			</h3>
			<p class="text-xl mb-10">
				Jesús dijo que vino por la gente, por las personas. Siendo el buen
				pastor, vino a buscar a quienes se habían extraviado. Su grandeza no
				puede ser contenida por un edificio.
			</p>
			<nuxt-link to="/ministries" class="hover:bg-light-50 hover:text-dark-800">
				<button>Aprender más</button>
			</nuxt-link>
		</div>
	</div>
</template>

<style scoped>
	.people {
		height: 630px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	.people > div {
		padding: 112px;
	}
	@media screen and (max-width: 992px) {
		.people {
			grid-template-columns: 5fr 7fr;
		}
		.people > div {
			padding: 90px;
		}
	}
	@media screen and (max-width: 768px) {
		.people {
			height: 648px;
			display: flex;
			flex-direction: column;
		}
		.people > img {
			height: 300px;
			object-position: bottom;
		}
		.people > div {
			padding: 50px;
		}
		.people h3 {
			font-size: 26px;
		}
		.people p {
			font-size: 18px;
		}
	}
	@media screen and (max-width: 576px) {
		.people {
			height: 630px;
		}
		.people > img {
			height: 280px;
		}
		.people > div {
			padding: 40px;
		}
		.people h3 {
			font-size: 22px;
		}
		.people p {
			font-size: 16px;
			margin-bottom: 30px;
		}
	}
	@media screen and (max-width: 480px) {
		.people {
			height: 648px;
		}
		.people > img {
			height: 270px;
		}
		.people > div {
			padding: 30px;
		}
		.people h3 {
			font-size: 22px;
		}
		.people p {
			font-size: 16px;
			margin-bottom: 30px;
		}
	}

	/* From uiverse.io by @nikk7007 */
	button {
		padding: 1.25rem 2rem;
		border: 2px solid #f3f4f6;
		position: relative;
		overflow: hidden;
		background-color: transparent;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 600;
		font-size: 13px;
		transition: 0.3s;
		z-index: 1;
		font-family: inherit;
		color: #f3f4f6;
	}
	button::before {
		content: '';
		width: 0;
		height: 300%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		background: #f3f4f6;
		transition: 0.5s ease;
		display: block;
		z-index: -1;
	}
	button:hover::before {
		width: 105%;
	}
	button:hover {
		color: #111;
	}
</style>
