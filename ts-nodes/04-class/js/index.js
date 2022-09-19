class Shelby {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + '·' + lastName;
    }
}
const getName = function (person) {
    return `hello ${person.fullName}`;
};
let person1 = new Shelby('Tommy', 'Shelby');
console.log(getName(person1));
