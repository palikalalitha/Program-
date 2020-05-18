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
