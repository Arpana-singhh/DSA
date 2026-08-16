let arr='madam'
let arr_split= arr.split("");
let rev_array=[]
for (i = arr_split.length - 1 ; i >= 0 ; i--){
       rev_array.push(arr_split[i]);    
}

let result = rev_array.join("")
console.log(result);

if (result == arr){
    console.log("It is palimdrome " + result)
}
else{
     console.log("It is not palimdrome " + result)
}