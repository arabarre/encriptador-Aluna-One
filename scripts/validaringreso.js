function validarTecla(evento) {
	// valida el codigo de la tecla por codigo ASCIIda.
	var codigoTecla = evento.which;

	if (
		(codigoTecla >= 97 && codigoTecla <= 122) ||
		codigoTecla == 8 ||
		codigoTecla == 33 ||
		codigoTecla == 32 ||
		codigoTecla == 241 ||
		codigoTecla == 44 ||
		codigoTecla == 46 ||
		codigoTecla == 59
	) {
		// Retorna true para las letras desde a-z
		// teclas retroceso para borrar, !, espacio, ñ, (,), (.) y (;)
		return true;
	} else {
		// Retorna falso para todas los demas caracteres
		return false;
	}
}
