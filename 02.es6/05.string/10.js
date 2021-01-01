const highlight = (strings, ...expressions) => {
  console.log({ strings, expressions });

  return strings.reduce(
    (acc, str, i) =>
      expressions.length === i ? `${acc}${str}` : `${acc}${str}<strong>${expressions[i]}</strong>`,
    ''
  );
};

const v1 = 10;
const v2 = 20;
const result = highlight`a ${v1} b ${v2}`;

console.log(result);

// highlight(['a ', ' b ', ''], v1, v2);
