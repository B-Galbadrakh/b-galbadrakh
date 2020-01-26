const john = (function(id) {
  let idd = id;
  let name = "Default";
  let employer = { name: "MUM" };

  let getName = function() {
    return name;
  };
  let getEmployerName = function() {
    return employer.name;
  };
  let getId = function() {
    return idd;
  };

  return {
    xGetName: getName,
    xGetEmployerName: getEmployerName,
    xGetId: getId
  };
})(980000);

// const john = Employee(980000);

// console.log(john.xGetName());
// console.log(john.xGetEmployerName());
// console.log(john.xGetId());
