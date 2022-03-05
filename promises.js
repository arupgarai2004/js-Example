////first example
const promise = new Promise((resolve, reject) => {
  var a = 3;
  if (a == 2) {
    setTimeout(() => {
      resolve('Promise has been excuted sucessfully!');
    }, 5000);
  } else {
    reject('Promise has been rejected');
  }
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((message) => {
    console.log(message);
  });

/// call API using fetch , which is a in build promise
let data = fetch('https://gorest.co.in/public/v2/users');

data
  .then((value) => {
    return value.json();
  })
  .then((dataAray) => {
    console.log(dataAray);
  })
  .catch((error) => {
    console.log(error);
  });

console.log('promise page End');
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log('Promise all=.', values); // [3, 1337, "foo"]
});
