const arr = [1, 2, 3];

arr.push(4);

console.log(arr.pop());
console.log(arr);

arr.splice(1, 1);
console.log(arr);

arr.splice(1, 0, 10, 20, 30);
console.log(arr);

arr.splice(1, 3, 40, 50);
console.log(arr);

arr.sort();
console.log(arr);

arr.sort((a, b) => (a % 10) - (b % 10));
console.log(arr);
