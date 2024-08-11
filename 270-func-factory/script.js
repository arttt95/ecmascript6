let Bicicleta1 = {

    cor: 'Branca',
    marcha: 12,
    aro: 12,
    pedalar() {
        console.log('Método pedalar executado!')
    }
}

let Bicicleta2 = {

    cor: 'Vermelha',
    marcha: 18,
    aro: 26,
    pedalar() {
        console.log('Método pedalar executado!')
    }
}


console.log(Bicicleta1)

Bicicleta1.pedalar()

console.log(Bicicleta2)

Bicicleta2.pedalar()

//-------------------------------------------

let BicicletaFactory = function (cor, marcha, aro) {

    //-> Lógica
    //-> Requisição http
    //-> Resposta http

    return {

        cor,
        marcha,
        aro,
        pedalar () {

            console.log('Método pedalar sendo executado!')

        }

    }

}

let Bicicleta3 = BicicletaFactory('Vermelha', 18, 12)
console.log(Bicicleta3)

console.log(`Cor da bicicleta 3 é: ${Bicicleta3.cor}`)

console.log(`A qtde de marchas da bicicleta 3 é: ${Bicicleta3.marcha}`)

console.log(`O aro da bicicleta 3 é: ${Bicicleta3.aro}`)

Bicicleta3.pedalar()

let Bicicleta4 = BicicletaFactory('Verde', 12, 24)

console.log(Bicicleta4)

console.log(`Cor da bicicleta 4 é: ${Bicicleta4.cor}`)

console.log(`A qtde de marchas da bicicleta 4 é: ${Bicicleta4.marcha}`)

console.log(`O aro da bicicleta 4 é: ${Bicicleta4.aro}`)

Bicicleta4.pedalar()
