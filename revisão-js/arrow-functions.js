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