let usuario = 'Tulho'
let senha = 'pet123'
let nomeCompleto = 'Tulho da Silva'
let idade = 19 

//Criação de objeto a partir de variaveis ja obtidas
let infoUser = {
    //A versão reduzida so pode ser usada quando a variavel buscada tiver o mesmo nome de onde ela for inserida
    usuario, //= usuario: usuario, 
    senha,
    nome: nomeCompleto,
    idade
}

console.log(infoUser)

//Ao dar console.log na variavel dentro de um objeto aparece a variavel e seu valor respectivo
console.log({idade})