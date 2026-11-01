// let nums1 = [1,2,3,0,0,0]
// let nums2 = [2,5,6]
// for (let i = 0; i < nums2.length; i++) {
//     nums1.push(nums2[i]);
// }

// const result = nums1.sort();
// console.log("Merged and sorted array:", result);

// let nums1 = [1,2,3,0,0,0]
// let nums2 = [2,5,6]
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};

