var once = function(fn) {
    let call = 0
    return function(...args){
        let [a,b,c] = args
        if(call == 0){
            call++
            return fn(a,b,c)
            
        }else{
            return undefined
        }

        
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1,2,3));  // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn

