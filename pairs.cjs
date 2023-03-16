function pairs(obj) {
    if (!Array.isArray(obj) && typeof obj != 'object' || obj == null){
        return []
    } else {
        let arrayPairs = []
        for (let index in obj) {
            arrayPairs.push([index, obj[index]])
        }
        return arrayPairs
    }
}
module.exports = pairs