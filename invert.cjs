function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert

    if ( typeof obj !== 'object' && !Array.isArray(obj) && obj == undefined && obj == null && obj == '' && typeof obj == 'string') {
        return {}
    }else if (Array.isArray(obj)){
        let reverseObject = {}
        for (let [key,val] of Object.entries(obj)){
            reverseObject[val] = key
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

console.log(typeof 'gggg')