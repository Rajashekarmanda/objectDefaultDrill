function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert

    let reverseObj = {}

    for (let each in obj ) {

        // reverseObj.push({[obj[each]]: each})

        reverseObj[obj[each]] = each
    }

    return reverseObj


}

module.exports = invert;