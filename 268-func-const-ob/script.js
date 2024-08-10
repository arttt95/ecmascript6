let Carro = function () {

    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function () {

        velocidade = this.getvelocidadeAtual
        this.setvelocidadeAtual(velocidade)

    }

    this.getvelocidadeAtual = function () {

        return this.velocidadeAtual

    }

    this.setvelocidadeAtual = function (velocidadeAtual) {

        this.velocidadeAtual = velocidadeAtual

    }

}

let carro = new Carro()

carro.getvelocidadeAtual()

