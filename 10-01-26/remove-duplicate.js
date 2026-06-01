let num = [2, 1, 1, 32, 21, 45, 4, 45]
let rmvDup = [];
rmvDup.push(num[0])
for(let i = 1; i < num.length; i++){
    let flag = true;
  for (let j = 0 ; j < rmvDup.length ; j++){
    if( num[i] === rmvDup[j]){
       flag = false;
       break;
    }
  }
  if (flag){
     rmvDup.push(num[i]) 
  }
 
}

console.log("Remove Duplicate Array", rmvDup)
