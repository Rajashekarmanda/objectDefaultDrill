const invert = require('../invert.cjs')

const testCase = invert({ name: 'Bruce Wayne', age: 36, location: 'Gotham' })

const testCaseTwo = invert({name: "Morris", biden:"President", country:"America"})

console.log(testCase)

console.log(testCaseTwo)

const testCaseThree = invert([1,2,3,4,5,6])
console.log(testCaseThree)

console.log(invert(undefined))
console.log(invert(null))
console.log(invert({}))
console.log(invert(''))


