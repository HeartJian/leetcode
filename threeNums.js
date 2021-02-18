/**
 * 
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。
 * 返回这三个数的和。假定每组输入只存在唯一答案。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 // 
var threeSumClosest = function (nums, target) {
    let res;
    let min = Infinity;
    if (nums.length == 3) { res = nums[0]+nums[1]+nums[2]; } else {
        nums.sort((a, b) => (a - b));
        for (let i = 0; i < nums.length - 2; i++) {
            let right = nums.length - 1;
            let left = i + 1;
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                let diff = Math.abs(sum - target)
                if (min > diff) {
                    min = diff;
                    res =sum ;
                }
                if (sum < target) {
                    left++
                } else if (sum > target) {
                    right--
                } else{
                    return sum
                }
            }   
        }
    }

    return res
};
console.log(threeSumClosest([1,1,1,1],3))

