/**
 * 
 * 给定两个数组，编写一个函数来计算它们的交集。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 // 空间复杂度O（min(nums1,nums2)）,时间复杂度O（max(nums1,nums2)）
const intersect = function(nums1, nums2) {
    const map = new Map();
    const result= [];
    nums1.forEach(a=>{
        let value = map.get(a)
        map.set(a, value ? value +1:1   )
    });

    nums2.forEach(b=>{
        let value = map.get(b);
        if(value){
            map.set(b,value - 1);
            result.push(b)
        }
    })
    return result;
};

// 时间复杂度 O（nlogn+mlogm） 空间复杂度O（min(n,m)）
const intersect2 = function(nums1,nums2){
    let array = [];
    if(nums1.length>nums2.length){
        [nums1,nums2]= [nums2,nums1] 
    }
    nums1.sort((a,b)=>(a-b));
    nums2.sort((a,b)=>(a-b));
    let  i = 0,j=0;
    while (i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            i++
        }else if(nums1[i]>nums2[j]){
            j++;
        } else{
            array.push(nums1[i]);
            i++;j++;
        }
    }

}

intersect([1,2,2,1],[2,2])