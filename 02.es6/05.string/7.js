const s1 = 'This is my car. The car is mine.';

console.log(s1.split(' '));

const arr = s1.split('.');

console.log(arr);
console.log(arr.map((item) => item.trim()));
console.log(s1.split(' ').join());
console.log(s1.split(' ').join('..'));
