var filter = function (arr, fn) {
    let returnArray = []
    for (i = 0; i < arr.length; i++) {
        returnArray = fn(arr[i], i)
    }
    return returnArray
};

filter