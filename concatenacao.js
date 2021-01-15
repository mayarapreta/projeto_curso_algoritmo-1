/* 
var

nome: caractere
numero: real


inicio

escreval("Digite o nome")
leia(nome)
escreval("Digite o numero")
leia(numero)

escreval (nome, " : " ,  numero , 20 )

*/

var nome, numero

nome= prompt("Digite o nome:")
numero = prompt("Digite o numero:")

document.getElementById(" Paragrafo ").innerText = nome + ":" + numero; //Dom que é o pai 