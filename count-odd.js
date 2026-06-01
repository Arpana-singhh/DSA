let count = 0
let num = [1, 5, 6, 8, 9, 3, 0, 7];

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 !== 0){
        count += 1
    }
} 
console.log("Count of odd numbers "  + count) 
console.log(`Count of odd numbers ${count}`) // when you use literals than you dont need to space 

// Method 2
// let count = 0;
// let num = [1, 5, 6, 8, 9, 3, 0, 7];

// for (let n of num) {
//   if (n % 2 !== 0) {
//     count++;
//   }
// }
// console.log("Count of odd numbers: " + count);

// Method 3
// let count = 0;
// let num = [1, 5, 6, 8, 9, 3, 0, 7];

// num.forEach(n => {
//   if (n % 2 !== 0) {
//     count++;
//   }
// });
// console.log("Count of odd numbers: " + count);

// Method 4
// let num = [1, 5, 6, 8, 9, 3, 0, 7];

// let oddCount = num.filter(n => n % 2 !== 0).length;

// console.log("Count of odd numbers: " + oddCount);

// Method 5
// let num = [1, 5, 6, 8, 9, 3, 0, 7];

// let count = num.reduce((acc, n) => {
//   return n % 2 !== 0 ? acc + 1 : acc;
// }, 0);

// console.log("Count of odd numbers: " + count);

// Method 5  Recursion
// function countOdd(arr, i = 0) {
//   if (i >= arr.length) return 0;
//   return (arr[i] % 2 !== 0 ? 1 : 0) + countOdd(arr, i + 1);
// }

// let num = [1, 5, 6, 8, 9, 3, 0, 7];

// console.log("Count of odd numbers: " + countOdd(num));




