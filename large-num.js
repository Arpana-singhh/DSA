// Method 1
let num = [1, 6, 10, 9, 3, 0, 7];
let lg_num=num[0];
for(let i = 0 ; i < num.length ; i++){
    
if( lg_num < num[i]){
    
     lg_num = num[i]
  
}

}
console.log("Largest Number from Array " + lg_num)

// Method 2
// let num = [1, 6, 10, 9, 3, 0, 7];
// let lg_num = Math.max(...num);

// console.log("Largest Number from Array: " + lg_num);


// Method 3
// let num = [1, 6, 10, 9, 3, 0, 7];

// let lg_num = num.reduce((max, current) => {
//   return current > max ? current : max;
// });

// console.log("Largest Number from Array: " + lg_num);

// Method 4 Recursion
// function findMax(arr, i = 0, max = arr[0]) {
//   if (i >= arr.length) return max;
//   if (arr[i] > max) max = arr[i];
//   return findMax(arr, i + 1, max);
// }

// let num = [1, 6, 10, 9, 3, 0, 7];
// console.log("Largest Number from Array: " + findMax(num));

