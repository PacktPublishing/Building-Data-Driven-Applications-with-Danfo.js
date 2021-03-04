//Creating an array
let data = new Array(5)

console.log(data.length) // 5 
console.log(data) //  [empty × 5] 

data[0] = "20"

data[1] = "John"

data[2] = "Doe"

data[3] = "1948"

console.log(data) // ["20”, "John”,”Doe”,”1948”, empty] 

// try access index 4  
console.log(data[4]) //  undefined 