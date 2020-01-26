const makeCounter = function() {
  let privateCounter = 0;
  let tasks = [];

  function changeBy(val, ind) {
    // privateCounter += val;
    if (ind == 1) {
      tasks.push(val);
    } else {
      tasks.pop(val);
    }
  }
  return {
    addTask: function(val) {
      changeBy(val, 1);
    },
    removeTask: function(val) {
      changeBy(val, -1);
    },
    viewList: function() {
      return tasks;
    }
  };
};

const a1 = makeCounter();

a1.addTask("task-1");
a1.addTask("task-2");

console.log(a1.viewList());

a1.removeTask();
console.log(a1.viewList());
