class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let previous = this.head;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        this.tail = previous;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.pop();
console.log(myLinkedList); 