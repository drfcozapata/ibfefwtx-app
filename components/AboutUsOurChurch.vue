<template>
	<div class="church">
		<div class="church__background">
			<img
				src="../assets/images/ibfe-c.png"
				alt="Logo Color Iglesia Bautista Fe"
			/>
		</div>
		<div class="church__image">
			<img
				class="rounded-lg"
				src="../assets/images/ibfe-07.jpg"
				alt="La Santa Biblia"
			/>
		</div>
		<div class="church__text">
			<!-- <h2 class="text-sky-600">Nuestra Iglesia</h2> -->
			<div v-if="lang.spaOrEngLng === true" class="spanish">
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Dios</span>
				</p>
				<p class="content">
					Creemos en un verdadero y vivo Dios que es amor. Él es el creador de
					todas las cosas. Es todo glorioso e infinitamente perfecto. Es eterno,
					no tiene principio ni fin. Un Dios en tres personas Padre, Hijo y
					Espíritu Santo. Dios es la fuente de todo lo bueno. Dios es soberano
					en todos los sentidos y es completamente digno de toda adoración y
					honor.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Biblia</span>
				</p>
				<p class="content">
					Creemos que La Santa Biblia fue escrita por hombres divinamente
					inspirados y es la revelación que Dios hace de sí mismo al hombre. Es
					un tesoro perfecto de instrucción divina. Tiene a Dios como su autor,
					su propósito es la salvación, y su tema es la verdad, sin mezcla
					alguna de error en sus manuscritos originales. Por tanto, toda la
					Escritura es totalmente verdadera y confiable e infalible. La Biblia
					está centrada en la persona de Jesús, él es el héroe de cada página.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Personas</span>
				</p>
				<p class="content">
					Creemos que El hombre es la creación especial de Dios, hecho a su
					propia imagen. Él los creó hombre y mujer como la corona de su
					creación. La dádiva del género es por tanto parte de la bondad de la
					creación de Dios. En el principio el hombre era inocente y fue dotado
					por Dios con la libertad para elegir. Por su propia decisión el hombre
					pecó contra Dios y trajo el pecado a la raza humana. Por medio de la
					tentación de Satanás el hombre transgredió el mandamiento de Dios, y
					cayó de su estado original de inocencia, por lo cual su posteridad
					heredó una naturaleza y un ambiente inclinado al pecado. Alejados de
					Cristo, todos merecemos la ira y el juicio de Dios.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Jesús</span>
				</p>
				<p class="content">
					Creemos que Cristo es el Hijo eterno de Dios. En su encarnación como
					Jesucristo fue concebido del Espíritu Santo y nacido de la virgen
					María. Él honró la ley divina por su obediencia personal, y en su
					muerte sustituta en la cruz, Él hizo provisión para la redención de
					los hombres del pecado. Él fue levantado de entre los muertos con un
					cuerpo glorificado. Él ascendió a los cielos y ahora está sentado a la
					diestra de Dios donde Él es el Único Mediador, completamente Dios,
					completamente hombre, en cuya Persona se ha efectuado la
					reconciliación entre Dios y el hombre. Él volverá con poder y gloria
					para juzgar al mundo y consumar su misión redentora. Él mora ahora en
					todos los creyentes como el Señor vivo y omnisciente.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Salvación</span>
				</p>
				<p class="content">
					Creemos que La salvación implica la redención total del hombre, y se
					ofrece gratuitamente a todos los que aceptan a Jesucristo como Señor y
					Salvador, quien por su propia sangre obtuvo redención eterna para el
					creyente.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Espíritu Santo</span>
				</p>
				<p class="content">
					Creemos que El Espíritu Santo es el Espíritu de Dios, completamente
					divino. Él inspiró a santos hombres de la antigüedad para que
					escribieran las Escrituras. Mediante la iluminación Él capacita a los
					hombres para entender la verdad. Él exalta a Cristo.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Iglesia</span>
				</p>
				<p class="content">
					Creemos que Una iglesia del Nuevo Testamento del Señor Jesucristo es
					una congregación local y autónoma de creyentes bautizados, asociados
					en un pacto en la fe y el compañerismo del evangelio; cumpliendo las
					dos ordenanzas de Cristo, gobernada por sus leyes, ejercitando los
					dones, derechos, y privilegios con los cuales han sido investidos por
					su Palabra, y que tratan de predicar el evangelio hasta los fines de
					la tierra.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Futuro</span>
				</p>
				<p class="content">
					Creemos que Dios, en su propio tiempo y en su propia manera, traerá el
					mundo a su fin apropiado. De acuerdo con su promesa, Jesucristo
					regresará a la tierra en gloria de manera personal y visible; los
					muertos resucitarán; y Cristo juzgará a todos los hombres en justicia.
				</p>
			</div>
			<div v-else class="english">
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>God</span>
				</p>
				<p class="content">
					We believe in a true and living God who is love. He is the creator of
					all things. He is all glorious and infinitely perfect. He is eternal,
					He has no beginning and no end. One God in three persons Father, Son
					and Holy Spirit. God is the source of all good things. God is
					sovereign in every way and is completely worthy of all worship and
					honor.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Bible</span>
				</p>
				<p class="content">
					We believe that the Holy Bible was written by divinely inspired men
					and it is God's revelation of himself to man. It is a perfect treasure
					trove of divine instruction. It has God as its author, its purpose is
					salvation, and its subject is truth, without any mixture of error in
					its original manuscripts. Therefore, all Scripture is totally true and
					reliable and infallible. The Bible is centered on the person of Jesus,
					he is the hero of every page.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>People</span>
				</p>
				<p class="content">
					We believe that Man is God's special creation, made in his own image.
					He created them male and female as the crown of his creation. The gift
					of gender is therefore part of the goodness of God's creation. In the
					beginning man was innocent and was endowed by God with the freedom to
					choose. By his own decision man sinned against God and brought sin to
					the human race. Through the temptation of Satan, man transgressed the
					commandment of God, and fell from his original state of innocence,
					whereby his posterity inherited a nature and environment inclined to
					sin. Away from Christ, we all deserve God's wrath and judgment.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Jesus</span>
				</p>
				<p class="content">
					We believe that Christ is the eternal Son of God. In his incarnation
					as Jesus Christ, he was conceived of the Holy Spirit and born of the
					Virgin Mary. He honored divine law by his personal obedience, and in
					his substitute death on the cross, he made provision for the
					redemption of men from sin. He was raised from the dead with a
					glorified body. He ascended to heaven and is now seated at the right
					hand of God where He is the Only Mediator, fully God, fully man, in
					whose Person the reconciliation between God and man has been effected.
					He will return in power and glory to judge the world and fulfill his
					redemptive mission. He now dwells in all believers as the living and
					omniscient Lord.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Salvation</span>
				</p>
				<p class="content">
					We believe that salvation implies the total redemption of man, and is
					offered freely to all who accept Jesus Christ as Lord and Savior, who
					by His own blood obtained eternal redemption for the believer.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Holy Spirit</span>
				</p>
				<p class="content">
					We believe that the Holy Spirit is the Spirit of God, fully divine. He
					inspired holy men of antiquity to write the Scriptures. By
					illumination He enables men to understand the truth. He exalts Christ.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Church</span>
				</p>
				<p class="content">
					We believe that a New Testament church of the Lord Jesus Christ is a
					local and autonomous congregation of baptized believers, associated in
					one covenant in the faith and fellowship of the gospel; fulfilling the
					two ordinances of Christ, governed by his laws, exercising the gifts,
					rights, and privileges with which they have been endowed by his Word,
					and seeking to preach the gospel to the ends of the earth.
				</p>
				<p>
					<svg
						class="w-5 h-5 fill-sky-700 -mt-1 mr-3 inline"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<path
							d="M344 48H376C389.3 48 400 58.75 400 72C400 85.25 389.3 96 376 96H344V142.4L456.7 210C471.2 218.7 480 234.3 480 251.2V512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512H160V251.2C160 234.3 168.8 218.7 183.3 210L296 142.4V96H264C250.7 96 240 85.25 240 72C240 58.75 250.7 48 264 48H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V48zM24.87 330.3L128 273.6V512H48C21.49 512 0 490.5 0 464V372.4C0 354.9 9.53 338.8 24.87 330.3V330.3zM592 512H512V273.6L615.1 330.3C630.5 338.8 640 354.9 640 372.4V464C640 490.5 618.5 512 592 512V512z"
						/>
					</svg>
					<span>Future</span>
				</p>
				<p class="content">
					We believe that God, in His own time and in His own way, will bring
					the world to its proper end. According to His promise, Jesus Christ
					will return to earth in glory in a personal and visible manner; the
					dead will be raised; and Christ will judge all men in righteousness.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useLangStore } from '../stores/LangStore';

	const lang = useLangStore();
