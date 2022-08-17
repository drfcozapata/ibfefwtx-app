<template>
	<div class="relative banner-contact">
		<div class="main__bckgr"></div>
	</div>
</template>

<style scoped>
	.banner-contact {
		width: 100vw;
		height: 480px;
		/* padding-top: 96px; */
		background-image: url('../assets/images/ibfe-16.jpg');
		background-repeat: no-repeat;
		background-position: center top;
		background-size: cover;
		z-index: -2;
		position: fixed;
	}
	.main__bckgr {
		position: absolute;
		width: 100%;
		height: 480px;
		top: 0;
		left: 0;
		background-color: rgba(16, 16, 16, 0.6);
	}
</style>
