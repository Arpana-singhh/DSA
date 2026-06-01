function findMissing(arr) {
  const missing = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let next = arr[i + 1];

    while (next !== current + 1) {
      current++;
      missing.push(current);
    }
  }

  return missing;
}

console.log(findMissing([1, 2, 4, 5]));  
console.log(findMissing([1, 2, 4, 5, 8]));  

