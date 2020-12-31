const s1 = 'This is my car. The car is mine.';

console.log(s1.includes('car'));
console.log(s1.includes('my car'));
console.log(s1.includes('my car', 10));

console.log(s1.startsWith('This is'));
console.log(s1.startsWith('is'));

console.log(s1.endsWith('mine.'));
console.log(s1.endsWith('is'));
