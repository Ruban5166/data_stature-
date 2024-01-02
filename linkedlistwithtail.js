class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SingleLinkList {
    constructor() {
      this.head = null;
      this.tail = null; // Add a tail pointer
      this.size = 0;
    }
  
    getsize() {
      return this.size;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    // Adding node at the beginning
    prepent(data) {
      const node = new Node(data);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node; // Set tail when the list is empty
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    // Adding node at the end
    append(data) {
      const node = new Node(data);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
    }
  
    // ... (Other methods remain unchanged)
  
    print() {
      if (this.isEmpty()) {
        console.log("This list is empty");
      } else {
        let current = this.head;
        let list = "";
  
        while (current) {
          list += `${current.data}  `;
          current = current.next;
        }
        console.log(list);
      }
    }
  
    // ... (Other methods remain unchanged)
  }
  
  let singlelist = new SingleLinkList();
  singlelist.prepent(60);
  singlelist.prepent(50);
  singlelist.prepent(40);
  
  singlelist.print();
  
  // Uncomment the code below to test other methods
  /*
  singlelist.append(2000);
  singlelist.print();
  singlelist.delete(60);
  singlelist.print();
  singlelist.inseartAfter(50, 55);
  singlelist.inseartBefore(40, 35);
  singlelist.print();
  singlelist.printInReverseOrder();
  singlelist.bubbleSort();
  singlelist.print();
  singlelist.reverseOrderSoted();
  singlelist.print();
  */
  