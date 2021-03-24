/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 输入: 

//           1
//          / \
//         3   2
//        / \   \  
//       5   3   9 

// 输出: [1, 3, 9]


var largestValues = function(root) {
    const queue = [];
    const lengthQueue = [];
    const result = [];
    if(!root){
        return result;
    }
    queue.push(root);
    lengthQueue.push(queue.length);
    while(queue.length>0){
        const currentQueue = queue.splice(0,lengthQueue.shift());
        let currentLength = 0;
        let maxCurrent =null;
        currentQueue.forEach(current=>{
            if(maxCurrent == null){
                maxCurrent = current.val
            }else{
                maxCurrent = maxCurrent>current.val ? maxCurrent:current.val;
            }
            if(current.left){
                queue.push(current.left);
                currentLength ++;
            }
            if(current.right){
                queue.push(current.right);
                currentLength ++;
            }
        });
        lengthQueue.push(currentLength);
        result.push(maxCurrent);
    }
    return result;
};