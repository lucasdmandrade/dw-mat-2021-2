function quadrado(x){
    return x * x
}

//arrow function 
//(Para fazer exatamente a msm coisa)

//const Nome_funçao = argumento => execução 
const quadrado2 = x => x * x

console.log(quadrado(6), quadrado2(6))

//Função com 2 parametro 
function imc(peso, altura){
    return peso / (altura ** 2)
}

//Versão arrow function 
const imc2 = (peso, altura) => peso / (altura ** 2)

console.log(imc(62, 1.66), imc2(62, 1.66))

// Função sem parametros 
function horaAtual(){
    return new Date()
}

// versão arrow 
horaAtual2 = () => new Date()

console.log(horaAtual(), horaAtual2())

//função tradicional com varias linhas
function fatorial(n){
    if(n <= 1)return 1
    let fat = 1
    for(let i = n; i > 1; i--) fat *= i
    return fat
}

//versão arrow
const fatorial2 = n => {
    if(n <= 1) return 1
    let fat = 1
    for(let i = n; i >= 1; i--) fat *= i
    return fat
}

console.log(fatorial(5), fatorial2(5))

//Criando função
function calc(num1, num2, operacao='sum'){
    let resultado 

    switch (operacao) {
        //soma
        case 'sum':
            resultado = num1 + num2
        break;

        //multiplicação
        case 'mult':
            resultado = num1 * num2
        break;

        //divisão 
        case 'div':
            resultado = num1 / num2
        break;

        //subtração
        case 'sub':
            resultado = num1 - num2
        break;
    }
    return resultado
}

console.log(calc(5, 15, 'mult'))

//Array pra ser passado(teste)
let brasil = ['Acre', 'Alagoas', 'Amapá']

//Novo array
let estadosBrasil = []

//Rodando array base 
for(let i = 0; i < brasil.length; i++ ){

    //Adicionando ao array novo 
    estadosBrasil[i] = {
        id: i,
        estado: brasil[i]
    }
}
console.log(estadosBrasil)

//Vetor base
let frutas = ['Maçã', 'Uva', 'Banana', 'Morango', 'Manga']

//Vetor pra receber frutas que iniciam com 'M'
let frutas_inicio_m = []

//Rodando vetor base
for( let i = 0; i < frutas.length; i++){
    //Condição para adicionar no segundo vetor
    if( frutas[i].slice(0, 1) == 'M' ){
        //Pushando para a ultima posição do vetor novo independente do valor de I
        frutas_inicio_m.push(frutas[i])
    }
}
console.log(frutas_inicio_m)