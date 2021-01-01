const [{ prop: x } = { prop: 123 }] = [];

console.log(x);

const [{ prop: y } = { prop: 123 }] = [{}];

console.log(y);
