/*
class Cachorro {

    constructor () {

        this.cor = 'Branco e marrom'
        this.tamanho = 30
        this.orelhas = 'Grandes e caídas'

    }

    correr () {

        console.log('Correndo')

    }

    dormir () {

        console.log('Dormindo')

    }

    rosnar () {

        console.log('Rosanando')

    }
}

class Passaro {

    constructor () {

        this.cor = 'Branco e marrom'
        this.tamanho = 10
        this.bico = 'Curto'

    }

    voar () {

        console.log('Voando')

    }

    dormir () {

        console.log('Dormindo')

    }
}

let cachorro = new Cachorro()

let passaro = new Passaro()

console.log(cachorro)
console.log(passaro)
*/

class Animal {

    constructor (cor, tamanho, peso) {

        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso

    }

    dormir () {

        console.log('Dormindo')

    }
}


class Passaro extends Animal {

    constructor (bico, cor, tamanho, peso) {

        super(cor, tamanho, peso)
        this.bico = bico

    }

    voar () {

        console.log('Voando')

    }
}

class Papagaio extends Passaro {

    constructor (sabeFalar, cor, tamanho, peso) {

        super('Médio', cor, tamanho, peso)
        this.sabeFalar = sabeFalar

    }

    falar () {

        console.log('Falando')

    }
}

class Avestruz extends Passaro {

    constructor (bico, cor, tamanho, peso) {
        
        super(bico, cor, tamanho, peso)

    }

    enterrarCabeca () {

        console.log('Enterrando a cabeça')

    }

    voar () {

        console.log('Esse passáro não sabe voar!')
    }
}

let papagaio = new Papagaio(true, 'Verde', 25, 350)

console.log(papagaio)


papagaio.voar()

let avestruz = new Avestruz('Grande', 'Preto e branco', 250, 15000)

avestruz.enterrarCabeca()

avestruz.voar()