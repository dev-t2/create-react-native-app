const obj = { name: 'mike', mother: { name: 'sara' } };
const {
  name,
  mother: { name: motherName },
} = obj;

console.log(name, motherName);
// console.log(mother);
