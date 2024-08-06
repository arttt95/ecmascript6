/*
class Tv {

    constructor () {
        this._relacaoCanais = [2, 4, 5, 7, 10]
        this._canalAtivo = 5
        this._volume = 5
    }

    //getters setters
    get canalAtivo () {

        return this._canalAtivo

    }

    set canalAtivo (canal) {

        if (this._relacaoCanais.indexOf(canal) !== -1) {

            this._canalAtivo = canal
            console.log(this._relacaoCanais.indexOf(canal))

        }
        

    }

}

let tv = new Tv()

tv.canalAtivo = 7

console.log(tv.canalAtivo)
*/



//celular
class Celular {

    constructor (camera, ios, cor) {

        this._camera = camera
        this._ios = ios
        this._cor = cor
        this._apps = ['instagrma', 'gchrome', 'fb', 'waze']
        this._appsAtivos = ['instagram', 'fb']


    }

    get appsAtivos () {

        return this._appsAtivos

    }

    set appsAtivos (app) {

        if (this._apps.indexOf(app) !== -1) {

            if (this._appsAtivos.indexOf(app) !== -1) {

                this._appsAtivos.push(app)

            } else {

                console.log('Esse aplicativo já está instalado!')

            }

        } else {

            console.log('Esse aplicativo não está disponível na loja de aplicativos!')

        }

    }
}

let celular = new Celular('24mp', 'false', 'azul')


console.log(celular.appsAtivos)

celular.appsAtivos.push('waze')

console.log(celular.appsAtivos)