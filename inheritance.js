const o = {
  a: 2,
  m: function () {
    return this.a + 1;
  },
};

console.log(o.m()); // 3
// When calling o.m in this case, 'this' refers to o

const p = Object.create(o);
p.a = 7;
console.log('inheritance ', p.a);
console.log('parent object value ', o.a);
