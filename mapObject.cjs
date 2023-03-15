function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject

    if (typeof obj !== 'object' && typeof obj === 'string' && obj==undefined && obj==null && obj=='') {
        return {}
    } else {
        let finalObj = {}
        for (let i in obj) {
            let data = cb(i, obj[i])
            finalObj[i] = data
        }
        return finalObj
    }
}

module.exports = mapObject;