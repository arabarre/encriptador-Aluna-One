function validarTecla(evento) {
	// valida el codigo de la tecla por codigo ASCIIda.
	var codigoTecla = evento.key;
	caracteresAdmitidos = 'abcdefghijklmnñopqrstuvwxyz ,."!;';
	if (caracteresAdmitidos.includes(evento.key)) {
		// Retorna true para las letras desde a-z
		// teclas retroceso para borrar, (!) , espacio, ñ, (,), (.) y (;)
		return true;
	} else {
		// Retorna falso para todas los demas caracteres
		return false;
	}
}
