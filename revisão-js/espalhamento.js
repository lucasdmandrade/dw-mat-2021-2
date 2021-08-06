/*
let min = Math.min(15, 7, 23, 2, 30, 21, 14)
let max = Math.max( 15, 7, 23, 2, 30, 21, 14 )

console.log( {min, max})
*/

//Operador spread (...)
//Desmonta o vetor 
//Espalha os elementos
let nums = [15, 7, 23, 2, 30, 21, 14 ]
let min = Math.min(...nums)
let max = Math.max(...nums)

console.log( {min, max})


let carro = {marca: 'Fiat', modelo: '147', cor: 'Branco', ano: '1981'}
//let carro2 = carro //Novo nome para o mesmo objeto, Não cria objeto novo

let carro2 = {...carro} //Usando spread garante a ciração da variavel nova pq o valor atribuido nn é outro objeto

carro2.cor = 'Azul'
carro2.ano = '1982'

console.log(carro)
console.log(carro2)

let soma1 = somaTudo(14, 35, 10, 19, 41, 11, 22, 13)
let soma2 = somaTudo(4,12, 18, 9, 3)

//caso especial do spread
//O argumento de um parametro com o spread se comportara como um vetor e podera receber qualquer quantidade de elementos
//...argumento
function somaTudo(...nums){
    let soma = 0
    for( let n of nums) soma += n
    return soma
}
console.log({soma1, soma2})

let calculo1 = calcular('+', 1, 2, 3, 4, 5)
let calculo2 = calcular('*',1, 2, 3, 4, 5)

function calcular(oper, ...nums){
    let res
    switch (oper) {
        case '+':
            res = 0
            for( let n of nums) res += n
            break;
        case '*':
            res = 1
            for( let n of nums) res *= n
    }
    return res
}

console.log({calculo1, calculo2})

let maisNums = [-4, -2, -5, -7, nums]

console.log(maisNums)