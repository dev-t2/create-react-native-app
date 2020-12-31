const v1 = Boolean(123);
const v2 = Boolean(0);

console.log(typeof v1, v1);
console.log(typeof v2, v2);

const v3 = Boolean('abc');
const v4 = Boolean('');

console.log(typeof v3, v3);
console.log(typeof v4, v4);

const v11 = !!123;
const v12 = !!0;
const v13 = !!'abc';
const v14 = !!'';

console.log(typeof v11, v11);
console.log(typeof v12, v12);
console.log(typeof v13, v13);
console.log(typeof v14, v14);
