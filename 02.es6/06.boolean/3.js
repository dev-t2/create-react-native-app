const c1 = 123;
const c2 = 'abc';
const v1 = c1 && c2;
const v2 = c1 && c2 && 0;
const v3 = c1 && 0 && c2;

console.log({ v1, v2, v3 });

const v4 = c1 || c2;
const v5 = '' || c2;

console.log({ v4, v5 });

const v6 = !!(c1 && 0 && c2);
const v7 = !!(c1 || c2);

console.log({ v6, v7 });
