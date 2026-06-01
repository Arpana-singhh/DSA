// let arr1 = [1, 2, 3, 5, 4]
// let arr2 = [2, 3, 5, 1, 7, 8]
// let res=[]

// let set = new Set();

// for (let num of arr1){
//     set.add(num);
// }

// for (let num of arr2){
//     if (set.has(num)){
//         res.push(num);
//     }
    
// }
// // for (let i = 0 ; i < arr2.length ; i++){
// //     if (set.has(arr2[i])){
// //         res.push(arr2[i]);
// //     }
// // }

// console.log(res);

let arr1 = [1, 2, 3, 5, 4];
let arr2 = [2, 3, 5, 1, 7, 8];

let set1 = new Set(arr1);
console.log(set1);
let result = new Set();
console.log(result);

for (let num of arr2) {
  if (set1.has(num)) {
    result.add(num);
  }
}

console.log([...result]);