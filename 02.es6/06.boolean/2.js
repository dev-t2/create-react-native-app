const c1 = 123;
const c2 = 'abc';

if (c1 && c2) {
  console.log('c1 && c2');
}

if (c1 || c2) {
  console.log('c1 || c2');
}

if (c1 && c2 && 0) {
  console.log('c1 && c2 && 0');
}

if (c1 && c2 && NaN) {
  console.log('c1 && c2 && NaN');
}

if (c1 && c2 && '') {
  console.log(`c1 && c2 && ''`);
}
