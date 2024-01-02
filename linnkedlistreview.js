class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class Linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size ===0
    }

    append(data) {
        const node = new Node(data);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }

    print(){

        let current = this.head;
        let list = "";

        while(current){
            list += `${current.data}`;

            current = current.next  
        }

       
        console.log(list);
    }
}



const linklist = new Linkedlist();

linklist.append(10);
linklist.append(15);
linklist.append(20);
linklist.append(25);

linklist.print();