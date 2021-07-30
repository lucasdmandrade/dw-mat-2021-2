//função para calcular area de figura geometrica

//Tipo é parametro opcional apartir do momento q ele tem um valor padrão (q vale se nenhum outro for passado)
//Parametros opcionais devem ser passados por ultimo(pode haver quanto precisar)
function areaForma(base, altura, tipo='R') {
    let area

    switch (tipo.toUpperCase) {
        case 'R':
            area = base * altura
            break;

        case "T":
            area = base * altura / 2
            break;

        case 'E':
            area = (base / 2)  * (altura/ 2 ) * Math.PI
            break;

        default:
    }
    return area
}

console.log(`A area de um terreno com 16m por 27m é ${areaForma(16,27)}m²`)
console.log(`A area de um triangulo com 4,75cm por ,57m de base é ${areaForma(2.5,4.75,'T')}cm²`)
console.log(`A area de um circulo de 2,8 de diametro é ${areaForma(2.8,2.8,'E')}cm²`)