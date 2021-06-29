//冒泡 快排 二分 dp lru
function bub(array){
    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                let temp =array[j];
                array[j] = array[j+1];
                array[j+1] =temp
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


// [{id:1, parentId: 0}, {id:2, parentId:1},{id:3, parentId:1}]
// 把这个数组从顶级分类递归查找子分类，最终构建一个树状数组。结果输出如下
// [{id:1, parentId: 0,children:[{id:2, parentId:1},{id:3, parentId:1}]}]
// parentId为0 的是根节点
function buildtree(array,parentId,result =[]){
    array.forEach(element => {
        if(element.parentId == parentId){
            result.push(element);
            element.children = [];
            buildtree(array,element.id,element.children)
        }
    });
    return result;
}

// 链表反转
function node(val,next){
    this.val = val;
    this.next =next;
}

//1->2->3->4
function swap(node){
    let before = null;
    let current = node;
    while(current.next){
        let next = current.next;
        current.next = before;
        before =current;
        current =next;
    }
}