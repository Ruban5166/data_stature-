
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add a node to the end of the list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Add a node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    
    // Delete a node by value
    delete(value) {
        let current = this.head;

        while (current) {
            if (current.data === value) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }

                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }

                return; // Node found and deleted
            }

            current = current.next;
        }
    }

    //middle element delete
    deleteMiddle() {
        if (!this.head) {
            console.log("List is empty. Cannot delete middle element.");
            return;
        }

        let slow = this.head;
        let fast = this.head;

        // Move fast by two steps and slow by one step until fast reaches the end
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // Delete the middle element (node pointed by slow)
        if (slow.prev) {
            slow.prev.next = slow.next;
        } else {
            this.head = slow.next;
        }

        if (slow.next) {
            slow.next.prev = slow.prev;
        } else {
            this.tail = slow.prev;
        }
    }


    // Display the elements of the list
    display() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}





// Example usage:
const dll = new DoublyLinkedList();

dll.append(1);
dll.append(2);
dll.append(3);

dll.display();
