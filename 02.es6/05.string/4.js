const s1 = 'abcd';
const c1 = s1[1];

console.log(c1);

const s2 = 'abcd';
// s2[1] = 'z';

console.log(s2);

const input = 'This is my car. The car is mine.';
const output = input.replace('car', 'bike');

console.log({ input, output });
console.log(input.replace(/car/g, 'bike'));
