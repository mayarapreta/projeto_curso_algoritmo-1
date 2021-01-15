/*  var

nome: caractere
idade,limite,contador:inteiro

inicio
// Seção de Comandos

escreval("Digite a quantidade de vezes que vai  verificar a idade")
leia(limite)

contador := 0

enquanto contador < limite  faca

   escreval("Digite o nome da pessoa: ")
   leia (nome)

   escreval(" Digite a idade da " , nome , ":")
   leia (idade)


   se idade >18 entao

      escreval(nome," você é maior de idade !")
   senao
      escreval(nome," Você é menor de idade")
   fimse

   contador := contador +1
   
    fimenquanto
fimalgoritmo */



//iniciaa a cao 

function acaoBotao(){

    var nome,idade,contador,limite
    limite = prompt("DIGITE A QUANTIDADE DE VEZES QUE VAI VERIFICAR A IDADE") //ELE VAI EXECUTAR A IDADE
    contador = 0
    while( contador < limite ) {
        nome = prompt("DIGITTE O  NOME DA PESSOA ")
        idade= prompt("DIGITE A IDADE DE" , nome , ":")
        if (idade > 18 ) 
            document.getElementById("Paragrafo").innerText = nome + " você é maior de idade  ";
        else
        document.getElementById("Paragrafo").innerText = nome + "  Você é de menor de idade ";
 
contador++
    }


}
