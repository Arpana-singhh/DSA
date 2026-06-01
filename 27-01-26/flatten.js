// function iterate(arr){
//   for(let i = 0; i < arr.length; i++){
//     if(Array.isArray(arr[i])){
//       iterate(arr[i]); // go deeper
//     } else {
//       console.log(arr[i]);
//     }
//   }
// }

// iterate([1, [2, [3, 4]]]);

function flatten(arr, res = []){
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      flatten(arr[i], res);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

const flattenArr = flatten([1, [2, [3, 4]]]);
console.log("flattenArr", flattenArr)