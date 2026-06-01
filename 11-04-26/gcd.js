// let n1 = 12;
// let n2 = 18;

// let fact1 = [];
// let fact2 = [];

// for(let i = 1 ; i <= n1 ; i++){
//     if (n1 % i == 0){
//         fact1.push(i);
//     }
// }

// for(let i = 1 ; i <= n2 ; i++){
//     if (n2 % i == 0){
//         fact2.push(i);
//     }
// }

// console.log(fact1);
// console.log(fact2);

// let res = [];

// for (let j = 0; j < fact1.length; j++) {
//     if (fact2.includes(fact1[j])) {
//         res.push(fact1[j]);
//     }
// }

// console.log(res);

// let gcd = Math.max(...res);
// console.log("GCD:", gcd);

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(12, 18)); // 6