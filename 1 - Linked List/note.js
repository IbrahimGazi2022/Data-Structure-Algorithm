// insert() মেথডের প্রতিটি ধাপ ব্যাখ্যা সহ
// -----------------------------

// ১ - ইনডেক্স যাচাই করা → যদি ইনডেক্স ০-এর কম বা লিস্টের দৈর্ঘ্যের বেশি হয়, তাহলে false রিটার্ন করা।
// 2 - লিস্টের শুরুতে ইনসার্ট করা → যদি ইনডেক্স ০ হয়, তাহলে unshift(value) মেথড ব্যবহার করে শুরুতে নোড যোগ করা।
// 3 - লিস্টের শেষে ইনসার্ট করা → যদি ইনডেক্স লিস্টের দৈর্ঘ্যের সমান হয়, তাহলে push(value) মেথড ব্যবহার করে শেষে নোড যোগ করা।
// 4 - উল্লেখিত ইনডেক্সে ইনসার্ট করা →


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

    unshift(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        }

        const newNode = new Node(value);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }
}

// ✅ টেস্ট করা যাক
let myLinkedList = new LinkedList(10);
myLinkedList.push(20);
myLinkedList.push(30);

myLinkedList.insert(1, 15); // 🔹 ১ নম্বর ইনডেক্সে `15` ইনসার্ট হবে
console.log(myLinkedList);

