console.log(typeof new Boolean(true));
console.log(typeof new Number(1));
console.log(typeof new String('abc'));

const s1 = new String('abc');
s1.id = 123;

console.log('value:', s1.valueOf());
console.log('id:', s1.id);
