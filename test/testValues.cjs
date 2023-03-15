const values = require('../values.cjs')

const testObjectIs = values({ name: 'Bruce Wayne', age: 36, location: 'Gotham' })

console.log(testObjectIs)

console.log(values(undefined))
console.log(values([]))
console.log(values({}))
console.log(values(''))
console.log(values(NaN))
console.log(values(100))
console.log(values(null))