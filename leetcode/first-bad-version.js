function isBadVersion(version) {
    return version >= 4;
}

function solution(isBadVersion) {

    function search(n) {
        let l = 1;
        let r = n;

        while (l < r) {
            let m = Math.floor((l + r) / 2);

            if (isBadVersion(m)) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        return l;
    }

    return search;
}

let n = 5;

let result = solution(isBadVersion);
console.log(result(n)); // 4