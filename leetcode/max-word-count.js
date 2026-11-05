// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

 

// Example 1:

// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation: 
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.




var mostWordsFound = function(sentences) {
    let maxWords = 0;

    for(let i = 0; i <= sentences.length - 1 ; i++){
        let arrSplit = sentences[i].split(" ");

        let count = arrSplit.length;

        if(maxWords < count){
            maxWords = count;
        }
    }

    return maxWords;


    
};

let arr = ["alice and bob love leetcode test res", "i think so too", "this is great thanks very much"];
 console.log(mostWordsFound (arr));