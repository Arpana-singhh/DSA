let a =['a', 'b', 'c', 'd']
let b =['b', 'c', 'h' ,'k']
let c=[];

for(let i = 0; i < a.length; i++){
  c.push(a[i])
}

for (let j = 0; j < b.length; j++) {
  if (!c.includes(b[j])) {
    c.push(b[j]);
  }
}


console.log(c)
