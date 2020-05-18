class Person {
  constructor(name) {
    this.name = name;
    this.address = {
      findAddress() {
        if (this.name === "John") {
          return "No address details";
        }
        return "Hyderabad";
      },
    };
  }
}

const member = new Person("John");
console.log(typeof Person, typeof member, typeof member.address.findAddress);


const naturalNumbers = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(naturalNumbers.reduce(reducer));

console.log(naturalNumbers.reduce(reducer, 10));

