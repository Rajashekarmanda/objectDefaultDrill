function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject

    if (typeof obj !== 'object' || typeof obj === 'string' || obj == undefined || obj == null || obj == '') {
        return {}
    } else if (Array.isArray(obj)) {
        if (obj.length > 0) {
            let returnArr = {}
            for (let i = 0; i < obj.length; i++) {
                returnArr[i] = obj[i]
            }
            return returnArr
        } else {
            return {}
        }
    } else {
        if (cb == undefined) {
            return obj
        } else {
            let finalObj = {}
            for (let i in obj) {
                let data = cb(i, obj[i])
                finalObj[i] = data
            }
            return finalObj
        }
    }
}
module.exports = mapObject;