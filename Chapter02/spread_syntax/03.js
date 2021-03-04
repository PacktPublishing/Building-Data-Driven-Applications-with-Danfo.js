function data_func(age, firstName, lastName, year) {
    console.log(`Age: ${age}, FirstName: ${firstName}, LastName: ${lastName}, Year: ${year}`);
}

let data = [30, "John", "Neumann", '1948']

data_func(...data)

//output Age: 30, FirstName: John, LastName: Neumann, Year: 1984 
