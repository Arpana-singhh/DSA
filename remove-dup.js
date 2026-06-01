let val = ['1', 'a', 'b', 'a', 'c', 'y', 'c', 'c', 'b'];
let result = [];

for (let i = 0; i < val.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < i; j++) {
        if (val[i] === val[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        result.push(val[i]);
    }
}

console.log("Array after removing duplicates:", result);
