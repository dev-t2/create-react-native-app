const person = {};
// const name = person.name === undefined || person.name === null ? 'unknown' : person.name;
const name = person.name ?? 'unknown';

console.log(name);
