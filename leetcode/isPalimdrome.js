// var isPalindrome = function(x) {
//    const data = Number(x.toString().split("").reverse().join(""));

//    if (data == x){
//       return true ;
//    }else {
//       return false;
//    }

// };

// var x = 121;

// const result = isPalindrome(x);
// console.log(result);


var isPalindrome = function(x) {
    if (x < 0) return false;

    let str = x.toString();
    let start = 0;
    let end = str.length - 1;
    let mid = Math.floor(str.length / 2);
    let flag = true;

    for (let i = 0; i < mid; i++) {
        if (str[start] === str[end]) {
            start++;
            end--;
        } else {
            flag = false;
            return flag;
        }
    }

    return flag;
};

var x = -121;
const result = isPalindrome(x);
console.log(result);