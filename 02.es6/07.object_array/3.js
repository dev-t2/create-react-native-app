const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

console.log(typeof arr1 === 'object');
console.log(Object.values(arr1));
console.log(arr1.map((item) => item + 1));
console.log(arr1.filter((item) => item >= 2));
console.log(arr1.reduce((acc, item) => acc + item, 0));
