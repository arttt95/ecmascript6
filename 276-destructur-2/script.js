const produto = {

    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'abc',
        modelo: undefined

    }

}

// Composição
// Instância comum "é um Objeto x"
// Intância sevindo como atributo de outra Instância "Objeto x tem um y"

// Tokens do destructuring Assignment
// Arrays => []
// Objects => {}

// let { descricao, preco } = produto

// let { descricao: d, preco: p } = produto

// let { descricao: d, preco: p, desconto } = produto //desse modo o atributo que não encontrou um valor retornaria undefined

// let { descricao: d, preco: p = 2000, desconto = 5 } = produto

let { detalhes: { fabricante: f, modelo: m = 'Não informado'} } = produto

console.log(f, m)
