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
        return this.size ;
    }

    isEmpty(){
        return this.size === 0;
    }

    append(data){
        let node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            node.prv = current;
            current.next = node;
            this.tail = node;
        }
        this.size++
    }

    prepand(data){
        let node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node
        }else{
            node.next = this.head;
            this.head.prv = node;
            this.head = node;
        }

        this.size++;



    }
    short(){
        let temp;
        let current;
        let swapped;

        

        do {
            swapped = false;
            
            current = this.head;
            while(current && current.next){
                if(current.data>current.next.data){
                    temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;
                    swapped = true;
                }
                current = current.next;
            }
            
        } while (swapped);

    }


    print(){
        if(this.isEmpty()){
            console.log("this list is empty");
        }else{
            let current = this.head;
            while(current){
                console.log(current.data);
                current = current.next;
            }
        }
    }



}

let doublelink = new DoubleLinkedList;

doublelink.append(10);
doublelink.append(20);
doublelink.append(30);
doublelink.append(40);
doublelink.append(50);
doublelink.print();

doublelink.prepand(60);
doublelink.prepand(70);

doublelink.print();

doublelink.short();
doublelink.print();



