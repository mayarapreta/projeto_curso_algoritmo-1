
/*escreval("Digite o nome do aluno:")
leia(nome)
escreval("Digite a nota 01 do aluno:")
leia(nota01)
escreval("digite a nota 02 do aluno:")
leia(nota02)

 media <- (nota01+nota02)/2 
 se media >= 5 entao
escreval("Aprovado !",nome)
senao
escreval("Reprovado !",nome)

fimse */


var nota1,nota2,nome,media;
nome = prompt("Digite nome do aluno")
nota1= prompt("Digita nota 01 do aluno")
nota2= prompt(" Digite nota 02 do aluno " )

media =  ( parseInt(nota1) + parseInt(nota2) ) / 2  //parseint ele vai ler como soma inteiro
 
if ( media >= 50 ) {
    alert("Aprovado" + nome)
} // quando tem mais if   tem que colcoar a {chave} 
else
alert ("Reprovado" + nome)