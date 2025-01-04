var map = function(arr, fn) {
    let returnArray = []
    for (let i = 0; i < arr.length; i++) {
        returnArray[i] = arr[i] + fn;
    }
    return returnArray
};

console.log(map([1,2,3],42));