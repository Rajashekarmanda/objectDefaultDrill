const invert = require('../invert.cjs')

const testCase = invert({ name: 'Bruce Wayne', age: 36, location: 'Gotham' })

// const testCaseTwo = invert()

const testCaseTwo = invert({name: "Morris", biden:"President", country:"America"})

console.log(testCase)

console.log(testCaseTwo)