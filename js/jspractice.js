function reverseArray(array) {
  var retArr = [];
  var index = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    retArr.push(array[i]);
    index++;
  }
  return retArr;
}

function reverseArrayInPlace(array) {
  var lastIndex = array.length - 1;
  for (let i = 0; i < array.length / 2; i++) {
    let tmp = array[i];
    array[i] = array[lastIndex];
    array[lastIndex] = tmp;

    lastIndex--;
  }
  return array;
}

// var test = [1, 2, 3, 4, 5, 6];
// var test = ["A", "B", "C", "D"];
// console.log(reverseArray(test));
// console.log(reverseArrayInPlace(test));

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

function arrayToList(arr) {
  var node = {};
  var parent = {};
  var list = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let arr = [];

  for (let node = list; node; node = node.rest) {
    if (node.rest == null) {
      break;
    }
    arr.push(node.value);
  }
  return arr;
}

function prepend(e, list) {
  let retList = {};
  retList.value = e;
  retList.rest = list;
  return retList;
}

function nth(list, index) {
  let count = 0;
  for (let node = list; node; node = node.rest) {
    if (count == index) {
      return node.value;
    }
    count++;
  }
  return undefined;
}
// console.log(listToArray(arrayToList([1, 2, 3, 4, 5])));
let obj = arrayToList([1, 2, 3, 4, 5]);

// console.log(listToArray(obj));
// console.log(prepend(10, null));
// console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));
