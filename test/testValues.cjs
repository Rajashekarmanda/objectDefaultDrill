const values = require('../values.cjs')

const testObjectIs = values({ name: 'Bruce Wayne', age: 36, location: 'Gotham' })

console.log(testObjectIs)

console.log(values(undefined));
console.log(values(null));
console.log(values([]));
console.log(values([22, 33, 44]));
console.log(values(NaN));
console.log(values(""));
console.log(values("ggg"));
console.log(values({ key: 0, val: 99 }));
console.log(values({}))