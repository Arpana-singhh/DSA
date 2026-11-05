// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


// First Method : Without modifying original array 
// var runningSum = function(nums) {
//     let sum = 0
//     let arr = []

//     for(let i = 0 ; i < nums.length; i++){
//         sum = sum + nums[i]
//         arr.push(sum);
//     }
//     return arr 
    
// };

// let nums = [1, 2, 3, 4];
// console.log(runningSum(nums));


// Second Method : Without using another array variable (Splice method)
// var runningSum = function(nums) {
//     let sum = 0

//     for(let i = 1 ; i < nums.length; i++){
//         sum =  nums[i] + nums[i-1] 
//         nums.splice(i, 1, sum);

//     }
//     return nums 
    
// };

// let nums = [1, 2, 3, 4];
// console.log(runningSum(nums));


// Third Method : Without using another array variable (Original Array modified)
var runningSum = function(nums) {
    for(let i = 1 ; i < nums.length; i++){
        nums[i]=  nums[i] + nums[i-1] 

    }
    return nums 
};

let nums = [1, 2, 3, 4];
console.log(runningSum(nums));