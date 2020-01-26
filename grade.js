function makeGrade(students, correct) {}

let students = [
  { name: "Jack", answers: ["a", "b", "c", "b", ""] },
  { name: "Lisa", answers: ["b", "b", "b", "b", "b"] },
  { name: "Rita", answers: ["a", "b", "c", "a", "d"] },
  { name: "Bob", answers: ["c", "d", "b", "a", "b"] }
];

let a = (makeGrade(students, ["a", "b", "c", "a", "d"]).retArr = "test");
console.log(a);
// returns [{name: "Jack", grade: "D"}, {name: "Lisa", grade: "F"},
// {name: "Rita", grade: "A"}, {name: "Bob", grade: "F"}]
makeGrade(students, ["b", "b", "b", "b", "b"]); // returns [{name: "Jack", grade: "F"}, {name: "Lisa", grade: "A"},
// {name: "Rita", grade: "F"}, {name: "Bob", grade: "D"}]
makeGrade(students, ["a", "b", "c", "b", "b"]); // returns [{name: "Jack", grade: "C"}, {name: "Lisa", grade: "F"},
// {name: "Rita", grade: "C"}, {name: "Bob", grade: "F"}]
