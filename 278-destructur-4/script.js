let arr = [10, 20, 30, 40]

let [ a, ...resto ] = arr

console.log(a, resto)

const obj = {

   x: 10,
   b: 20,
   c: 30,
   d: 40

}

let { x, ...z } = obj

console.log(x, z)