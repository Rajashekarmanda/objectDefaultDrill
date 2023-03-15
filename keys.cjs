function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys

    if (typeof obj !== 'object' || obj === undefined || obj === null || obj === '' || obj === 0 || typeof obj === 'string') {
        return []
    } else {
        let arrProperties = []
        for (let i in obj) {
            arrProperties.push(i)
        }
        return arrProperties
    }
}

module.exports = keys