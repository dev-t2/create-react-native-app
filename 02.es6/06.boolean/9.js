const name = 'mike';

const getDefaultName = () => {
  console.log('called getDefaultName');

  return 'default name';
};

console.log(name ?? getDefaultName());
console.log(name || getDefaultName());
