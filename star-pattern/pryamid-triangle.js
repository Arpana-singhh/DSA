//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
        if (j >= n - i + 1 && j <= n + i - 1) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }
    pattern += "\n";
}

console.log(pattern);

5
4-6
3-7
2-8
