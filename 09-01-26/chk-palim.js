
// Using Javascript Function
// function chkPlaimdrome(data){
//     let revData=data.split('').reverse().join('')
//     if (data == revData){
//         return "It is palimdrome"
//     }else {
//         return "It is not palimdrome"
//     }
// }

// let data="lolol"
// const result=chkPlaimdrome(data)
// console.log(result);


// Without Using Javascript Method - Manual Reverse
// function chkPalindrome(str){
//   let rev = ""

//   for (let i = str.length - 1; i >= 0; i--){
//     rev += str[i]
//   }

//   return str === rev ? "It is palindrome" : "It is not palindrome"
// }

// console.log(chkPalindrome("lolol"))


// Without Using Javascript Method - while loop
//  function chkPlaimdrome(data){
//     let left = 0;
//     let right = data.length-1;
//     while(left < right){
//         if(data[left] !== data[right]){
//             return "It is not a plaimdrome"
//         }

//         left ++;
//         right --
//     }
//     return "It is palimdrome"
//  }


// let data="lolol"
// const result=chkPlaimdrome(data)
// console.log(result);


// Without Using Javascript Method - for loop(See Carefully Isme kaise do condition ek saath define kiya hai)
// function chkPlaimdrome(data){
//   for (let left = 0, right = data.length - 1; left < right; left++, right--){
//     if (data[left] !== data[right]){
//       return "It is not a palindrome"
//     }
//   }
//   return "It is palindrome"
// }

// console.log(chkPlaimdrome("lolol"))
