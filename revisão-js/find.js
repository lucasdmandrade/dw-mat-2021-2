const nums = [10, 19, 3, -4, 13, -11, 15, 0, -1]

//Encontrar o primeiro numero negativo do vetor
const primeiroNeg = nums.find(x => x < 0)
console.log(primeiroNeg)