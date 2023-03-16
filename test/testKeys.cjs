const keys = require('../keys.cjs')

const testObjectIs = keys({ name: 'Bruce Wayne', age: 36, location: 'Gotham' })

console.log(testObjectIs)

console.log(keys([1, 2,2,3,4,6]));
console.log(keys([]));
console.log(keys({}));
console.log(keys(""));
console.log(keys("Hello world !"));
console.log(keys({ key: 10, val: 99 }));
console.log(keys(undefined));
console.log(keys(null));
console.log(keys("Hello"));