let nota = 8.6
let situacao 

/*

if( nota <= 6){
    situacao = 'APROVADO'
} else{
    situacao = "APROVADO"
}

*/

//Operador Ternario
//Condição ? Caso_positivo : Caso_negaivo
situacao = nota >= 6 ? 'Aprovado' : 'Reprovado'

console.log(`Nota: ${nota}, situação: ${situacao}`)

let user = 'admin', msg

msg = user = 'admin' ? 'Pode logar' : 'Proibido logar'
console.log(msg)