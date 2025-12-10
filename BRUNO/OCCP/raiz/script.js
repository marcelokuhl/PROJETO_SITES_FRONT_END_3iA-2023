// Senha do Pablus segurança //

function login() {
	const elmt = document.getElementById('inputValidar');
	console.log(elmt.value);
	if(elmt.value == "pablisenha" || elmt.value == "PABLISENHA"){ 
		window.location.href = 'geral.html';
	} else {
		window.alert('ERRADO! INSIRA SUA PABLI-SENHA CORRETMANETE OU SOFRA AS CONSEQUÊNCIAS.');
	}
}

// - - - - //