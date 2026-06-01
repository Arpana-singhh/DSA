let n = 153;
let a = n.toString().split('');
console.log(a)
let sum = 0;
for (let i = 0 ; i < a.length ; i++ ){
       sum =sum +  Math.pow(Number(a[i]), 3) // Number(a[i]) ** 3 same work as pow  
}
 if (sum == n){
   console.log(`It is Armstrong n = ${n}, sum = ${sum}`);
 }else{
    console.log(`It is not Armstrong n = ${n}, sum = ${sum}`)
 }