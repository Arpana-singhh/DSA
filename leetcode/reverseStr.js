var reverse = function(x) {

    let str = x.toString();

    let arr = str.split("");
    let res = [];
    let isNegative = false;
    
    for(let i =  arr.length - 1; i >= 0 ; i--){
        if (arr[i] == "-"){
            isNegative= true;
            continue
        }else{
            res.push(arr[i])
        }   
    }

    let finalNum = Number(res.join(""))

    if (isNegative){
       finalNum = -finalNum
    }

    if (finalNum < -2147483648 || finalNum > 2147483647) {
        return 0;
    }else {
        return finalNum ;
    }

};

let rev = 1534236469;

const result = reverse(rev);
console.log(result);