var botonEncriptar = document.querySelector('.accion-1');

botonEncriptar.addEventListener('click', function (event) {
	event.preventDefault();

	if (vigilante) {
		var munecoO = (document.querySelector('.muneco').style.display = 'none');
		var visible = document.querySelector('.invisible');
		visible.classList.remove('invisible');
		var visible = document.querySelector('.invisibleB');
		visible.classList.remove('invisibleB');
		vigilante = false;
		var mensajeE = document.querySelector('.principal-deFI');
		mensajeE.classList.remove('principal-deFI');
		mensajeE.classList.add('principal-deFII');
	}

	var form = document.querySelector('.principal-centroF');
	var formS = document.querySelector('#mensaje-encriptado');

	// lee el mensaje a encriptar
	let mensaje = form.mensajeO.value;

	const letrasRemplazar = ['a', 'e', 'i', 'o', 'u'];
	const letrasReemplazo = ['ai', 'enter', 'imes', 'ober', 'ufat'];
	const letrasAuxiliares = ['A', 'E', 'I', 'O', 'U'];

	//codificar
	var mensajeCodificado = mensaje;

	// reemplaza las vocales minusculas por mayusculas
	for (let i = 0; i < letrasRemplazar.length; i++) {
		mensajeCodificado = mensajeCodificado.replaceAll(
			letrasRemplazar[i],
			letrasAuxiliares[i],
		);
	}
	// cambia las vocales por los codigos equivalentes
	for (let i = 0; i < letrasRemplazar.length; i++) {
		mensajeCodificado = mensajeCodificado.replaceAll(
			letrasAuxiliares[i],
			letrasReemplazo[i],
		);
	}

	formS.textContent = mensajeCodificado;
	form.reset();
});
