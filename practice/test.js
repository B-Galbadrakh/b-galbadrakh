// (function() {
//   class Person {
//     constructor() {
//       console.log("constructor called");
//     }

//     method1() {
//       console.log("metho1 called");
//     }
//   }

//   let a = new Person();
//   a.method1();
//   console.log(a.__proto__);
// })();
// (function() {
//   let animal = {
//     eats: true
//   };

//   let rabbit = {
//     jumps: true
//   };

//   rabbit.__proto__ = animal;
//   console.log(rabbit);
// })();

(function() {
  class User {
    constructor(name) {
      this.name = name;
    }
    get name() {
      return this._name;
    }
    set name(v) {
      this._name = v;
    }
  }
  let galaa = new User("galaa");
  console.log(galaa);
})();
