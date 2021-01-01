const arr = [1, 2, 3];

arr.forEach((item) => console.log(item));
console.log('');

for (const item of arr) {
  console.log(item);
}
console.log('');

console.log(arr.some((item) => item === 2));
console.log(arr.every((item) => item === 2));
console.log(arr.includes(2));
console.log(arr.find((item) => item % 2 === 1));
console.log(arr.findIndex((item) => item % 2 === 1));
