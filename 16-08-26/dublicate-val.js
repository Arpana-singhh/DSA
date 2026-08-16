let arr = [1, 2, 3, 1, 3, 1];
let seen = new Set();
let res = new Set();

for (let i = 0 ; i < arr.length; i++){
    if(seen.has(arr[i])){
        res.add(arr[i]);
    }
        seen.add(arr[i]);
}

console.log([...res])