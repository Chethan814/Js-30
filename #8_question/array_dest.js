let arr = [x => x + 1, x => x * x, x => 2 * x]
let [a,b ,c] = arr


console.log(a(b(c(4))));
