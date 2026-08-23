function twoSum(nums, target) {
    let seen = new Set();
    let result = [];
    for(let i = 0 ; i < nums.length; i++){
    let needed = target - nums[i];
     if(seen.has(needed)){
        result.push ([nums.indexOf(needed), i]);
     }
     seen.add(nums[i]);

    }
    return result;
}
let target = 5;
let nums = [2, 7, 11, 15, 3, 4, 1];
const sumIndices  = twoSum(nums, target);
console.log("Indices of numbers that add up to target:", sumIndices);