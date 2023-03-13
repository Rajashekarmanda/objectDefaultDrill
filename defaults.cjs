function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults

    let objectReturn = {...defaultProps,...obj}

    // let finalObj = defaultProps

    // for (let every in obj ) {

    //     finalObj[every] = obj[every]
    // }

    // return finalObj

    return objectReturn
}

module.exports = defaults

