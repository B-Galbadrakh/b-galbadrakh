// const personProto = {
//   eat() {
//     console.log("eating");
//   }
// };

// const bob = Object.create(personProto);
// bob.name = "bob";
// bob.eat();

// const personProto = { eat: alert("eating") };
// const bob = Object.create(personProto);
// bob.name = "Bob";
// bob.eat();

function PersonProto(name) {
  this.name = name;
}

const bob = new PersonProto("bob");
PersonProto.prototype.eat = function() {
  console.log("eating");
};
bob.eat();
console.log(PersonProto.prototype);
console.log(bob.__proto__);

// class PersonProto {
//   constructor(name) {
//     this.name = name;
//   }
//   eat() {
//     console.log("eating");
//   }
// }

// const bob = new PersonProto('bob');
// bob.eat();
