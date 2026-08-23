var longestCommonPrefix = function(strs, prefix) {
    let wd = strs[0][0]

    // for(let i = 1 ; i < strs.length; i++){
    //   strs[i][0] !== wd;
    //   return "";
    // }

    for (let j = 0; j < strs.length; j++) {
       const test = strs[j][0];
         if (!strs[j].startsWith(wd)) {
           return prefix;
        }
        prefix = wd;
        wd= wd + strs[j][j+1];
    }
   
};

let strs = ["flower","flow","floght"];

let prefix="";
const result =longestCommonPrefix(strs, prefix);
console.log("Longest common prefix:", result);