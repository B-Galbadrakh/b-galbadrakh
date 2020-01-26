(function() {
  //   Setting filter function in Stirng object
  String.prototype.filter = function(removeingWord) {
    return this.replace(removeingWord, "");
  };

  let b = new String("This house is not nice!");
  console.log(b.filter("not"));

  //   Setting bubblesort in Object class
  Object.prototype.bubbleSort = function() {
    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        if (arr[i] > arr[j]) {
          let tmp = arr[j];
          arr[j] = arr[i];
          arr[i] = tmp;
        }
      }
    }
    return arr;
  };
  let arr = [16, 0, -6, 3, 5, 4, -3, 5, 6, -8, 6];
  console.log(arr.bubbleSort());

  //   Teacher object

  var Person = function() {};

  Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
  };

  Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old";
  };

  var gal = new Person();
  gal.initialize("galaa", 20);
  //   console.log(gal.describe());

  var test = new Person();
  test.initialize("test", 19);
  //   console.log(test.describe());

  var Student = function() {};
  Student.prototype = new Person();
  Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
  };

  var me = new Student();
  me.initialize("galaa");
  me.learn("inheritance");

  var Teacher = function() {};

  Teacher.prototype = new Person();
  Teacher.prototype.teach = function(subject) {
    return this.name + " teaches " + subject;
  };

  var teacher = new Teacher();
  teacher.initialize("Professor", 32);
  //   console.log(teacher.describe());
  console.log(teacher.teach("JS"));
})();
