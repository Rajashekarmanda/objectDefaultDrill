const mapObject = require('../mapObject.cjs')

const firstTest = mapObject({start:10, end: 20}, function(key,val){
    return val + 5;
})
const objectMap = mapObject({start:11,middle:22,end:33},function(key,val) {return val-3})
console.log(firstTest)
console.log(objectMap)

console.log(mapObject(undefined));
console.log(mapObject(null));
console.log(mapObject([]));
console.log(mapObject([22, 33, 44]));
console.log(mapObject(NaN));
console.log(mapObject(""));
console.log(mapObject("ggg"));
console.log(mapObject({ key: 0, val: 99 }));
console.log(mapObject({}))
