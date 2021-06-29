// js class syntax

class Student {
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  static enrollStudent(){
    return `enroll student`;
  }
}
let firstStudent = new Student("hem","luck");
let secondStudent = new Student("ram","shyam");

console.log(firstStudent.fullName());
console.log(Student.enrollStudent());

