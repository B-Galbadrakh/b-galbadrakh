function sum() {
  var arr = JSON.parse(document.getElementById("prob4").innerHTML);
  var res = arr.reduce((pre, curr) => pre + curr);
  document.getElementById("sumResult").innerHTML = res;
}

function multiply() {
  var arr = JSON.parse(document.getElementById("prob4").innerHTML);
  var res = arr.reduce((pre, curr) => pre * curr);
  document.getElementById("multiplyResult").innerHTML = res;
}

function strToArray(a) {
  var chars = [];
  for (let i = 0; i < a.length; i++) {
    chars.push(a[i]);
  }
  return chars;
}

function reverse() {
  let str = document.getElementById("str").innerHTML;
  let strArr = strToArray(str);
  let result = [];
  result = strArr.reduce((pre, curr) => {
    return curr + pre;
  }, "");
  document.getElementById("reverseResult").innerHTML = result;
}

function filterLongWords() {
  var arr = ["aa", "aaa", "aaaa", "aaaaa"];
  var l = 3;

  document.getElementById("filterResult").innerHTML = arr.filter(e => {
    return e.length > l;
  });
}
