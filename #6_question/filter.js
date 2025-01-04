let arr = [10,20,3,2,0,3,5,2,4,8]

let filteredArray = arr.filter((value,index,arr)=> {
    return value % 2 === 0
})

console.log(filteredArray);