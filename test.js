const obj = [
  { name: "width", value: "100px" },
  { name: "height", value: "100px" },
];

// { width: '100px', height: '100px' }

obj.reduce((acc, { name, value }) => {
  acc[name] = value;
  return acc;
}, {});

function parse(arr) {
  const obj = {};

  for (const el of arr) {
    obj[el.name] = el.value;
  }

  return obj;
}

console.log(parse(obj));
