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
            return temp.next;
        }

        return temp;
    }
}

let myLinkList = new Linklist(10);
myLinkList.push(1);
myLinkList.push(20);
myLinkList.push(3);

console.log(myLinkList.get(2))