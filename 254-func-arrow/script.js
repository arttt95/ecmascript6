/*
let quadrado = function (x = 5) {

    return x * x

}

document.write(quadrado(4))
*/

/*
let quadrado = (x) => {

    return x * x

}
*/

/*
let quadrado = x => {

    return x * x

}
*/

/*
let quadrado = x => x * x  //return implicito

document.write(quadrado(3))
*/

/*
let parOuImpar = function (numero) {
    if (numero % 2 === 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
*/

/*
let parOuImpar = numero => {
    if (numero % 2 === 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
*/

let parOuImpar = numero => numero % 2 === 0 ? 'Par' : 'Ímpar' //return implícito

document.write(parOuImpar(8))