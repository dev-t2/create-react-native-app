const person = {
  getName: () => 'abc',
};
const name = person.getName?.();

console.log(name);
