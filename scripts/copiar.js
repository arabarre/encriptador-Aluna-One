var botonCopiar = document.querySelector('#accion-3');

botonCopiar.addEventListener('click', function (event) {
	event.preventDefault();

	let formS = document.querySelector('#mensaje-encriptado');
	let aux = document.createElement('input');

	// Asigna el contenido del elemento especificado al valor del campo
	aux.setAttribute('value', formS.textContent);

	// Añade el campo a la página
	document.body.appendChild(aux);

	// Selecciona el contenido del campo
	aux.select();

	// Copia el texto seleccionado
	document.execCommand('copy');

	// Elimina el campo de la página
	document.body.removeChild(aux);
});
