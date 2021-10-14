const nums = [31, 42, 16, 12, 23, 9, 28, 33, 16]

//Gerar um novo vetor apenas com os valores pares
const pares = []
for(let n of nums){
    if( n % 2 === 0 ){
        pares.push(n)
    }
}
console.log(pares)

/* 
.filter() => Gera um novo vetor com o resultado de uma função (passada a ele como parametro) 
aplicada a cada elemento. Apenas os elementos para os quais a função retornar true passam para o novo valor
*/
const pares2 = nums.filter( i => i % 2 === 0)
console.log({pares2})
