class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }

}


class Linkedlist{
    constructor(){
        this.head = null;
        this.size = 0
    }


    getSize(){
        return this.size ;
    }

    isEmpty(){
        return this.size === 0;
    }

    prepend(data){
        const node = new Node(data);
        if(this.isEmpty){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(data){
        const node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let current = this.head;

            while(current.next){
                current= current.next
            }
            current.next = node;
        }
        this.size++;

    }

    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else {
            let list = "";
            let current = this.head;
            while(current){
                list += `${current.data} `;
                current = current.next;
            }
            console.log(list);
        }
       

    }

    delete(value){
        if(this.isEmpty()){
            console.log("empty list cant delete");
            return;
        }

        if(this.head.data === value){
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let privus = null;

        while(current && current.data !== value){
            privus = current;
            current = current.next;
        }

        if(current && current.data === value){
            privus.next = current.next;
            this.size--;
            return;
        }
    }



    inseartTarget(target,data){

        let current = this.head;
        const node = new Node(data);

        while(current){
            if(current.data === target){
                node.next = current.next;
                current.next = node;
                this.size++;
                return;
            }

            current = current.next;
        }



    }


    insertTargetbefore(target,data){
        let current  = this.head;
        let privus = null;
        const node  = new Node(data);


        if(this.head.data === target){
            this.prepend(data);
            this.size++;
            return;
        }

        while(current){
            if(current && current.data === target){
                node.next = current;
                privus.next = node;
                this.size++;
                return;
                
            }
            privus = current;
            current =privus.next;
        }
    }



    busort(){
        let swapped;
        let current;
        let temp;

        do{
            swapped = false;
            current = this.head;
            while(current.next){
                if(current.data>current.next.data){
                    temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;
                    swapped = true;
                }


                current= current.next;
            }

        }while(swapped);
    }


   

    
}
let singlelist = new Linkedlist();

singlelist.append(10);
singlelist.append(20);
singlelist.append(30);
singlelist.append(40);
singlelist.print();

singlelist.delete(20);

singlelist.inseartTarget(30,45);
singlelist.print();