</script>

<style scoped>
	.church__image {
		grid-area: a;
	}
	.church__text {
		grid-area: b;
	}
	.church {
		width: 83.33%;
		height: max-content;
		margin: 0 auto;
		padding: 24px 0 96px 0;
		position: relative;
		font-family: 'Montserrat';
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		grid-gap: 60px;
		grid-template-rows: auto;
		grid-template-areas: 'b b b b b b a a a';
	}
	.church__background {
		position: fixed;
		top: 20%;
		left: 20%;
		width: 100%;
		z-index: -2;
		opacity: 0.08;
		overflow: hidden;
	}
	.church__text h2 {
		font-size: 30px;
		line-height: 32px;
		font-weight: 600;
		margin-bottom: 32px;
	}
	.church__text p {
		font-size: 18px;
		line-height: 1.8;
		margin-bottom: 8px;
		text-indent: -36px;
		padding-left: 36px;
	}
	.church__text span {
		font-size: 20px;
		font-weight: 600;
		text-transform: uppercase;
		color: rgb(2, 132, 199);
	}
	.church__text p.content {
		text-indent: 0;
		padding-left: 0;
		margin-bottom: 24px;
	}
	@media screen and (max-width: 768px) {
		.church {
			padding: 18px 0 70px 0;
			grid-template-columns: repeat(12, 1fr);
			grid-gap: 40px;
			grid-template-areas: '. . . a a a a a a . . .' 'b b b b b b b b b b b b';
		}
		.church__background {
			top: 25%;
			left: 15%;
			width: 70%;
		}
		.church__text h2 {
			font-size: 28px;
			line-height: 30px;
			margin-bottom: 26px;
		}
		.church p {
			font-size: 17px;
			line-height: 1.7;
			margin-bottom: 19px;
		}
		.church__text span {
			font-size: 19px;
		}
	}
	@media screen and (max-width: 576px) {
		.church {
			width: 92%;
			grid-template-columns: repeat(12, 1fr);
			grid-gap: 30px;
			grid-template-areas: '. . . a a a a a a . . .' 'b b b b b b b b b b b b';
		}
		.church__background {
			top: 38%;
			left: 18%;
			width: 60%;
			position: fixed;
		}
		.church__text h2 {
			font-size: 26px;
			line-height: 28px;
		}
		.church p {
			font-size: 16px;
			line-height: 1.6;
			margin-bottom: 18px;
		}
		.church__text span {
			font-size: 18px;
		}
	}
</style>
