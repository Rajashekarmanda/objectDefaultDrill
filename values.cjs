function values(obj) {
    if (typeof obj == 'string' || obj == undefined || obj == null || obj == '') {
        return []
    } else {
        let valuesArray = []
        for (let index in obj) {
            valuesArray.push(obj[index])
        }
        return valuesArray
    }
}
module.exports = values;