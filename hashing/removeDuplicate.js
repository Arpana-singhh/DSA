
function removeDuplicate(nums){
    const s = new Set(nums);
//     for (let num of nums){
//         s.add(num);
//     }
//  console.log(...s)
        return [s];
}

const nums = [1, 2, 2, 4, 1]
const result = removeDuplicate(nums)

console.log(result);