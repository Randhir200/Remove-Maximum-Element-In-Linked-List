class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size=0;
    }
    addNodeAtEnd(data){
        let node = new Node(data);
      if(this.size==0){
        this.head=node;
        this.tail=node;
      }else{
        let temp = this.head;
        while(temp.next!=null){
            temp = temp.next;
        }
        temp.next = node;
      }
      this.size++
    }
    
    printLinkedList(){
        let bag = '';
        let temp = this.head;
        while(temp){
            bag+=temp.data+" ";
            temp = temp.next;
        }
        return bag;
    }

    removeMaximum(){
        let count = 0;
        let pos = 0;
        let temp = this.head;
        let prev = null;
        let max = -Infinity;
        while(temp){
            if(temp.data>max){
                pos = count;
                max = temp.data
            }
            temp = temp.next;
            count++
        }
        temp = this.head;
        count = 0;
        while(count!=pos) {
            prev = temp;//1 2 3, 2 3
            temp = temp.next;// 2 3, 3
            count++
        }
        if(prev == null){
            this.head = temp.next;
        }else{
            prev.next = temp.next
        }
        // console.log(pos);
    }
}

let l1 = new LinkedList();
l1.addNodeAtEnd(3);
l1.addNodeAtEnd(2);
l1.addNodeAtEnd(5);
l1.addNodeAtEnd(10);
console.log(l1.printLinkedList());
l1.removeMaximum();
console.log(l1.printLinkedList());
l1.removeMaximum();
console.log(l1.printLinkedList());
l1.removeMaximum();
console.log(l1.printLinkedList());