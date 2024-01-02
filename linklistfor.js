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
        return this.size ===0;
    }

    appendData(data){
        const node = new Node(data);
        let  current = this.head;
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
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }




    //deleting the middle point

    delteMiddle(){
        let slow = this.head;
        let fast = this.head;
        let prv = null;

   
        while(fast!== null && fast.next !== null){
            prv = slow;
            slow = slow.next;
            fast = fast.next.next;
        }


        if(prv.next !== null){
            prv.next = slow.next;
        }else{
            this.head = slow.next;
        }

        this.size--;
    }

    shortOrder(){
        let swapped;
        let current;
        let temp

        do {

            swapped = false;
            current = this.head;
          while (current.next) {
            if(current.data<current.next.data){
                temp = current.data;
                current.data = current.next.data;
                current.next.data =  temp;
                swapped = true;
            }
            current = current.next;
            
          }
          
        } while (swapped);
    }


    isPalimdrome(){
       if(!this.head){
        return true;
       }else{
        let stak = [];
        let current = this.head;


        while(current){
            stak.push(current.data);

            current = current.next;
        }



      current = this.head;

        while(current){

            if(current.data !== stak.pop()){
                return false;
            }

            current = current.next;

           
        }

        return true;

       }

     
    

    }

reversOrder(){
    let reversLinklist = new Linkedlist();


    let current = this.head;

    while(current){

        let node  = new Node(current.data);
        node.next = reversLinklist.head;
        reversLinklist.head = node;

        current = current.next;
    }


    this.head = reversLinklist.head;
}

    

}

const array = [1,2,3,4,5,6,7,8,9]
 const linnklist = new Linkedlist();

//  array.forEach((value)=>{
//     linnklist.appendData(value)
//  });

 linnklist.appendData(25);
 linnklist.appendData(30);
 linnklist.appendData(35);
 linnklist.appendData(40);
 linnklist.appendData(45);
 linnklist.appendData(50);



 linnklist.print();

 //linnklist.delteMiddle()

 //linnklist.reverseOrder();

 //linnklist.print();

 //let ans = linnklist.isPalimdrome();
 //console.log(ans);


 linnklist.reversOrder();

 linnklist.print();