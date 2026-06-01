let num = '123'
let n_sep=num.split('')
let numArr = n_sep.map(item => Number(item));
let sum = 0;
console.log(numArr)
for(let i =0 ; i < numArr.length ; i++ ){
  sum += numArr[i]
}
console.log("The sum of digit is " +sum)