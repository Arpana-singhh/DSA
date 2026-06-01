// let a = [60, 10, 20];

// let max = a[0];
// let secMax = a[0];
// for(let i = 1; i <= a.length - 1; i++){
//     if(a[i]>max){
//         max=a[i];
//     }
// }
// for(let j = 0; j <= a.length - 1; j++){
//    if (a[j] !== max){
//       if (a[j] > secMax){
//         secMax = a[j]
//       }
//    }
// }

// console.log("Second Largest Number from array", secMax)

let a = [60, 60, 30, 30, 30];
let max = a[0], secMax = -Infinity;

for (let i = 0; i < a.length; i++) {
  if (a[i] > max) max = a[i];
}

for (let i = 0; i < a.length; i++) {
  if (a[i] !== max && a[i] > secMax) {
    secMax = a[i];
  }
}

console.log(secMax);
