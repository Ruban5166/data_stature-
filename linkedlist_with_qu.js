class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}



class SingleLinkList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    getsize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }
//adding node at beging
    prepent(data){
        const node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node
        }
        this.size++
    }

//adding node at end
    append(data){
        const node = new Node(data);
        if(this.isEmpty()){
            this.head = node;

        }else{
            let current = this.head
            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
    }


    // deleting spacific number

    delete(value){
        if(this.isEmpty()){
            console.log("list is empty cant be delet")
            return;
        }


        if(this.head.data === value){
            this.head = this.head.next
            this.size--;
            return;
        }

        //delting spacific location

        let current = this.head;
        let privus = null;

        while(current && current.data!== value){
            privus =current;
            current = current.next;

        }

        if(current){
            privus.next = current.next
            this.size--;
            return;

        }
        else{
            console.log("value is not found in list")
        }

    }


    //Insert a node after   

    inseartAfter(Targetvalue,data){
        let current = this.head;

        while(current){
            if(Targetvalue === current.data){
            let newNode = new Node(data);
            newNode.next = current.next;
            current.next = newNode;
                this.size++;
                return;
            }
            current = current.next;
        }

        console.log("target value is not found")
    }

        //Insert a node befor target value
        
        

        inseartBefore(Targetvalue,data){
            if(this.head.data === Targetvalue){
                this.prepent(data)
                return;
            }


            let current = this.head;
            let privious = null;


            while(current){
                if(current && current.data === Targetvalue){
                    let newNode = new Node(data);
                   newNode.next = current;
                   privious.next = newNode;
                    this.size++;
                    return;
                }

                privious = current;
                current = privious.next;

            }
        }

//sorting order 

        bubbleSort(){
            let swapped;
            let current;
            let temp;


            if(this.isEmpty()){
                console.log(`This link list is empty`);
            }

            do{
                swapped = false;
                current = this.head;
                while(current.next){
                    if(current.data > current.next.data){
                        temp = current.data;
                        current.data = current.data.next;
                        current.data.next = temp;
                        swapped = true; 
                    }
                    
                    current = current.next;
                }
               


            }while(swapped);
            console.log("order sorted list")
        }



        //revers soted list
        reverseOrderSoted(){
            let current;
            let temp;
            let swapped;

            if(this.isEmpty()){
                console.log("this single list is empty")
                return;
            }else{
                
                do{
                    swapped = false;
                    current = this.head;
                    
                    while(current.next){
                        if(current.data<current.next.data){
                            temp = current.data;
                            current.data = current.next.data;
                            current.next.data = temp;
                            swapped = true;
                        }
                        current = current.next;
                    }

                }while(swapped)
            }
            console.log("this reverse order list sorted")
        }


        removeDuplicate(){
            let current = this.head;
            while(current && current.next){
                if(current.data === current.next.data){
                    current.next = current.next.next;

                }else{
                    current = current.next;
                }
            }
        }

    print(){
        if(this.isEmpty()){
            console.log("this list is empty");
        }
        else {
            let current = this.head;
            let list = "";

            while(current){
                list += `${current.data}  `;
                current = current.next;
            }
            console.log(list);
            }
          
        }


        printInReverseOrder(){

            if(this.isEmpty()){
                console.log("this link is empty")
            }

            else{
                let current = this.head;
               
                let stack = [];

                while(current){

                    stack.push(current.data);
                    current = current.next;
                }

                while(stack.length>0){
                    console.log(stack.pop())
                }

                console.log("reverse order list");

            }

        }

        
    
}


let singlelist  = new SingleLinkList();
singlelist.prepent(60);
singlelist.prepent(50);
singlelist.prepent(40);




singlelist.print();


// array = [10,20,30,40,50,60,70,80,90];

// array.forEach((element)=>{
//    singlelist.prepent(element);  
// })

// singlelist.print();



// singlelist.append(2000)
// singlelist.print();


// singlelist.delete(60);
// singlelist.print();

singlelist.inseartAfter(50,55)
singlelist.inseartBefore(40,35)

singlelist.print();

singlelist.printInReverseOrder();


singlelist.bubbleSort();
singlelist.print();


singlelist.reverseOrderSoted();
singlelist.print();

