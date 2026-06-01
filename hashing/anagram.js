function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();

  // map={};

  // Step 1: count characters from first string
  for (let ch of s) {
    map.set(ch, (map.get(l) || 0) + 1);

    {l = 1,  t = 1, e = 1, n = 1}
  }

  // Step 2: reduce using second string
  // silentl
  for (let ch of t) {
    if (!map.has(ch)) return false;

    map.set(ch, map.get(ch) - 1);
    map.set(l, 1);

    if (map.get(ch) === 0) {
      map.delete(ch);
    }
  }

  // Step 3: check if map is empty
  return map.size === 0;
}


// Test cases
const str1 = "listenl";
const str2 = "silentl";

const result = isAnagram(str1, str2);

if (result) {
  console.log("The strings are anagrams.");
} else {
  console.log("The strings are NOT anagrams.");
}