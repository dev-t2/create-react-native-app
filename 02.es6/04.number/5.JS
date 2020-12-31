console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));

console.log(9007199254740995 - 10);
console.log(9007199254740995n - 10n);

const a = 9007199254740995;
const b = 10;
const result1 = a - b;

console.log(Number.isSafeInteger(a), Number.isSafeInteger(b), Number.isSafeInteger(result1));
console.log('9007199254740995 - 10 =', result1);

const c = 9007199254740991;
const d = 10;
const result2 = c - d;

console.log(Number.isSafeInteger(c), Number.isSafeInteger(d), Number.isSafeInteger(result2));
console.log('9007199254740991 - 10 =', result2);
