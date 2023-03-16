function keys(obj) {
    if (Array.isArray(obj) || typeof obj == 'object' && obj !== ''){
        let keysArray = []
        for (let i in obj) {
            keysArray.push(i)
        }
        return keysArray
    }
    return []
}

module.exports = keys