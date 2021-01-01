const obj1 = {
  age: 21,
  name: 'mike',
};

const obj2 = new Object({
  age: 21,
  name: 'mike',
});

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

for (const [key, value] of Object.entries(obj1)) {
  console.log(key, value);
}
