
//  let val = ['a', 'b', 'a', 'c', 'b', 'a'];
// let frequency={}

// for (let i = 0; i < val.length; i++) {
//     var item = val[i];
    
//     if(frequency[item]){
//      frequency[item]++
//     }
//     else{
//      frequency[item]=1
//     }
// }

//     console.log(frequency)


    // Method 2 with Map
    let val = ['a', 'b', 'a', 'c', 'b', 'a'];
    let frequency = new Map(); 
    frequent={a : 1, b : 1};
    for(let i = 0 ; i < val.length; i++){
        if(frequency.has(val[i])){
          frequency.set(val[i], frequency.get(val[i]) + 1)
        }else{
            frequency.set(val[i], 1)
        }
    }

     console.log(frequency)
