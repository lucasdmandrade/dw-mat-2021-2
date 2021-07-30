//vetor
let numeros = [10, 20 ,30]

//Desestruturação do vetor
let [a, b, c] = numeros
console.log(a, b, c)

//Desestruturando apenas o segundo valor
let [, x, ] = numeros
console.log(x)

//objeto 
//objeto
let carro = {
    modelo : 'fusca',
    marca : 'volkswagen',
    cor : 'preto', 
    ano : 1969
}

//AS VARIAVEIS PRECISAM TER O MESMO NOME DA PROPRIEDADE
//Desestruturação do objeto 

let {marca, modelo, cor, ano} = carro
console.log(marca, modelo, cor, ano)

//Os 2 não funcionam junto pq repetem o let marca e modelo
//Desestruturação parcial
let {marca, modelo} = carro
console.log(marca, modelo)