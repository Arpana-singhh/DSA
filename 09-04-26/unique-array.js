let a = [1, 2, 2, 1, 3];
let b = [];

for (let i = 0; i < a.length; i++) {
  if (!b.includes(a[i])) {
    b.push(a[i]);
  }
}

console.log(b);c