// let alp = process.argv[2];
// let alp_split=alp.split('')
// console.log(alp_split)
// let count = 0;
// let vowel = ['a', 'e', 'i', 'o', 'u'];
// for(let i = 0 ; i < alp_split.length; i++){
//     for(let j = 0 ; j < vowel.length; j++){
//       if(alp_split[i]==vowel[j]){
//         count = count + 1;   
//       }
//     }
// }

// console.log('The total number of vowel in the word ' +count)


let alp = process.argv[2];
let alp_split=alp.split('')
console.log(alp_split)
let count = 0;
let vowel = ['a', 'e', 'i', 'o', 'u'];
for(let i = 0 ; i < alp_split.length; i++){
    vowel.includes(alp_split[i]) ? count++ : null
}

console.log('The total number of vowel in the word ' +count)