let arr = [1,2,3,4];
let k = 3;

for (let i = 0; i < k; i++) {
    let last = arr.pop();
    arr.unshift(last);
}

console.log(arr); // [2,3,4,1]