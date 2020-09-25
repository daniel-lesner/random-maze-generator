export const randomNumber = (startRange, endRange) => {
    return Math.floor(Math.random() * Math.floor(1 + endRange - startRange) + startRange)
}

export const range = (startRange, endRange) => {
    let i, result = [];

    for (i = startRange; i < endRange; i++) {
        result.push(i);
    }
    return result;
}



export const checkIfArrayIsIn3DArray = (Array, _3DArray) => {
    let i,j, isEqual = false

    for (i of range(0, _3DArray.length)) {

        for (j of range(0, _3DArray[i].length)) {

            if (_3DArray[i][j].toString() == Array.toString()) {
                isEqual = true
                break
            }
        } 
    } 
    return isEqual
}

export const checkIfArrayIsIn2DArray = (Array, _2DArray) => {
    let i, isEqual = false
    // var foo = Array.from(Array(_2DArray.length).keys())

    for (i of range(0, _2DArray.length)) {

            if (_2DArray[i].toString() == Array.toString()) {
                isEqual = true
                break
        } 
    }
    return isEqual
}