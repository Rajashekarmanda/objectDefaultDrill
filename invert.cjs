function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert

    if (  obj == undefined || obj == null || obj == '' || typeof obj !== 'object') {
        return {}
    }else if (Array.isArray(obj)){
        let reverseObject = {}
        for (let i in obj){
            reverseObject[obj[i]] = i
        }
        return reverseObject
    } else {
        let reverseObj = {}
        for (let each in obj) {
            reverseObj[obj[each]] = each
        }
        return reverseObj
    }
}

module.exports = invert;
