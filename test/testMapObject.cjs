const mapObject = require('../mapObject.cjs')

const objectMap = mapObject({start:11,middle:22,end:33},function(key,val) {return val-3})

console.log(objectMap)