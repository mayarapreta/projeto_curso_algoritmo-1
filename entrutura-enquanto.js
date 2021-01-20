





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
