/*
    class Student: Defines a class named Student.
    constructor(fname, lame, age, address): 
    A special method called when a new instance of Student is created. 
    It initializes the object with the provided fname (first name), lame (last name), age, and address.

    this.fname = fname: Assigns the first name to the fname property of the instance.
    this.lame = lame: Assigns the last name to the lame property of the instance 
    (Note: there is a typo here, it should probably be lname for last name).
    this.age = age: Assigns the age to the age property of the instance.
    this.address = address: Assigns the address to the address property of the instance.
*/
class Student {
  constructor(fname, lname, age, address) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.address = address;
  }

  /*
        setAddress(address): A method that sets the address of the Student instance.
        this.address = address: Updates the address property of the instance with 
        the new address provided as an argument.
    */
  setAddress(address) {
    this.address = address;
  }

  /*
    getAddress(): A method that returns the current address of the Student instance.
    return this.address: Returns the value of the address property.
  */
  getAddress() {
    return this.address;
  }
}

/*
    let student_one: Declares a variable named student_one.
    new Student("Ram", "Rao", 33, "KTM"): 
    Creates a new instance of the Student class with the first name 
    "Ram", last name "Rao", age 33, and address "KTM". 
    This instance is assigned to student_one.
*/
let student_one = new Student("Ram", "Rao", 33, "KTM");

/*
    let student_two: Declares a variable named student_two.
    new Student("Hari", "Prasad", 45, "Damak"): 
    Creates a new instance of the Student class with the first name 
    "Hari", last name "Prasad", age 45, and address "Damak". 
    This instance is assigned to student_two.
*/
let student_two = new Student("Hari", "Prasad", 45, "Damak");

/*
    student_two.setAdderss("America"): 
    Calls the setAdderss method on the student_two 
    instance to update its address to "America".
*/
student_two.setAddress("America");

console.log(student_two);

console.log(student_one.getAddress());

/*
    Summary of Code Functionality
    
    Class Definition: Defines a Student class with properties for first name, last name, age, and address.
    Constructor: Initializes new Student instances with the provided values.

    Methods:
        setAdderss(address): Updates the address property of a Student instance.

        getAddress(): Returns the current address of a Student instance.

    Instance Creation: Creates two Student instances (student_one and student_two) with initial values.

    Property Update: Updates the address of student_two.
    
    Logging: Logs the updated student_two object and the address of student_one to the console.
*/
