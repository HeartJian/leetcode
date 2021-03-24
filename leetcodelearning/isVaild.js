
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
 

// 时间复杂度：O(n)O(n)，其中 nn 是字符串 ss 的长度。

// 空间复杂度：O(n + |\Sigma|)O(n+∣Σ∣)，其中 \SigmaΣ 表示字符集，本题中字符串只包含 66 种括号，|\Sigma| = 6∣Σ∣=6。栈中的字符数量为 O(n)O(n)，而哈希表使用的空间为 O(|\Sigma|)O(∣Σ∣)，相加即可得到总空间复杂度。



var isValid = function(s) {
    if(!s) return true;
    if(s.length%2 !=0) return false;
    const str =[...s];
    const queue = [];
    const obj = {
        "[":"]",
        "{":"}",
        "(":")",
    };
    let right,left;
    while(str.length){
        right = str.shift();
        if(queue.length){
            left = queue.pop();
            if(obj[left] && obj[left]==right){
            }else{
                queue.push(left);
                queue.push(right);
            }
        }else{
            queue.push(right);
        }
     
    }
    return queue.length == 0;
};