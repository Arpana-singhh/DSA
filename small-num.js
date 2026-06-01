// Method 1
let num = [1, 6, 10, 9, 3, 1, 7];
let lg_num=num[0];
for(let i = 0 ; i < num.length ; i++){
    
if( lg_num > num[i]){
    
     lg_num = num[i]
  
}

}
console.log("Largest Number from Array " + lg_num)
