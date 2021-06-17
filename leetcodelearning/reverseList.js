// 链表反转

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;


var reverseList = function (head) {
    const swap = (head, before) => {
        if (head && head.val != null) {
            const newhead = new ListNode(head.val);
            newhead.next = before;
            return swap(head.next, newhead);
        } else {
            return before;
        }
    }
    return swap(head, null);
};



var reverseList = function(head){
    let pre = null;
    let current =head;
    while(current){
        const next = current.next;
        current.next =pre;
        pre = current;
        current =next
    };
    return pre;
}
