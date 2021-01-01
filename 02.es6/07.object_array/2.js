const obj = {
  age: 21,
  name: 'mike',
};

obj.city = 'seoul';
obj.age = 30;

console.log(obj);

delete obj.city;

console.log(obj);

delete obj['name'];
console.log(obj);
