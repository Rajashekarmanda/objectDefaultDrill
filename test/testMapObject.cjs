const mapObject = require('../mapObject.cjs')

const firstTest = mapObject({start:10, end: 20}, function(key,val){

    return val + 5;
})

console.log(firstTest)

const objectMap = mapObject({start:11,middle:22,end:33},function(key,val) {return val-3})

console.log(objectMap)

const testCase = mapObject(0)

console.log(testCase)

console.log(mapObject(''))
