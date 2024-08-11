Object.prototype.attr50 = 'Z' //Cuidado

const animal = {attr1: 'a'}

const vertebrado = {__proto__: animal, attr2: 'b'}

const ave = {__proto__: vertebrado, attr3: 'c', attr2: 'x'}

console.log(ave.attr3, ave.attr2, ave.attr1, ave.attr50)
