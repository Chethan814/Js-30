var argumentsLength = function(...args) {
    let num = 0
    for(let i = 0 ; i < args.length ; i++ ){
        num++
    }
    return num
};

// other option is to 

// return args.length this will return the number of arguments 

console.log(argumentsLength(1,1,3,"djfd"));