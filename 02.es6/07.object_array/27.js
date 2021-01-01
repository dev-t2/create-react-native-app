const obj = { age: 21, name: 'mike', grade: 'A' };
const { age, ...rest } = obj;

console.log(rest);
