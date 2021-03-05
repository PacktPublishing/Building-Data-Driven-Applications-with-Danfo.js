class User {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }
}

let Person1 = new User("John", "Benjamin", "john@some-email.com")
console.log(Person1.getFullName());
console.log(Person1.getEmail());

// outputs 
// "John Benjamin"
// "john@someemail.com" 


let Person2 = new User("John", "Benjamin", "john@some-email.com")
let Person3 = new User("Hannah", "Joe", "hannah@some-email.com")

console.log(Person2.getFullName());
console.log(Person3.getFullName());

//outputs 
// "John Benjamin"
// "Hannah Montanna" 