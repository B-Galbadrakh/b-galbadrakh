(function() {
  //Setting filter function in Stirng object
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
})();
