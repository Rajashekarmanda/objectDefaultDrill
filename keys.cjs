function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys

    let arrProperties = []

    for (let i in obj) {

        arrProperties.push(i)        
    }

    return arrProperties
}

module.exports = keys