let data = {
    age: 20,
    firstName: "john",
    lastName: "Doe",
    year: 2019
}

let new_data = { ...data, degree: "Bsc", level: "expert" }
console.log(new_data)
//output 
// {
//     age: 20,
//     Degree: “Bsc”,
//     FirstName: “John”,
//     lastName: “Doe”,
//     Level: “expert”,
//     Year: 2019
// } 