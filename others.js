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

let arr = [45,6,49,45,23,91]
 arr.sort((a,b)=>a-b)
console.log(arr);

console.log(Math.ceil(23/4))







