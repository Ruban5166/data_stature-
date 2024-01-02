class Node{
    constructor(data){
        this.data = data;
        this.prv = null;
        this.next = null;
    }
}


class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size ===0;
    }

    append(data){
        let node = new Node(data);

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            let current = this.head;
            while(current.next){
                current=current.next;
            }
            node.prv = current
            current.next = node;
            this.tail = node;
        }
        this.size++;
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }

    //pripend
    pripend(data){
        let node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prv = node;
            this.head = node;

        }
        this.size++;
    }

    //deleting middle
    deleteMiddleNode(){
        let priv = null;
        let slow = this.head;
        
        let fast = this.head;

        while(fast!==null && fast.next !== null){
            priv = slow;
            slow = slow.next;
            fast = fast.next.next;

        }

        let nextnode = slow.next;
        priv.next = nextnode;
        nextnode.prv = priv;

        slow.prv = null;
        slow.next = null;

        this.size--;

    }

    //deleting before taget
    deleteBeforeTarget(target){
        if(this.isEmpty()){
            console.log("this list is empty")
        }else{
            let current = this.head;
            while(current && current.data !== target){

                current = current.next;
            }

            if(current !== this.head){
                let toDeleteNode = current.prv;
                toDeleteNode.prv.next = current;
                current.prv = toDeleteNode.prv;

                toDeleteNode.prv = null;
                toDeleteNode.next = null;

                this.size--;

            }
        }
    }

    //delete after target
    deleteAfterTarget(target){
        if(this.isEmpty()){
            console.log("This list is empty")
        }else{
            let current = this.head;
            while(current && current.data !== target){
                current = current.next;

            }

            let toDeleteNode = current.next;
            toDeleteNode.next.prv = current;
            current.next = toDeleteNode.next;


            toDeleteNode.prv = null;
            toDeleteNode.next = null;

            this.size--;
        }
    }
}


let doublelinklist = new DoubleLinkedList();
doublelinklist.append(10);
doublelinklist.append(20);
doublelinklist.append(30);
doublelinklist.append(40);
doublelinklist.append(50);
//doublelinklist.append(60);



doublelinklist.print();
doublelinklist.deleteMiddleNode();

//doublelinklist.deleteAfterTarget(40);

//doublelinklist.deleteBeforeTarget(40);

doublelinklist.print();