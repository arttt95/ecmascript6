let nome = 'Jorge'
let idade = 29
let sexo = 'Masculino'
let profissao = 'Programador'

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function () {
        console.log(`O(a) ${this.nome} tem ${this.idade} anos, seu sexo é ${this.sexo} e é ${this.profissao}.`)
    }
}

console.log(objeto)
objeto.exibirResumo()

let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo () {
        console.log(`O(a) ${this.nome} tem ${this.idade} anos, seu sexo é ${this.sexo} e é ${this.profissao}.`)
    }
}

console.log(objeto2)
objeto2.exibirResumo()