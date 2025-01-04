let arr = [2, 10 , 20 , 30]
let newarr = []

for (let i = 0; i < arr.length; i++) {
    
    newarr[i] = arr[i] * 2;
    
}

console.log(newarr);

let maparray = [2, 10 , 20 , 30]

let doubleArray = maparray.map((value,index,arr)=>{
    return value * 2   
})

console.log(doubleArray);