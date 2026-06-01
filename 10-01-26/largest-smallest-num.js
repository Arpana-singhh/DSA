let num = [2, 5, 1, 32, 21, 45, 4, 65]
let min = num[0];
let max = num[0];
for(let i = 1; i < num.length; i++){
    if (num[i] < min){
        min = num[i]
    }
    if (num[i] > max){
        max = num[i]
    }
}

console.log("The largest number from array", max)
console.log("The Smallest number from array", min)