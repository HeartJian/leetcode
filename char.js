/**
 *  无重复字符的最长子串
 *  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 *  输入: s = "abcabcbb"
 *  输出: 3 
 *  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let result = 0;
    let len = s.length;
    if (len < 2) {
        return s.length;
    };
    let set = new Set();
    let i = 0, j = 1;
    set.add(s[i]);
    while (i < len && j < len) {
        if (set.has(s[j])) {
            let array = [...set];
            if (result < set.size) {
                result = set.size
            };
            let index = array.indexOf(s[j]);
            array.splice(0, index + 1);
            set = new Set(array);
            set.add(s[j]);
            i = j;
            j++;
        } else {
            set.add(s[j]);
            j++;
        }
    };
    if (result < set.size) {
        result = set.size
    };

    return result

};