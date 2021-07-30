//Em Javascript strings comuns podem usar aspas simples ' ou duplas "
let nome = 'Fernando'
let idade = 17
let cidade = 'Franca/SP'

//Concatenando infos
console.log('nome: ' + nome + ' tenho ' + idade + ' anos' + ' e moro em: ' + cidade)

//Usando strings templates
console.log(`Meu nome é: ${nome} tenho ${idade} anos e moro em: ${cidade}`)

console.log(`Meu nome é: ${nome.toUpperCase} tenho ${idade} anos e moro em: ${cidade}`)