var compose = function(functions) {
    if(functions.length === 0){
        return (x)=> x
    }
    return function(x) {
        for(let i = functions.length - 1 ; i >= 0 ; i--){
            x = functions[i](x)
        }
        return x
    }
};

const functions = [x => x + 1, x => x * x, x => 2 * x];
const composedFn = compose(functions);
const result = composedFn(4);  // Output: 65
console.log(result);
