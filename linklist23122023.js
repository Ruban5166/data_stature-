class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    
    }
}

class Linklist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    getSize(){
        return this.size;
    }
    isEmpty(){
        return this.size === 0;
    }
    append(data){
        let node = new Node(data);
        let current = this.head;
        if(this.isEmpty()){
            this.head = node;
        }else{
          
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
            console.log(current.data)
            current = current.next;
        }
    }


    removingMiddle(){
        let fast;
        let slow;
        let prv;


        if(this.isEmpty()){
            console.log("this list is empty");
        }else{
            fast = this.head;
            slow = this.head;
            prv  = null;

            while(fast !== null && fast.next !== null){
                prv = slow
                slow = slow.next;
                fast = fast.next.next;
                
            }

            if(prv.next!== null){
                prv.next = slow.next;
            }else{
                this.head = slow.next;
            }
            this.size--;

        }
        
    }


    sorting(){
        let swapped;
        let temp;

        
        do {
            let current = this.head;
            swapped = false;
            while(current.next){

                if(current.data<=current.next.data){
                    temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;

                    swapped = true;
                }

                current=current.next;
            }
            
        } while (swapped);
    }

    reverse(){
        let reverslinklist = new Linklist();

        let current = this.head;
        while(current){

            let node = new Node(current.data);

            node.next = reverslinklist.head;
            reverslinklist.head = node;



            current = current.next;
        }
        this.head = reverslinklist.head;


    }

    

    isPalintrome(){
        if(!this.head){
            return true;
        }else{
            let current = this.head;
            let stack = [];
            while(current){
                stack.push(current.data);
                current = current.next;
            }
            current = this.head;
            while(current){

                if(current.data!== stack.pop()){
                    return false;
                }

                current = current.next;

            }

            return true;


        }
    }
}

let linnklist = new Linklist();

linnklist.append(10);
linnklist.append(20);
linnklist.append(30);
linnklist.append(40);
linnklist.append(30);
linnklist.append(20);
linnklist.append(10);


linnklist.print();

// linnklist.removingMiddle();
// linnklist.print();

// linnklist.sorting();
// linnklist.print()

// linnklist.reverse();
// linnklist.print()
console.log(linnklist.isPalintrome());





