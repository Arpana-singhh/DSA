let a = [25, 8, 4, 9, 7];
let n;
let perfectSqr = [] ;

for(let i = 0 ; i < a.length ; i++){
    n=a[i];
    for (let j = 1 ; j < n ; j++){
        if ( j * j == n ){
            perfectSqr.push(n);
        }
    } 
}

console.log(perfectSqr)
// My solution Time complexity o(N * M)

// let a = [25, 8, 4, 9, 7];
// let perfectSqr = [];

// for (let i = 0; i < a.length; i++) {
//     let n = a[i];

//     if (n >= 0 && Number.isInteger(Math.sqrt(n))) {
//         perfectSqr.push(n);
//     }
// }

// console.log(perfectSqr);
// AI Time complexity o(N)

