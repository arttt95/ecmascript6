let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

//let [ a, b, , c ] = frutas //podemos pular um indice

let [ a, b = 'Abacate', c, d, e = 'Banana'] = frutas

console.log(a, b, c, d, e)

let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['José', 'Maria']]

let [, [, n2]] = coisas

let [[, , x ]] = coisas

console.log(n2)

console.log(x)