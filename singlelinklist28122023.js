 class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }


    append(data){
        let node = new Node(data);

        if(this.isEmpty()){
            this.head = node;

        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            
            current.next = node;

        }

        this.size++;

    }

    print(){
    let current = this.head;
    while(current){
        console.log(current.data);
        current = current.next;
    }

}

    prepand(data){
        let node = new Node(data);
    if(this.isEmpty()){
        this.head = node;
    }else{
        node.next = this.head;
        this.head = node;
    }

    this.size++;

    
}
short(){
    let temp;
    let swapped;
    let current;
    do {
        current = this.head;
        swapped = false;
        while(current && current.next){
            if(current.data > current.next.data){
                temp = current.data;
                current.data = current.next.data;
                current.next.data = temp;
                swapped = true
            }
            current = current.next;
        }
        
    } while (swapped);
}

deletMiddleNode(){

    if(this.isEmpty()){
        console.log("this list is empty")
    }else{
    let prv = null;
    let slow = this.head;
    let fast = this.head;

    while(fast !== null && fast.next !== null){
        prv = slow;
        slow = slow.next;
        fast = fast.next.next;

    }

    if(prv!==null){
        prv.next = slow.next;

    }else{
        this.head = slow.next;
    }
}
this.size--;
}

//insertbefor value;
insertBeforeTarget(target,data){
    let node = new Node(data);
    let current = this.head;
    let preview = null;
    if(this.isEmpty()){
        this.head = node;
    }else{
        while(current){
            if(current && current.data === target){
                node.next = current;
                preview.next = node;
            }
            preview = current;
            
            current = preview.next
           
        }
        this.size++;
    }
}


insertAfterNode(target,data){
    let node = new Node(data);

    let current = this.head;
    if(this.isEmpty()){
        this.head = node;
    }else{
        while(current){
            if(current.data===target){
                node.next = current.next;
                current.next = node;
                this.size++;
                return;
            }
            

            current = current.next
        }



    }

}

//deleting spacifinc location

deletingSpacificlocation(target){
    let preview;
    let current = this.head;
    if(this.isEmpty()){
        console.log("this list is empty")
    }else if(current.data === target){
        this.head = current.next;
        this.size--
    }else{
        let current = this.head;
        while(current){
            if(current.data === target){
                preview.next = current
                preview.next = current.next;
                
                this.size--;
            }
            preview = current;
            current = current.next;

        }
    }

}

}




let linklist = new LinkedList();

linklist.append(10);
linklist.append(20);
linklist.append(30);
linklist.print();

linklist.prepand(40);
linklist.prepand(50);
linklist.prepand(60);
linklist.print();


// linklist.short();
// linklist.print();


// linklist.deletMiddleNode()
// linklist.print();

linklist.insertBeforeTarget(50,55);
linklist.print()


linklist.insertAfterNode(20,35);
linklist.print()


linklist.deletingSpacificlocation(20);
linklist.print();