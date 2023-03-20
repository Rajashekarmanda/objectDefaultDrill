function defaults(obj, defaultProps) {
    if (Array.isArray(obj)) {
        return obj
    } else if (typeof obj == 'string' || obj == '' || obj == undefined || obj == null || defaultProps == undefined) {
        let defaultObject = {}
        for (let eachWord in obj) { defaultObject[eachWord] = obj[eachWord] } return defaultObject
    } else {
        let defaultObj = defaultProps
        for (let eachKey in obj) {
            obj[eachKey] !== undefined ? defaultObj[eachKey] = obj[eachKey] : defaultObj[eachKey] = defaultProps[eachKey]
        } return defaultObj
    }
}
module.exports = defaults
