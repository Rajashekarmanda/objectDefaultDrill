function mapObject(obj, cb) {
    if (typeof obj !== 'object' || typeof obj === 'string' || obj == undefined || obj == null || obj == '') {
        return {}
    } else {
        if (typeof cb !== 'function') {
            return obj
        } else {
            let mapedpObject = {}
            for (let index in obj) {
                let callBackResponse = cb(obj[index], index)
                mapedpObject[index] = callBackResponse
            }
            return mapedpObject
        }
    }
}
module.exports = mapObject;