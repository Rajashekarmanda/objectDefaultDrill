function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs


    let arrayConvert = []

    for (let each in obj) {

        arrayConvert.push([each,obj[each]])
    }

    return arrayConvert
}

module.exports = pairs