function a() {
  let b =100;
  b = 200;
  c();
  function c() {
    console.log('closure=>', b);
  }
}
a();

function randomFunc() {
  var obj1 = { name: 'Vivian', age: 45 };

  return function () {
    console.log('closure=>', obj1.name + ' is ' + 'awesome'); // Has access to obj1 even when the randomFunc function is executed
  };
}

var initialiseClosure = randomFunc(); // Returns a function

initialiseClosure();
