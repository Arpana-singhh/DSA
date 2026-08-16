
function removeDuplicate(nums){
    const s = new Set(nums);
//     for (let num of nums){
//         s.add(num);
//     }
//  console.log(...s)
        return [...s]
}

const nums = [1, 2, 2, 4, 1]
const result = removeDuplicate(nums)

console.log(result);


// const arr = [1, 2, 3, 2, 4, 1, 5];

// let unique = [];

// for (let i = 0; i < arr.length; i++) {
//     if (!unique.includes(arr[i])) {
//         unique.push(arr[i]);
//     }
// }

// console.log(unique);