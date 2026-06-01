let a = [0, 1, 0, 5, 4];

let b = []; // non-zero
let c = []; // zero

for (let i = 0; i < a.length; i++) {
  if (a[i] === 0) {
    c.push(a[i]);
  } else {
    b.push(a[i]);
  }
}

let result = b.concat(c);

console.log(result); // [1, 5, 4, 0, 0]