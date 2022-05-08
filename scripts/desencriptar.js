var botonDesencriptar = document.querySelector('.accion-2');
botonDesencriptar.addEventListener('click', function (event) {
	event.preventDefault();
	var form = document.querySelector('.principal-centroF');
	var formS = document.querySelector('#mensaje-encriptado');
	const letrasRemplazar = ['a', 'e', 'i', 'o', 'u'];
	const letrasReemplazo = ['ai', 'enter', 'imes', 'ober', 'ufat'];

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

	//decodificar
	var mensajeDecodificado = form.mensajeO.value;
	// reemplaza los codigo por las vocales respectivas
	for (let i = 0; i < letrasRemplazar.length; i++) {
		mensajeDecodificado = mensajeDecodificado.replaceAll(
			letrasReemplazo[i],
			letrasRemplazar[i],
		);
	}

	formS.textContent = mensajeDecodificado;
	form.reset();
});
