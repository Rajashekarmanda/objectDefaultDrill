const defaults = require('../defaults.cjs')

const iceCream = {flavour: null,spinkles:undefined}
const food = defaults(iceCream, {flavour: "Vanilla", spinkles: 'lots'})

const data = {count: 222,matches:400}
const testCase = defaults( data,{count:101,matches:200} )

console.log(food)
console.log(testCase)

console.log(defaults({key:''},{key:100,val:'hello'}))
console.log(defaults({key:undefined},{key:100,val:'world'}))
console.log(defaults([1,2,3],{count:100,spinkles:'lots'}))
console.log(defaults([1,2222,322],undefined))
console.log(defaults([]))
console.log(defaults(null))
console.log(defaults(''))
console.log(defaults(undefined))
console.log(defaults('Hello'))
console.log(defaults({name:"raju",location:'hyderabad'},undefined))


