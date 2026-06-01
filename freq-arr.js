let val = ['a', 'b', 'a', 'c', 'b', 'a'];
let frequency={}

for (let i = 0; i < val.length; i++) {
    var item = val[i];
    
    if(frequency[item]){
     frequency[item]++
    }
    else{
     frequency[item]=1
    }
}


    console.log(frequency)