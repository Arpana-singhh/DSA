//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

let n = 5;
let ptrn = ""; 
let pt =  (n * 2 - 1);

for (let i = 1 ; i <= n ; i++){
    let start = Math.ceil(pt / 2) ;
    for (let j = 1 ; j <= (n * 2 - 1) ; j++){
        if (i == n || j >= start){
            ptrn = ptrn + "* "
        }
        else {
            ptrn = ptrn + " "
        }
    }
    pt = pt - 2;
    ptrn = ptrn + "\n"
   
}
console.log(ptrn)

5
4-6
3-7
2-8
