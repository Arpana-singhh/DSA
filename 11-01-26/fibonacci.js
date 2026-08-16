let n = 10;
let a = 0;
let b= 1;
let next;
let res = [];
for(let i=0; i <= n ; i++){
  res.push(a);
  let next = a + b;
  a=b;
  b=next;
}
console.log(res);

  // console.log(a);