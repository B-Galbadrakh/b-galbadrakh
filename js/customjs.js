/*jshint esversion: 6  */

(function() {
  "use strict";

  function customMap(func, arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      newArr[i] = func(arr[i]);
    }
    return newArr;
  }

  // Function declaration of filter
  function customFilter(func, arr) {
    let newArr = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      var tmp = func(arr[i]);
      if (tmp != undefined) {
        newArr[index++] = tmp;
      }
    }
    return newArr;
  }

  describe("Checking custom map function", function() {
    context("returns array that each element multiplied by 10", function() {
      it("given array [1,2,3]", function() {
        assert.deepEqual(
          customMap(
            e => {
              return e * 10;
            },
            [1, 2, 3]
          ),
          [10, 20, 30]
        );
      });
    });
  });

  describe("Checking custom map function", function() {
    context("returns array that each element added by 5", function() {
      it("given array [1,2,3]", function() {
        assert.deepEqual(
          customMap(
            e => {
              return e + 5;
            },
            [1, 2, 3]
          ),
          [6, 7, 8]
        );
      });
    });
  });

  describe("Checking custom filter function", function() {
    context("returns array that each element equal to 3", function() {
      it("given array [1,2,3,3,3]", function() {
        assert.deepEqual(
          customFilter(
            e => {
              if (e == 3) return e;
            },
            [1, 2, 3, 3, 3]
          ),
          [3, 3, 3]
        );
      });
    });
  });

  describe("Checking custom filter function", function() {
    context("returns array that each has letter 'a'", function() {
      it('given array ["aaa", "ee", "ae", "ttt", "tttaa"]', function() {
        assert.deepEqual(
          customFilter(
            e => {
              if (e.indexOf("a") != -1) return e;
            },
            ["aaa", "ee", "ae", "ttt", "tttaa"]
          ),
          ["aaa", "ae", "tttaa"]
        );
      });
    });
  });
})();

// Function declaration
// function customMap(func, arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = func(arr[i]);
//   }
//   return newArr;
// }

// arr = [1, 2, 3, 3, 3, 3];
// newArr = customMap(e => {
//   return e * 10;
// }, arr);
// console.log(newArr);

// f = customFilter(e => {
//   if (e == 3) return e;
// }, arr);
// console.log(f);
