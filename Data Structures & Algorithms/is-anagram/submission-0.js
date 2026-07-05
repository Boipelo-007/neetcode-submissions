class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    // 1. Quick length check
    if (s.length !== t.length) return false;

    const countMap = new Map();

    // 2. Single loop to count characters
    for (let i = 0; i < s.length; i++) {
        // Increment for string s
        countMap.set(s[i], (countMap.get(s[i]) ?? 0) + 1);
        // Decrement for string t
        countMap.set(t[i], (countMap.get(t[i]) ?? 0) - 1);
    }

    // 3. If it's an anagram, all counts must be 0
    for (let count of countMap.values()) {
        if (count !== 0) return false;
    }

    return true;
    }
}