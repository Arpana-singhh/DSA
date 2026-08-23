//         *
//       * *
//     * * *
//   * * * *
// * * * * *

let n = 5;
let ptrn = "";

for (let i = 1 ; i <= n ; i++){
    for (let j = n ; j >= 1 ; j--){
        if (j <= i){
            ptrn = ptrn + "*"
        }else {
            ptrn = ptrn + " "
        }
    }

    ptrn = ptrn + "\n"
}

console.log(ptrn)