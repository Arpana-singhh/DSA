// * * * * *
// * * * *
// * * *
// * *
// *
let n = 5;
let ptrn = ""
for (let i = n; i >=1 ; i--){
    for(let j = 1 ; j <= i ; j++){
      ptrn = ptrn + "*";
    }
 
    ptrn = ptrn + "\n";
}
 console.log(ptrn);
