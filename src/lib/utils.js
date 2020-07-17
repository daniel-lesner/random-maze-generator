export let randomNumber = (startRange, endRange) => {
    return Math.floor(Math.random() * Math.floor(1 + endRange - startRange) + startRange)
}

export let checkIfArrayIsIn3DArray = (Array, _3DArray) => {
    let isEqual = false

    for (let i = 0; i < _3DArray.length; i++) {

        for (let j = 0; j< _3DArray[i].length; j++) {

            if (_3DArray[i][j].toString() == Array.toString()) {
                isEqual = true
                break
            }
        } 
    } 
    return isEqual
}

export let checkIfArrayIsIn2DArray = (Array, _2DArray) => {
    let isEqual = false

    for (let i = 0; i < _2DArray.length; i++) {

            if (_2DArray[i].toString() == Array.toString()) {
                isEqual = true
                break
        } 
    }
    return isEqual
}