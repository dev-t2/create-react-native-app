console.log(Math.random());
console.log(Math.max(30, 10, 55));
console.log(Math.pow(5, 3));

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomInt(0, 10));
console.log(getRandomInt(0, 10));
console.log(getRandomInt(0, 10));
