

function acaoBotao() {
var valor1 ,valor2 ,sairloop
 do {
 valor1 = prompt("DIGITE O PRIMEIRO VALOR")
 valor2 = prompt("DIGITE O SEGUNDO VALOR")
 document.getElementById("Paragrafo").innerText ="Resultado" + (parseInt(valor1) + parseInt(valor2));
 sairloop= prompt(" Voce deseja sair ? S/N ")
}while( sairloop == "N" )
}