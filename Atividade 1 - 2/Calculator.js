var capital;
var juros;
var tempo;
var cont;
var botao;
//evento
function inic(){
	botao = document.getElementById("botao");
	botao.addEventListener("click",calcula);
}

function calcula(){

 	var x = document.getElementById('resultado');
 	x.innerHTML = " ";

	capital = document.getElementById("cap1").value;
	juros = document.getElementById("juro").value;
	tempo = document.getElementById("meses").value;

	capital = capital.replace(",",".");
	juros = juros.replace(",",".");
	tempo =tempo.replace(",",".");



	if(isNaN(capital) || isNaN(juros) || isNaN(tempo)){
 		x.innerHTML = " Os dados inseridos são inválidos!";
 		document.getElementById("cap1").value = '';
 		document.getElementById("juro").value = '';
 		document.getElementById("meses").value = '';	
	}
	else{
		for(cont=1;cont<=tempo;cont++){	

		var total = (capital * Math.pow(1+(juros/100),cont)).toFixed(2); 
		var difer = (total - capital).toFixed(2);

		console.log(total)

		var p = document.createElement("p");
		var result = document.createTextNode("Capital no " + cont + "° mês: " + total + " Juros: " + difer);
		p.appendChild(result);
		document.getElementById("resultado").appendChild(p);
	}

}


inic();