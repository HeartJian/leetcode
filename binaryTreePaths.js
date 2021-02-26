/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 给定一个二叉树，返回所有从根节点到叶子节点的路径。
// 说明: 叶子节点是指没有子节点的节点。
// 输入:
//    1
//  /   \
// 2     3
//  \
//   5
// 输出: ["1->2->5", "1->3"]
// 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
// 时间复杂度n^2
// 空间复杂度n^2

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var DFS = function (root) {
    const result = [];
    const arrow = "->";

    const getPath = (root, path) => {
        if (root) {
            path = path ? path + arrow + root.val+"" : root.val+""
            if (root.left == null && root.right == null) {
                result.push(path);
            } else {
                getPath(root.left, path)
                getPath(root.right, path)
            }
        }
    }
    getPath(root, "");
    return result
};



// 时间 空间复杂度都为N^2
var BFS = function (root) {
    const result = [];
    const arrow = "->";
    const queue = [];
    if(root){
        queue.push(root)
        result.push(root.val.toString())
        while(queue.length>0){
            const currentRoot = queue.shift();
            if(currentRoot.left || currentRoot.right){
                const currentRootResult = result.shift();
                if(currentRoot.left){
                    queue.push(currentRoot.left);
                    result.push(currentRootResult+arrow+currentRoot.left.val.toString());
                }
                if(currentRoot.right){
                    queue.push(currentRoot.right)
                    result.push(currentRootResult+arrow+currentRoot.right.val.toString());
                }
            }
      
        }
    }
    return result
};




