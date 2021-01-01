const arr1 = [1, 2, 3];
const obj1 = { age: 23, name: 'mike' };

const arr2 = [...arr1];
const obj2 = { ...obj1 };

arr2.push(4);
obj2.age = 80;
