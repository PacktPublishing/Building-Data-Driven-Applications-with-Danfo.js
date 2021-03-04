//Old method of accessing an array
let data = [20, "John", "Doe", "2019"];

let firstName = data[1];
let age = data[0];
let lastName = data[2];
let year = data[3];

//Using Destructuring
let data2 = [20, "John", "Doe", "2019"];
let [ age1, firstName1, lastName1, year1] = data2


//Destructuring also works on objects, as shown in the following code:
let data3 = {
    age: 20,
    firstName: "john",
    lastName: "Doe",
    year: 2019
}

let { age2, firstName2, lastName2, year2 } = data3