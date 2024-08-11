// Function Factory (Modelo de criação de objetos - ideial para escalabilidade)
const AviaoFactory = function (cor, modelo) {

    return {

        cor,
        modelo,
        levantarVoo  () {

            console.log('Levantar voo!')

        }

    }

}


// Objeto criado a partir da Function Factory
const Aviao1 = AviaoFactory('Branco', 'Airbus a380')

console.log(Aviao1.cor)


// Objeto literal (Criado a partir do próprio modelo - ideal para objetos únicos)
const Aviao2 = {

    cor: 'Azul',
    modelo: 'Boeing 787',
    levantarVoo: function() {console.log('Levantar voo!')}

}

console.log(Aviao2.cor)


// Modelo de criação de objetos baseado no Design Pattern de Função Construtora
const AviaoF = function () {

    this.cor = 'Cinza'
    this.modelo = 'Latam 316'
    this.levantarVoo = function () {console.log('Levantar voo!')}

}

const Aviao3 = new AviaoF()

console.log(Aviao3.cor)


// Modelo de criação de objetos baseado na Classe Construtora
class AviaoC {

    constructor () {

        this.cor = 'Marrom'
        this.modelo = 'Embraer E-Jets'

    }

    levantarVoo () {

        console.log('Levantar voo!')

    }
}

const Aviao4 = new AviaoC()

console.log(Aviao4.cor)

console.log(Aviao1)

console.log(Aviao2)

console.log(Aviao3)

console.log(Aviao4)

