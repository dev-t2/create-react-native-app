console.log(Number.EPSILON);

const isSimilar = (x, y) => {
  return Math.abs(x - y) < Number.EPSILON;
};

console.log(isSimilar(0.1 + 0.2, 0.3));
