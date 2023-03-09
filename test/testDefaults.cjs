const defaults = require('../defaults.cjs')

const iceCream = {flavour: 'Chocolate'}

const food = defaults(iceCream, {flavour: "Vanilla", spinkles: 'lots'})

const data = {count: 100}

const testCase = defaults( data,{count:101,matches:200} )

console.log(food)

console.log(testCase)

