
function Prime(num){
    if (num == 0 || num == 1){
        return "It is neither prime nor composite"
    }
    let flag = true;
    for(let i=2 ; i < num; i++){
        if(num % i === 0){
            flag = false;
            break;
        }
    }
    return flag;
}
let num=7;
let result=Prime(num);
if (result === true) {
  console.log("It is Prime Number");
} else if (result === false) {
  console.log("It is Not Prime Number");
} else {
  console.log(result);
}
