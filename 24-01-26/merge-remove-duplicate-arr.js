const a = [1, 2, 3, 5]
const b = [3, 6, 7, 8]
for (let i = 0 ; i < b.length ; i++){
    let add = true;
   for (let j = 0 ; j < a.length ; j++){
    if (a[j] === b[i]){
        add = false;
        break;
    }
   }
   if(add){
     a.push(b[i])
   }
   
}

console.log("removed duplicate and merged array", a)