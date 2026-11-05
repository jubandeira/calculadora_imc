function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura * altura);

    let mensagem = `O seu IMC é: ` + imc.toFixed(2) + " - ";

    if (imc <18.5) {
        mensagem= mensagem + `Você está abaixo do peso ideal!`
    } 
    else if (imc >=18.5 && imc <= 24.9) {
        mensagem = mensagem + `Você está no peso ideal!`
    }
    else {
        mensagem = mensagem + `Você não está no peso ideal!`
    }

    document.getElementById("resultado").innerHTML = mensagem;
}

document.getElementById(`botao`).onclick = calcularIMC;