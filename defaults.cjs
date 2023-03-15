function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults

    if (Array.isArray(obj)) {
        return obj

    }else if (obj== undefined && obj==null ){
        return {}

    }else if (typeof obj == 'string'){
        let returnResult = {}
        for (let each in obj){
            returnResult[each] = obj[each]
        }
        return returnResult
        
    } else {
        let finalObj = defaultProps
        for (let eachKey in obj) {
            if (obj[eachKey] !== undefined && obj[eachKey] !== null && obj[eachKey] !== '') {
                finalObj[eachKey] = obj[eachKey]
            } else {
                finalObj[eachKey] = defaultProps[eachKey]
            }
        }
        return finalObj
    }
}

module.exports = defaults

