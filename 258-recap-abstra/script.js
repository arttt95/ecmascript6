//um software de marcenaria
//cadeira e sofá

//paradigma procedural


/*
//cadeira
let qtde_pernas = 1
let giratoria = true
let cor = 'azul'

//array de cadeiras
let cadeiras = []

cadeiras[0] = []
cadeiras[0]['qtde_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = []
cadeiras[1]['qtde_pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelha'

console.log(cadeiras)


function girarCadeira (indice) {
    if (cadeiras[indice]['giratoria'] === true) {
        console.log('Cadeira girou!')
    } else {
        console.log('Cadeira não é giratória!')
    }
}

function adicionarCadeira (qtde_pernas, giratoria, cor) {
    let cadeira = []

    cadeira['qtde_pernas'] = qtde_pernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor

    cadeiras.push(cadeira)

}

adicionarCadeira(3, false, 'verde')


//girarCadeira(1)
*/



//Paradigma de OO
class Cadeira {

    constructor (qtde_pernas, giratoria, cor) {

        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor

    }

    girarCadeira () {

        if (this.giratoria === true) {

            console.log('Cadeira girou!')

        } else {

            console.log('Cadeira não é giratória!')

        }
    }
}

let cadeiras = []

cadeiras.push(new Cadeira(4, false, 'azul'))
cadeiras.push(new Cadeira(1, true, 'vermelha'))

console.log(cadeiras)
//cadeira2.girarCadeira()

//cor
//qtde_lugares
//reclinavel

class Sofa {

    constructor (qtde_lugares, reclinavel, cor) {

        this.qtde_lugares = qtde_lugares
        this.reclinavel = reclinavel
        this.cor = cor

    }

    reclinarSofa () {

        if (this.reclinavel === true) {

            console.log('O sofá reclinou!')

        } else {

            console.log('O sofá não é reclinável!')

        }

    }

}

let sofas = []

sofas.push(new Sofa(3, false, 'marrom'))
sofas.push(new Sofa(2, true, 'preto'))
sofas.push(new Sofa(4, true, 'cinza'))

console.log(sofas)

sofas[1].reclinarSofa()
