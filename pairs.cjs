function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs

    if (obj == undefined || obj == null || obj == '' || obj == [] || typeof obj == 'string'){
        return []
    }else if (Array.isArray(obj) && obj.length > 0){
        let returnArrOfObject = []
        for (let i=0; i<obj.length; i++){
            returnArrOfObject.push([i,obj[i]])
        }
        return returnArrOfObject
    } else {
        let arrayConvert = []
        for (let each in obj) {
            arrayConvert.push([each, obj[each]])
        }
        return arrayConvert
    }
}

module.exports = pairs