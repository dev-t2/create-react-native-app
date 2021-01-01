function makeObject1(key, value) {
  const obj = {};
  obj[key] = value;

  return obj;
}

function makeObject2(key, value) {
  return { [key]: value };
}
