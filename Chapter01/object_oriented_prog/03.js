// class User{
//     ...
// }

class Teacher extends User {
    constructor(firstName, lastName, email, userType, subject) {
        super(firstName, lastName, email) //calls parent class constructor 
        this.userType = userType
        this.subject = subject
    }
    getFullName() {
        return `Teacher: ${this.firstName} ${this.lastName}`;
    }
    getUserType() {
        return "Teacher"
    }
}

let teacher1 = new Teacher("Johnny", "Benjamin", "john@someemail.com", "Teacher", "Mathematics")
console.log(teacher1.getFullName());
console.log(teacher1.userType);
console.log(teacher1.subject);

//outputs 
// "Teacher: Johnny Benjamin"
// “Teacher”
// “Mathematics” 