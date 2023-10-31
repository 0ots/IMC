let txtnome = window.document.getElementById("txtname");
let txtidade = window.document.getElementById("txtidade");
let txtaltura = window.document.getElementById("txtaltura");
let txtpeso = window.document.getElementById("txtpeso");
let sexoMasculino = window.document.getElementById("m");
let sexoFeminino = window.document.getElementById("f");
let resultimgImc = window.document.getElementById("resultimgImc")
let resultImc = window.document.getElementById("resultImc");
function iniciar(){
    location.replace("calculadora.html");
}
function calcularImc(){
    let peso = Number(txtpeso.value);
    let altura = Number(txtaltura.value);
    let calculoImc = (peso / (altura * 2));
    let resultadoFormatado = calculoImc.toFixed(2);
    resultado(resultadoFormatado);
}
function limpar(){
    txtnome.value = "";
    txtidade.value = "";
    txtaltura.value = "";
    txtpeso.value = "";
}
function resultado(r){
    resultImc.innerHTML = "dsadas" + r;

}
function iniciar(){
    location.replace("calculadora.html");
}
function calcularImc(){
    if(txtaltura.value == 0|| txtpeso.value == 0){
        alert("Preencha os campos para prosseguir.")
    }
    else{
        let peso = Number(txtpeso.value);
        let altura = Number(txtaltura.value);
        let calculoImc = (peso / (altura * 2));
        let resultadoFormatado = calculoImc.toFixed(2);
        localStorage.setItem("resultadoFormatado", resultadoFormatado);
        location.replace("resultado.html");
    }
}
function limpar(){
    txtaltura.value = "";
    txtpeso.value = "";
}
function reiniciar(){
    location.replace("index.html")
}
function consultarResultado(r){
    const resultadoFormatado = localStorage.getItem("resultadoFormatado");
    if (resultadoFormatado < 18.5) {
        resultImc.innerHTML = `${resultadoFormatado} <br> Categoria: Abaixo do peso ideal`;
    } 
    else if(resultadoFormatado >= 18.5 && resultadoFormatado < 25){
        resultImc.innerHTML = `${resultadoFormatado} <br> Categoria: Peso saudável`;
    }
    else if(resultadoFormatado >= 25 && resultadoFormatado < 30){
        resultImc.innerHTML = `${resultadoFormatado} <br> Categoria: Sobrepeso`;
    }
    else if(resultadoFormatado >= 30 && resultadoFormatado < 35){
        resultImc.innerHTML = `${resultadoFormatado} <br> Categoria: Obesidade grau 1 (leve)`;
    }
    else if(resultadoFormatado >= 35 && resultadoFormatado < 40){
        resultImc.innerHTML = `${resultadoFormatado} <br> Categoria: Obesidade grau 2 (moderada)`;
    }
    else if(resultadoFormatado >= 40){
        resultImc.innerHTML = `${resultadoFormatado} <br> Obesidade grau 3 (grave)`;
    }
    else{
        resultImc.innerHTML = "Resultado não disponível.";
    }
}