console.log('12'.padStart(5, '0'));
console.log('123'.padStart(5, '0'));
console.log('123'.padStart(5, '*'));
console.log('123'.padEnd(5, '*'));

const s1 = 'This is my car. The car is mine.';
console.log(s1.match(/T[^\s-]*/g));
