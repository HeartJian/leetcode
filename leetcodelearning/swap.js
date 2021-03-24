// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

var swapPairs = function(head) {
    if(head == null || head.next == null) {
        return head;
    }
    const newHead = head.next;
    head.next=swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};