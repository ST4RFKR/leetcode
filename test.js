<<<<<<< HEAD
//1

const arr = [1, 2, 2, 3, 4, 4, 5];
const unicNumbers = [... new Set(arr)]


// 2 

const users = [
    { id: 1, name: "Alex" },
    { id: 2, name: "John" },
];
let res = users.reduce((acc, el) => {
    acc[el.id] = el.name;
    return acc;
}, {});

const a = [1, 2, 2, 3, 3];
const b = [2, 3, 4];

function x(a, b) {

    const map = new Map();
    const result = []


    for (const num of a) {
        if (map.get(num) > 1) {
            continue;
        }
        map.set(num, (map.get(num) || 0) + 1)
    }

    for (const num of b) {
        if (map.get(num) > 1) {
            continue;
        }
        map.set(num, (map.get(num) || 0) + 1)

    }
    for (const [k, v] of map) {
        if (v === 2) {
            result.push(k)
        }
    }

    return result
=======
function deepEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  )
    return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }
>>>>>>> afdee73 (fix)

  return true;
}

<<<<<<< HEAD
const data = [
    { category: "fruit", item: "apple" },
    { category: "vegetable", item: "carrot" },
    { category: "fruit", item: "banana" },
];

//4
const groupByCategoty = (data) => {
    return data.reduce((acc, el) => {
        if (!acc[el.category]) {
            acc[el.category] = [];
        }
        acc[el.category].push(el.item)
        return acc
    }, {})

}
// console.log(groupByCategoty(data));


function isPallindr(str) {
    return str.split('').reverse().join('') === str
}

const arr1 = [1, 1, 2, 2, 2, 3];

function xx(nums) {
    const map = new Map();
    let max = -Infinity
    let maxKey = null

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    for (const [k, v] of map) {
        if (v > max) {
            max = v;
            maxKey = k;
        }
    }

    return maxKey;
}
console.log(xx(arr1));

=======
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }));
>>>>>>> afdee73 (fix)
