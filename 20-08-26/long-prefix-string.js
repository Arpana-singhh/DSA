var longestCommonPrefix = function(strs, prefix) {

    let wd = strs[0];

    for (let i = 1; i < strs.length; i++) {

        while (!strs[i].startsWith(wd)) {
            wd = wd.slice(0, -1);

            if (wd === "") {
                return "";
            }
        }
    }

    return wd;
};

let strs = ["flower", "flow", "flight"];

let prefix = "";

const result = longestCommonPrefix(strs, prefix);

console.log("Longest common prefix:", result);