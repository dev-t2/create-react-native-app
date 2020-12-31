const s1 = 'This is my car. The car is mine.';

console.log(s1.substr(0, 4));
console.log(s1.substr(5, 2));
console.log(s1.substr(16));

let pos = s1.indexOf(' ');

console.log(s1.substr(0, pos));

pos = s1.lastIndexOf(' ');

console.log(s1.substr(pos + 1));
console.log(s1.slice(5, 7));
