//冒泡 快排 二分 dp lru
function bub(array){
    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-1;j++){
            let left = array[i],right = array[j]
            if(left>right){
                array[j] =  left;
                array[i] =  right;
            }
        }
    }
    return array
}

// 快排
function quickSort(array){
    if(array.length <= 1) return array;
    const key = array[array.length -1];
    const left =[],right = [],middle=[] ;
    for(const val of array){
        if(key === val){
            middle.push(val)
        };
        if(key > val){
            left.push(val)
        };
        if(key < val){
            right.push(val)
        }
    };
    return [...quickSort(left),...middle,...quickSort(right)]
}