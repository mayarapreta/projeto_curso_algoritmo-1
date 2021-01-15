/*
sairloop:caractere

valor1,valor2: real

inicio
// Seção de Comandos
        repita
        escreval ("Digite o primeiro  valor:")
        leia (valor1)
        escreval("Digite o segundo valor:")
        leia (valor2)
        
        escreval("Resuldado", valor1 + valor2)

        escreval ("Dejesa sair ? S/ N ")
        leia (sairloop)
        
        ate sairloop <> "N"
        

fimrepita
*/

function acaoBotao() {
var valor1 ,valor2 ,sairloop
 do {
 valor1 = prompt("DIGITE O PRIMEIRO VALOR")
 valor2 = prompt("DIGITE O SEGUNDO VALOR")
 document.getElementById("Paragrafo").innerText ="Resultado" + (parseInt(valor1) + parseInt(valor2));
 sairloop= prompt(" Voce deseja sair ? S/N ")
}while( sairloop == "N" )
}