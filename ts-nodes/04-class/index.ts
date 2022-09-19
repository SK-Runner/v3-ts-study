class Shelby {

  firstName:string;
  lastName:string;
  fullName:string;

  constructor(firstName:string, lastName:string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + '·' + lastName;
  }
}

interface person {
  firstName:string;
  lastName:string;
  fullName:string;
}

const getName = function(person:person){
  return `hello ${person.fullName}`;
}

let person1 = new Shelby('Tommy','Shelby');
console.log(getName(person1))