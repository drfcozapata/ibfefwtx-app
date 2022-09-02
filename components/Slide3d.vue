<template>
	<div class="slider-3d">
		<div id="slider">
			<input type="radio" name="slider" id="s1" />
			<input type="radio" name="slider" id="s2" />
			<input type="radio" name="slider" id="s3" checked />
			<input type="radio" name="slider" id="s4" />
			<input type="radio" name="slider" id="s5" />
			<label for="s1" id="slide1"></label>
			<label for="s2" id="slide2"></label>
			<label for="s3" id="slide3"></label>
			<label for="s4" id="slide4"></label>
			<label for="s5" id="slide5"></label>
		</div>
	</div>
</template>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	.slider-3d {
		width: 100%;
		background-color: #f9fafb;
	}
	[type='radio'] {
		display: none;
	}
	#slider {
		height: 400px;
		width: 83%;
		margin: 0 auto;
		position: relative;
		perspective: 1000px;
		transform-style: preserve-3d;
	}
	#slider label {
		margin: auto;
		width: 41%;
		height: 75%;
		border-radius: 4px;
		position: absolute;
		left: 0;
		right: 0;
		cursor: pointer;
		transition: transform 0.7s ease-in-out;
	}
	#s1:checked ~ #slide4,
	#s2:checked ~ #slide5,
	#s3:checked ~ #slide1,
	#s4:checked ~ #slide2,
	#s5:checked ~ #slide3 {
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
		transform: translate3d(-90%, 0, -150px);
		opacity: 0.6;
	}
	#s1:checked ~ #slide5,
	#s2:checked ~ #slide1,
	#s3:checked ~ #slide2,
	#s4:checked ~ #slide3,
	#s5:checked ~ #slide4 {
		box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
		transform: translate3d(-45%, 0, -100px);
		opacity: 0.9;
	}
	#s1:checked ~ #slide1,
	#s2:checked ~ #slide2,
	#s3:checked ~ #slide3,
	#s4:checked ~ #slide4,
	#s5:checked ~ #slide5 {
		box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3),
			0 11px 7px 0 rgba(0, 0, 0, 0.19);
		transform: translate3d(0, 0, 0);
	}
	#s1:checked ~ #slide2,
	#s2:checked ~ #slide3,
	#s3:checked ~ #slide4,
	#s4:checked ~ #slide5,
	#s5:checked ~ #slide1 {
		box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
		transform: translate3d(45%, 0, -100px);
		opacity: 0.9;
	}
	#s1:checked ~ #slide3,
	#s2:checked ~ #slide4,
	#s3:checked ~ #slide5,
	#s4:checked ~ #slide1,
	#s5:checked ~ #slide2 {
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
		transform: translate3d(90%, 0, -150px);
		opacity: 0.6;
	}
	#slide1 {
		background-image: url('../public/ibfe-bg-19.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}
	#slide2 {
		background-image: url('../public/ibfe-bg-20.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}
	#slide3 {
		background-image: url('../public/ibfe-bg-21.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}
	#slide4 {
		background-image: url('../public/ibfe-bg-22.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}
	#slide5 {
		background-image: url('../public/ibfe-bg-23.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}
</style>
