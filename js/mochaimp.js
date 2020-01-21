/*jshint esversion: 6  */

(function() {
  "use strict";

  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  describe("Max function", function() {
    context("returns max number from given two numbers", function() {
      it("max is 3", function() {
        assert.equal(max(2, 3), 3);
      });
    });
  });

  function maxOfThree(a, b, c) {
    if (a > b) {
      if (a > c) {
        return a;
      } else {
        return c;
      }
    } else if (b > c) {
      return b;
    } else {
      return c;
    }
  }
  describe("Max of Three", function() {
    context("returns max number from given three numbers", function() {
      it("max is 30", function() {
        assert.equal(maxOfThree(30, 20, 10), 30);
      });
    });
  });

  // 3. checks if passed argument is vowel or not
  function isVowel(a) {
    const vowels = ["a", "e", "i", "o", "u"];
    const b = a.toLowerCase();
    if (vowels.indexOf(b) != -1) {
      return true;
    } else {
      return false;
    }
  }
  describe("IsVowel", function() {
    context("returns true is given char is vowel", function() {
      it("a is true vowel", function() {
        assert.equal(isVowel("a"), true);
      });
    });
  });

  // 4. returns sum of array
  function sum(arr) {
    return arr.reduce((pre, loc) => {
      return pre + loc;
    });
  }
  describe("get sum of array", function() {
    context("returns sum of array", function() {
      it("[1, 2, 3, 4] sum is 10", function() {
        assert.equal(sum([1, 2, 3, 4]), 10);
      });
    });
  });

  // 5. returns multipliction of array
  function multiply(arr) {
    return arr.reduce((pre, loc) => {
      return pre * loc;
    }, 1);
  }
  describe("get sum of multiply of array", function() {
    context("returns multiplied sum of array", function() {
      it("[1, 2, 3, 4] multiply is 24", function() {
        assert.equal(multiply([1, 2, 3, 4]), 24);
      });
    });
  });
  // 6. reverse string
  function reverse(a) {
    let retVal = "";

    for (let i = a.length - 1; i >= 0; i--) {
      retVal = retVal + a.charAt(i);
    }
    return retVal;
  }
  describe("reverse given string", function() {
    context("reverse given string", function() {
      it("ratset gaj will be correct result", function() {
        assert.equal(reverse("jag testar"), "ratset gaj");
      });
    });
  });
  // returns longes word length of passed array of string argument
  function findLongestWord(a) {
    let longest = a[0];
    for (let i = 1; i < a.length; i++) {
      if (longest.length < a[i].length) {
        longest = a[i];
      }
    }
    return longest.length;
  }

  describe("Find longest word from given string array and return length", function() {
    context("find longest word from given string array", function() {
      it('from ["a", "aa", "aaa"] output will be 3', function() {
        assert.equal(findLongestWord(["a", "aa", "aaa"]), 3);
      });
    });
  });

  function filterLongWords(arr, l) {
    let retArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > l) {
        retArr.push(arr[i]);
      }
    }
    return retArr;
  }

  describe("Return array of strings from given array and length as argument", function() {
    context(
      "Return array of strings from given array and length as argument",
      function() {
        it("Expecting output of filterLongWords(['aa','aaa','aaaa','aaaaa'], 3) is ['aaaa','aaaaa']", function() {
          assert.deepEqual(filterLongWords(["aa", "aaa", "aaaa", "aaaaa"], 3), [
            "aaaa",
            "aaaaa"
          ]);
        });
      }
    );
  });

  function testMap() {
    const a = [1, 2, 3, 4];
    const r = a.map(b => {
      return b * 10;
    });
    return r;
  }

  describe("Return array each element multiplied by 10", function() {
    context("Return array each element multiplied by 10", function() {
      it("Expecting output of [1,2,3,4] is [10,20,30,40]", function() {
        assert.deepEqual(testMap([1, 2, 3, 4]), [10, 20, 30, 40]);
      });
    });
  });

  function testFilter() {
    const a = [1, 2, 3, 4, 3, 3];
    const r = a.filter(e => {
      return e == 3;
    });
    return r;
  }
  describe("Return array each element equal to 3", function() {
    context("Return array each element equal to 3", function() {
      it("Expecting output of [1, 2, 3, 4, 3, 3] is [3,3,3]", function() {
        assert.deepEqual(testFilter([1, 2, 3, 4, 3, 3]), [3, 3, 3]);
      });
    });
  });

  function testReduce() {
    const a = [1, 2, 3, 4, 3, 3];
    const r = a.reduce((prev, curr) => {
      return prev * curr;
    });
    return r;
  }
  describe("Return multiplication of each element", function() {
    context("Return multiplication of each element", function() {
      it("Expecting output of [1, 2, 3, 4, 3, 3] is 216", function() {
        assert.equal(testReduce([1, 2, 3, 4, 3, 3]), 216);
      });
    });
  });
})();
