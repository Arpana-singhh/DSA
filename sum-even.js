// Method 1
let sum = 0;
let num = [1, 5, 6, 8, 6, 3, 0, 1]
for(let i = 0 ; i < num.length; i++){  
    if(num[i]% 2 == 0){
        sum = sum + num[i]        
    }   
}
 console.log("Sum of Even Numbers", + sum)

// Method 2 
// let sum = 0;
// let num = [1, 5, 6, 8, 6, 3, 0, 1];

// for (let n of num) {
//   if (n % 2 === 0) {
//     sum += n;
//   }
// }

// console.log("Sum of Even Numbers:", sum);

// Method 3
// let sum = 0;
// let num = [1, 5, 6, 8, 6, 3, 0, 1];

// num.forEach(n => {
//   if (n % 2 === 0) sum += n;
// });

// console.log("Sum of Even Numbers:", sum);

// Method 4
// let num = [1, 5, 6, 8, 6, 3, 0, 1];

// let sum = num
//   .filter(n => n % 2 === 0)
//   .reduce((acc, val) => acc + val, 0);

// console.log("Sum of Even Numbers:", sum);

// Method4 Recursion
// let num = [1, 5, 6, 8, 6, 3, 0, 1];

// let sum = num.reduce((acc, val) => {
//   return val % 2 === 0 ? acc + val : acc;
// }, 0);

// console.log("Sum of Even Numbers:", sum);

// Call #	i	arr[i]	Even?	Return Value
// 1	0	1	❌ No	0 + sumEven(i=1)
// 2	1	5	❌ No	0 + sumEven(i=2)
// 3	2	6	✅ Yes	6 + sumEven(i=3)
// 4	3	8	✅ Yes	8 + sumEven(i=4)
// 5	4	6	✅ Yes	6 + sumEven(i=5)
// 6	5	3	❌ No	0 + sumEven(i=6)
// 7	6	0	✅ Yes	0 + sumEven(i=7)
// 8	7	1	❌ No	0 + sumEven(i=8)
// 9	8	—	—	i >= arr.length → return 0

// 🔁 Unwinding the stack:
// Now the results come back up:

// sumEven(7) = 0

// sumEven(6) = 0 + 0 = 0

// sumEven(5) = 0 + 0 = 0

// sumEven(4) = 6 + 0 = 6

// sumEven(3) = 8 + 6 = 14

// sumEven(2) = 6 + 14 = 20

// sumEven(1) = 0 + 20 = 20

// sumEven(0) = 0 + 20 = 20




