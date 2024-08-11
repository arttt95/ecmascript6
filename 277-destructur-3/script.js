 // Destructuring assigment on functions

 /*
 let arr = [10, 20, 30, 40]

 function teste ([ a, b , , c, d = 100]) {

    console.log(a, b, c, d)

 }

 teste(arr)
 */

 //objeto

 const obj = {

    a: 10,
    b: 20,
    c: 30,
    d: 40

 }

 function teste ({ a: x, b: y , d, z = 100 }) {

    console.log(x, y, d, z)

 }

 teste(obj)