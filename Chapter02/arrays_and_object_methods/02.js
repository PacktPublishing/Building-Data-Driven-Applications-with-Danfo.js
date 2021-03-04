/**
 * Some JavaScript array methods
 */

// Array.splice
let data = [1, 2, 3, 4, 5, 6]
data.splice(4, 1) // delete index 4 

console.log(data) // [1,2,3,4,6] 

data = [1, 2, 3, 4, 5, 6]
data.splice(4, 0, 10, 20) // add values between 5 and 6 
console.log(data) // [1,2,3,4,5,10,20,6] 


//Array.includes
data = [1, 2, 3, 4, 5, 6]
let temp = data.includes(6)
console.log(temp)

//Array slice
data = [1, 2, 3, 4, 5, 6]
data = data.slice(2, 4) // [3,4] 
console.log(data)

//Array.map
data = [1, 2, 3, 4, 5, 6]
let data2 = data.map((value, index) => {
    return value + index;
})
console.log(data2) // [1,3,5,7,9,11] 

//Array.filter
data = [1, 2, 3, 4, 5, 6]
data2 = data.filter((elem, index) => {
    return (index % 2 == 0)
})

console.log(data2) // [1,3,5] 