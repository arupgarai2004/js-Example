Array.prototype.myMap = function (callbackFn) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    /* call the callback function for every value of this array and       push the returned value into our resulting array
     */
    arr.push(callbackFn(this[i], i, this));
  }
  return arr;
};

var z = [1, 2, 3, 4, 5];
var myMapOutput = z.myMap((x) => {
  return x * 2;
});

console.log(myMapOutput);

Array.prototype.myFilter = function (callbackFn) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callbackFn.call(this, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
