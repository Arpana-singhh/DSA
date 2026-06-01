// let a = [1,2,3,4,5]
// let target = 6;
// let result = [];

// for(let i = 0 ; i < a.length; i++){
//     for(let j = i + 1 ; j < a.length ; j++){
//         if (a[i]+a[j] == target){
//             result.push([a[i], a[j]]); // store pair

//         }
//     }
// }

// console.log(result);

let arr = [1,2,3,4,5];
let target = 6;

let seen = new Set();
let result = [];

for (let i = 0; i < arr.length; i++) {
    let needed = target - arr[i];

    if (seen.has(needed)) {
        result.push([needed, arr[i]]);
    }

    seen.add(arr[i]);
}

console.log(result);