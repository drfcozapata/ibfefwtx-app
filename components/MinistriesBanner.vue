<template>
	<div class="relative banner-contact">
		<div class="main__bckgr"></div>
	</div>
</template>

<style scoped>
	.banner-contact {
		width: 100vw;
		height: 100%;
		padding-top: 96px;
		background-image: url('../assets/images/ibfe-12.jpg');
		background-repeat: no-repeat;
		background-position: right bottom;
		background-size: cover;
		z-index: -2;
		position: fixed;
	}
	.main__bckgr {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 96px;
		left: 0;
		background-color: rgba(16, 16, 16, 0.6);
	}
</style>
