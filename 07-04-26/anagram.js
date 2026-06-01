// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false
//     }
//     // Convert strings to lowercase and sort their characters
//     const sortedStr1 = str1.toLowerCase().split('').sort().join('');
//     const sortedStr2 = str2.toLowerCase().split('').sort().join('');
//     // Compare the sorted strings
//     return sortedStr1 === sortedStr2;
// }

// console.log(isAnagram('listen', 'silent'));

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    const frequency = {};

    for(let i=0; i<str1.length; i++){
        const char = str1[i].toLowerCase();
        frequency[char]= (frequency[char] || 0) + 1;
    }

    console.log(frequency);

    for (let i=0; i<str2.length; i++){
        const char = str2[i].toLowerCase();
        if (!frequency[char]) {
            return false;
        }
        --frequency[char]; 
    }  
    return true;
}

const result = isAnagram('listen', 'silent');
if (result) {
    console.log('The strings are anagrams.');
} else {
    console.log('The strings are not anagrams.');
}

