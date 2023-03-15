const pairs = require('../pairs.cjs')

const objectData = pairs({ name: 'Bruce Wayne', age: 36, location: 'Gotham' })
console.log(objectData)

console.log(pairs(undefined));
console.log(pairs(null));
console.log(pairs([]));
console.log(pairs([22, 33, 44]));
console.log(pairs(NaN));
console.log(pairs(""));
console.log(pairs("ggg"));
console.log(pairs({ key: 0, val: 99 }));
console.log(pairs({}))