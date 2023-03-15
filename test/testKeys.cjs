const keys = require('../keys.cjs')

const testObjectIs = keys({ name: 'Bruce Wayne', age: 36, location: 'Gotham' })

console.log(testObjectIs)

console.log(keys(''));
console.log(keys(undefined));
console.log(keys(null));
console.log(keys([1,2,2]));
console.log(keys(NaN))
console.log(keys({key:100,k:'hello'}))