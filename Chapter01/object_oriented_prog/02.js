
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

class Teacher extends User { 
    getFullName(){ 
      return `Teacher: ${this.firstName} ${this.lastName}`; 
    } 
  
    getUserType(){ 
      return "Teacher" 
    } 
  
  } 
  
    
  
  let teacher1 = new Teacher("John", "Benjamin", "john@someemail.com") 
  console.log(teacher1.getFullName()); 
   
  //output 
  // "Teacher: John Benjamin"