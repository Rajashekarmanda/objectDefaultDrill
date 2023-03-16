function invert(obj) {
    if (Array.isArray(obj) || typeof obj == 'object') {
        let invertedArray = {}
        for (let index in obj) {
            invertedArray[obj[index]] = index
        }
        return invertedArray
    }
    return {}
}
module.exports = invert;
