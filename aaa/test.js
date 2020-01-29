// function User(name) {
//   this.name = name;
// }

// User.prototype.sayHi = function() {
//   alert(this.name);
// };

// let user = new User("John");
// user.sayHi();

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }

// let user = new User("john");
// user.sayHi();

// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter();

// console.log(counter.up()); // ?
// console.log(counter.up()); // ?
// console.log(counter.down()); // ?

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   console.log(this.name);
// };
// let rabbit = new Rabbit("Rabbit");

// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();

// Ext.application({
//   Launch: function() {
//     Ext.Msg.alert("Hello there from Sencha Touch!");
//   }
// });

function Foo(){
    this.a = 

}   
var a = {
  x: 10,
  calculate: function(z) {
    return this.x + this.y + z;
  }
};

var b = {
  y: 20,
  __proto__: a
};

var c = {
  y: 30,
  __proto__: a
};

console.log(b.calculate(30));
console.log(c.calculate(40));
