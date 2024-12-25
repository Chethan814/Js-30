var createCounter = function(n) {
    let currentCount = n - 1;
    return function() {
      currentCount += 1;
      return currentCount;      
    };
  };

let counter1 = createCounter(10)

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());