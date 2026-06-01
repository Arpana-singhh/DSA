let a = ["q", "q", "r", "s", "t", "t"]
let b = [...new Set(a)];
let feqCount={}
for(let i = 0 ; i < b.length ; i++){
let count = 0;
    for(let j = 0; j <= a.length; j++){
        if (b[i]===a[j]){
            count++;
        }
    }
    feqCount[b[i]] = count;
}
console.log("feqCount",  feqCount )

// let a = ["q", "q", "r", "s", "t", "t"];
// let b = [...new Set(a)];
// console.log(b)
// let feqCount = {};

// for (let i = 0; i < b.length; i++) {
//   let count = 0;
//   for (let j = 0; j < a.length; j++) {
//     if (b[i] === a[j]) {
//       count++;
//     }
//   }
//   feqCount[b[i]] = count;
// }

// console.log(feqCount);
