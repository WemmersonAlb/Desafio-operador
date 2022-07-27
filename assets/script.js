
var botao = window.document.getElementById("confirmar");
botao.addEventListener("click", confirmar);



function confirmar () {
    var entrada1 = Number(window.document.getElementById("entrada1").value);
    var entrada2 = Number(window.document.getElementById("entrada2").value);
    var saida = window.document.getElementById("saida");
    var igualdade, resultado, compara1, compara2;
    if(isNaN(entrada1) || isNaN(entrada2)){
        alert("Digite apenas valores válidos");
    }else{
        
        if(entrada1==entrada2){
            igualdade = "são";
        }else{
            igualdade = "não são";
        }
        resultado = entrada1+entrada2;
        if(resultado<10){
            compara1 = "menor que";
        }else if(resultado>10){
            compara1 = "maior que";
        }else if(resultado == 10){
            compara1 = "igual a";
        }
        if(resultado<20){
            compara2 = "menor que";
        }else if(resultado>20){
            compara2 = "maior que";
        }else if(resultado == 20){
            compara2 = "igual a";
        }
        saida.innerText = `Os números ${entrada1} e ${entrada2} ${igualdade} iguais. Sua soma é ${resultado} que é ${compara1} 10 e ${compara2} 20.`;
        
    }

}
