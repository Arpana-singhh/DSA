// *
// * *
// *   *
// *     *
// * * * * *

let n = 5;
let ptrn = "";

for(let i = 1; i <= n ; i++){
    for(let j = 1; j <= i; j++){
        if (i == n){
            ptrn = ptrn + "*"; 
        }
        else{
            if(j == 1 || j == i){
              ptrn = ptrn + "*";
            }else {
                ptrn = ptrn + " ";
            }
        }
    }
  ptrn = ptrn + "\n"
}
console.log(ptrn)