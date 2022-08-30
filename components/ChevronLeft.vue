<template>
	<div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-chevron-left chevron-left"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<polyline points="15 6 9 12 15 18" />
		</svg>
	</div>
</template>

<style>
	.chevron-left,
	.chevron-right {
		width: 36px;
		height: 36px;
	}
	@media screen and (max-width: 768px) {
		.chevron-left,
		.chevron-right {
			width: 30px;
			height: 30px;
			margin-top: 3px;
		}
	}
	@media screen and (max-width: 576px) {
		.chevron-left,
		.chevron-right {
			width: 28px;
			height: 28px;
		}
	}
	@media screen and (max-width: 400px) {
		.chevron-left,
		.chevron-right {
			width: 24px;
			height: 24px;
			margin-top: 0;
		}
	}
</style>
