// this is my answer 

var createCounter = function(init) {
    let currentCounter = init
    function increment(){
        return currentCounter += 1
    }
    let decrement = ()=>{
        return currentCounter -= 1
    }
    let reset = ()=> {
        return currentCounter = init
    }

    return {
        increment : increment,
        decrement : decrement,
        reset: reset
    }
    
};


const counter = createCounter(5)

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());

// this is more optimized answer

var createCounter = function(init) {
    let currentCounter = init
    function increment(){
        return currentCounter += 1
    }
    let decrement = ()=>{
        return currentCounter -= 1
    }
    let reset = ()=> {
        return currentCounter = init
    }

    return {
        increment : increment,
        decrement : decrement,
        reset: reset
    }
    
};

