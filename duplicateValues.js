const c = new Object();
let z = [1, 2, 5, 3, 1, 4, 5, 3, 4, 1, 3];
var a = [];
for (var i = 0; i < z.length; i++) {
  if (!a.includes(z[i])) {
    a.push(z[i]);
  }
}

console.log('DuplicateValue: Unique value array is =>', a);

uniqueArray = z.filter(function (item, pos) {
  //console.log(item, pos,z.indexOf(item));
  return z.indexOf(item) == pos;
});
//uniqueArray = z.filter((item, pos) => z.indexOf(item) == pos)
console.log('Unique value array using filter =>', uniqueArray);

var objectCount = z.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur] = ++acc[cur];
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});
console.log('number of elements eact values ', objectCount);
