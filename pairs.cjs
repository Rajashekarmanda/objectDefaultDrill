function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs

    if (typeof obj !== 'object' && obj == undefined && obj == null && obj == '' && Array.isArray(obj)) {
        return []
    } else {
        let arrayConvert = []
        for (let each in obj) {
            arrayConvert.push([each, obj[each]])
        }
        return arrayConvert
    }
}

module.exports = pairs