/* 

! ==============================================================

? map() in js -> this method helps to apply the formula or function to each element in array better then loops or iterations . it take 3 argus element, index and arr

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

! ============================================================

? filter() in js : it will return the element which codition is true like number is greater then 10 or even number like that . it take 3 argus element, index and arr

let arr = [10,20,3,2,0,3,5,2,4,8]

let filteredArray = arr.filter((value,index,arr)=> {
    return value % 2 === 0
})

console.log(filteredArray);

! ===========================================================

? Reduce() in js : it will return the sum of the numbers like it will sum the values inside teh arrary . it will take the previces value and curent value 

let arr = [10 , 4 , 5, 3, 9, 22, 20]

let reducearr = arr.reduce((preValue, curValue,)=>{
    return preValue + curValue
})

console.log(reducearr);

===================================================














*/