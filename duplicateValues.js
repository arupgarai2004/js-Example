const c = new Object();
let z = [1, 2, 5, 3, 1, 4, 5, 3];
var a = [];
for (var i = 0; i < z.length; i++) {
  if (!a.includes(z[i])) {
    a.push(z[i]);
  }
}

console.log('DuplicateValue: Unique value array is =>', a);
