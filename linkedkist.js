// this is mt note
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head= null
        this.size = 0
    }

    getsize(){
        return this.size
    }

    isEmpty(){
        return this.size === 0
    }

    prepend(data){
        const node = new Node(data)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

// remove from head

removeHead() {
    if (this.isEmpty()) {
        console.log('List is empty. Cannot remove from an empty list.');
    } else {
        this.head = this.head.next;
        this.size--;
    }
}
//-----------------------------------------------
// remove middle node


removeMiddle() {
    if (this.isEmpty()) {
        console.log('List is empty. Cannot remove from an empty list.');
        return;
    }

    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    if (prev !== null) {
        prev.next = slow.next;
    } else {
        this.head = slow.next;
    }

    this.size--;
}




    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let current = this.head
            let list = ''
            while(current){
                list +=`${current.data}  `
                
                current = current.next

            }
            

            console.log(list)
        }
    }
}
const array = [1,2,3,4,5]
const list = new LinkedList()
list.print()
array.forEach(element => {
    list.prepend(element)
});
 
list.prepend(10);
list.prepend(20);
list.prepend(30);

list.print()