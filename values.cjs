function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values


    if (typeof obj !== 'object' && obj == undefined && obj == null && obj == '' && typeof obj == 'number') {
        return []
    } else {
        let valObjet = []
        for (let i in obj) {
            valObjet.push(obj[i])
        }
        return valObjet
    }
}

module.exports = values;