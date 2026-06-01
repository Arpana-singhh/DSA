
// My Code
// function functioncountVowelConsonant(data){
//     let vowel=['a','e','i','o','u']
//     let res=data.split('')
//     let volData='';
//     for(let i=0; i<=res.length-1 ; i++){
//        for(let j=0; j<=vowel.length-1; j++){
//         if(res[i] == vowel[j]){
//           volData +=res[i];
//         }
//        }
//     }
      
//      let volCount = volData.split('').length
//      return volCount
// }

// let data = "aapleyteieop"
// let dataCount=data.length;
// const result=functioncountVowelConsonant(data)
// console.log("Vowel Count", result);
// let consonantCount=dataCount - result;
// console.log("Consonant Count", consonantCount)


// Chat GPT less time complexity
// function countVowelConsonant(data){
//   let vowels = ['a','e','i','o','u']
//   let vowelCount = 0

//   for (let i = 0; i < data.length; i++){
//     for (let j = 0; j < vowels.length; j++){
//       if (data[i] === vowels[j]){
//         vowelCount++
//         break
//       }
//     }
//   }

//   let consonantCount = data.length - vowelCount
//   return { vowelCount, consonantCount }
// }

// const result = countVowelConsonant("aapleyteieop")
// console.log("Vowel Count", result.vowelCount)
// console.log("Consonant Count", result.consonantCount)
