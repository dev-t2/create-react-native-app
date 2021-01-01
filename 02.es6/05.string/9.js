const taggedFunc = (strings, ...expressions) => {
  console.log({ strings, expressions });

  return 123;
};

const v1 = 10;
const v2 = 20;
const result = taggedFunc`a-${v1}-b-${v2}`;

console.log({ result });

taggedFunc`a-${v1}-b-${v2}-c`;
taggedFunc`a-${v1}-b-${v2}`;
taggedFunc`${v1}-b-${v2}`;
