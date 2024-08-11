let Carro = function () {

    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function () {

        let velocidade = this.getVelocidadeAtual() + 50
        if (velocidade > this.velocidadeMaxima) {
            velocidade = this.velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)

    }

    this.getVelocidadeAtual = function () {

        return this.velocidadeAtual

    }

    this.setVelocidadeAtual = function (velocidadeAtual) {

        this.velocidadeAtual = velocidadeAtual

    }

}

let carro = new Carro()

console.log(`A velocidade atual do carro é: ${carro.getVelocidadeAtual()}`)

carro.acelerar()

console.log(`A velocidade atual do carro é: ${carro.getVelocidadeAtual()}`)

carro.acelerar()

console.log(`A velocidade atual do carro é: ${carro.getVelocidadeAtual()}`)

carro.acelerar()

console.log(`A velocidade atual do carro é: ${carro.getVelocidadeAtual()}`)

carro.acelerar()

console.log(`A velocidade atual do carro é: ${carro.getVelocidadeAtual()}`)

carro.velocidadeMaxima = 280
carro.acelerar()
 
console.log(`A velocidade atual do carro é: ${carro.getVelocidadeAtual()}`)


/*-------------------------------------------------------
---------------------------------------------------------
 ---------------       CARRO 2    -----------------------
 --------------------------------------------------------
 ------------------------------------------------------*/


let Carro2 = function () {

    const velocidadeMaxima = 180
    let quilometrosRodados = 0

    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0

    this.acelerar = function () {

        let velocidade = this.getVelocidadeAtual() + 50
        if (velocidade > velocidadeMaxima) {
            velocidade = velocidadeMaxima
        }
        
        this.setVelocidadeAtual(velocidade)
        setQuilometrosRodados(0.07)

    }

    this.getVelocidadeAtual = function () {

        return this.velocidadeAtual

    }

    this.setVelocidadeAtual = function (velocidadeAtual) {

        this.velocidadeAtual = velocidadeAtual

    }

    let setQuilometrosRodados = function (q) {

        quilometrosRodados += q
        console.log(quilometrosRodados)

    }

}

let carro2 = new Carro2()

console.log(`A velocidade atual do carro é: ${carro2.getVelocidadeAtual()}`)

carro2.acelerar()

console.log(`A velocidade atual do carro é: ${carro2.getVelocidadeAtual()}`)

carro2.acelerar()

console.log(`A velocidade atual do carro é: ${carro2.getVelocidadeAtual()}`)

carro2.acelerar()

console.log(`A velocidade atual do carro é: ${carro2.getVelocidadeAtual()}`)

carro2.acelerar()

console.log(`A velocidade atual do carro é: ${carro2.getVelocidadeAtual()}`)

carro2.velocidadeMaxima = 280
carro2.acelerar()
 
console.log(`A velocidade atual do carro é: ${carro2.getVelocidadeAtual()}`)

console.log(carro)

console.log(carro2)