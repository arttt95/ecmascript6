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

    constructor () {

        this.cor = ''
        this.tamanho = null
        this.peso = null

    }

    dormir () {

        console.log('Dormindo')

    }
}

class Cachorro extends Animal {

    constructor () {

        super()
        this.orelhas = 'Grandes e caídas'

    }

    correr () {

        console.log('Correndo')

    }

    rosnar () {

        console.log('Rosanando')

    }
}

class Passaro extends Animal {

    constructor () {

        super()
        this.bico = 'Curto'

    }

    voar () {

        console.log('Voando')

    }
}

class Papagaio extends Passaro {

    constructor () {

        super()
        this.sabeFalar = true

    }

    falar () {

        console.log('Falando')

    }
}

let cachorro = new Cachorro()

let passaro = new Passaro()

let papagaio = new Papagaio()

cachorro.dormir()
cachorro.rosnar()
cachorro.correr()

passaro.voar()
passaro.dormir()

papagaio.voar()
papagaio.dormir()
papagaio.falar()

console.log(cachorro) //peso foi adicionado
console.log(cachorro) //peso foi adicionado
console.log(cachorro) //peso foi adicionado