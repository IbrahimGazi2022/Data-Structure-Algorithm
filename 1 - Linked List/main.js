class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linklist {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.push(20);
myLinkedList.push(30);
myLinkedList.push(40);

console.log("Before set:", myLinkedList.get(2));

myLinkList.set(2, 99);

console.log("After set:", myLinkedList.get(2)); 