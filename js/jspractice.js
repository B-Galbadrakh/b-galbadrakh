/*jshint esversion: 6  */
/* global assert */
(function() {
  "use strict";

  function reverseArray(array) {
    var retArr = [];
    var index = 0;
    for (let i = array.length - 1; i >= 0; i--) {
      retArr.push(array[i]);
      index++;
    }
    return retArr;
  }

  describe("testing reverseArray", function() {
    it("return array[1,2,3] would be [3,2,1]", function() {
      assert.deepEqual(reverseArray([1, 2, 3]), [3, 2, 1]);
    });
    it("return array of ['A','B','C'] would be ['C','B','A']", function() {
      assert.deepEqual(reverseArray(["A", "B", "C"]), ["C", "B", "A"]);
    });
  });

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

  describe("testing reverseArrayInPlace", function() {
    it("return array[1,2,3] would be [3,2,1]", function() {
      assert.deepEqual(reverseArrayInPlace([1, 2, 3]), [3, 2, 1]);
    });
    it("return array of ['A','B','C'] would be ['C','B','A']", function() {
      assert.deepEqual(reverseArrayInPlace(["A", "B", "C"]), ["C", "B", "A"]);
    });
  });

  function arrayToList(arr) {
    var node = {};
    var parent = {};
    var list = {};
    for (let i = arr.length - 1; i >= 0; i--) {
      list = { value: arr[i], rest: list };
    }
    return list;
  }

  describe("Testing array to list", function() {
    it("[1,2,3] should return object", function() {
      assert.deepEqual(arrayToList([1, 2, 3]), {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: {}
          }
        }
      });
    });
  });

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

  describe("Testing list  to array", function() {
    it(" {value: 1,rest: {value: 2,rest: {value: 3,rest: {}}}} should return object", function() {
      assert.deepEqual(
        listToArray({
          value: 1,
          rest: {
            value: 2,
            rest: {
              value: 3,
              rest: {}
            }
          }
        }),
        [1, 2, 3]
      );
    });
  });

  function prepend(e, list) {
    let retList = {};
    retList.value = e;
    retList.rest = list;
    return retList;
  }

  describe("Testing prepend function", function() {
    it("prepend function prepend(10, prepend(20, null))", function() {
      assert.deepEqual(prepend(10, prepend(20, null)), {
        value: 10,
        rest: { value: 20, rest: null }
      });
    });

    it("prepend function prepend('B', prepend('A', null))", function() {
      assert.deepEqual(prepend("B", prepend("A", null)), {
        value: "B",
        rest: { value: "A", rest: null }
      });
    });
  });

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

  describe("Testing nth function", function() {
    it("nth elemenet nth(arrayToList([10, 20, 30]), 1) -> 20", function() {
      assert.equal(nth(arrayToList([10, 20, 30]), 1), 20);
    });
  });

  /**
   * Compares two objects for equal values in all properties and recursively for any objects that are property values
   * @param a any object
   * @param b another object to be compared
   * @returns {boolean} true if they are deep equal, else false
   */
  function deepEqual(a, b) {
    /* check to see if equal primitive values or same object reference */
    if (a === b) {
      return true;
    }

    /* must both be objects or else cannot have equal values (after first test)*/
    if (
      a === null ||
      typeof a !== "object" ||
      b === null ||
      typeof b !== "object"
    ) {
      return false;
    }

    let keysA = Object.keys(a),
      keysB = Object.keys(b);

    /* must have same number of properties */
    if (keysA.length !== keysB.length) {
      return false;
    }

    /* must have all the same properties and the values of properties must be the same */
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  let obj = { here: { is: "an" }, object: 2 };
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, { here: 1, object: 2 }));
  // → false
  console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
  // → true
  console.log(deepEqual(null, null));
  const x = { a: 1, b: 2 };
  const y = x;
  console.log(deepEqual(x, y));

  context("test cases from assignment", function() {
    let longWords;
    beforeEach(function() {
      let obj = { here: { is: "an" }, object: 2 };
    });

    describe("testing deepEqual", function() {
      it("object equal to itself", function() {
        assert.isTrue(deepEqual(obj, obj));
      });
      it("2 objs of equal values", function() {
        assert.isTrue(deepEqual(obj, { here: { is: "an" }, object: 2 }));
      });
      it("similar but not equal objs", function() {
        assert.isFalse(deepEqual(obj, { here: 1, object: 2 }));
      });
    });
  });
})();
