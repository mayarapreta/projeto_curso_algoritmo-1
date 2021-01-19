

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
