const SERIE = 'Friends'

function x () {

    const SERIE = 'The Walking Dead'
    console.log('dentro da função: ' + SERIE)

}

x()

console.log('escopo global: ' + SERIE)

{
    const SERIE = 'Peak Blinders'
}

console.log('escopo global 2: ' + SERIE)