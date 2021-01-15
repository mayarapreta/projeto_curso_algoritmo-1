/*   

numero,fatorial,cont:inteiro

inicio

escreval ("Digite o numero para calcular o fatorial.")

leia(numero)



fatorial := 1

para cont de 1 ate numero faca

fatorial := fatorial * cont

fimpara

escreva(" O fatorial de ", numero , " é ", fatorial )




*/
function acaoBotao() {

var numero,fatorial,cont;

numero=prompt("Digite o numero para calcula o fatorial")

fatorial=1 

for (cont = 1 ; cont <= numero ; cont++  )  /*  cont = cont+1 => ++ */ {

    fatorial = parseInt(fatorial) * parseInt(cont)

} 

document.getElementById("Paragrafo").innerText= "  O fatorial de " + numero + " é  =  " + fatorial
}
