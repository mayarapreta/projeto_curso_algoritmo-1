
 /*
escreval ("Digite o nome do aluno:")
leia(nome)

 escreval("Digite nota1 do aluno:")
 leia(nota1)
 
 escreval ("Dgite a nota2 do aluno:")
 leia(nota2)
 
 
 media := (nota1+nota2)/2
 
   // logico
   
 se (media >= 50) entao
  
  passou := verdadeiro
  fimse
  
  // outro  dicondicional (! diferente falso , == igual)

  se (passou) && (media >= 50) || (media <= 70) entao  // <- condiçao
  
 escreval(" Aprovado ", nome)
 
 senao
 escreval("Reprovado ", nome)
 
 fimse


fimalgoritmo */

var  nota1,nota2,nome,media,passou;

passou = false;

nome = prompt("Digite o nome do aluno" )
nota1 = prompt("Digite a nota do aluno" )
nota2 = prompt("Digite a nota do aluno" )

media= (nota1 + nota2) /2

if (media >= 50 ) 
     
    passou = true;

    if (passou && ( media >= 70 && media <= 90) )
    alert("Aprovado" + nome)
    else
    alert("Reprovado"+ nome) 
