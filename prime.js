let num = 9
let flag = true; 
for(let i = 2; i < num; i++){
   if(num % i == 0){
     flag=false;
     break;
   }
}

if(flag){
    console.log("It is a prime number")
}
else{
    console.log("It is not a prime number")
}