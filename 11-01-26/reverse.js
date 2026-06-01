let string = 'apple'
let data = string.split('');
let revString = []
for(let i = data.length - 1 ; i >= 0 ; i--){
    revString.push(data[i])
}

 console.log(revString);