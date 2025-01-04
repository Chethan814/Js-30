


var reduce = function(nums, fn, init) {
    let reduceArray = []
    for(i = 0 ; i < nums ; i++){
        init = nums[i]
        reduceArray.push(fn(nums[i], init))
    }
    return reduceArray
};

function fn(accum, curr){
    return accum + curr
}

