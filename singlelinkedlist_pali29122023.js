class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class SingleLinkedlist{
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
            current=current.next;
        }
    }
    isPalintrome(){
        let set = [];

        let current = this.head;
        while(current){
            set.push(current.data);
            current=current.next;
        }

        current =this.head
        while(current){

            if(current.data !== set.pop())
            {
                console.log("No")  
        }else{
            console.log("yes")
        }
        current = current.next;

        }
        
    }   

}


let singlelist = new SingleLinkedlist();
singlelist.append(10);
singlelist.append(20);
singlelist.append(30);
singlelist.append(30);
singlelist.append(20);
singlelist.append(10);

singlelist.print();



let array =[10,20,30,40,50,60,70,80,90];


array.forEach((elements)=>{
    singlelist.append(elements);
});

singlelist.isPalintrome();
//singlelist.print();