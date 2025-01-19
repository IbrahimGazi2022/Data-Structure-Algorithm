class Node {
    constructor(value) {
        this.value = value; // নোডের মান (ডাটা) সংরক্ষণ করে।
        this.next = null;   // পরবর্তী নোডের রেফারেন্স (লিঙ্ক) সংরক্ষণ করে।
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value); // নতুন একটি নোড তৈরি করা হচ্ছে।
        this.head = newNode; // লিঙ্কড লিস্টের প্রথম উপাদান হিসেবে `head` সেট করা।
        this.tail = this.head; // যেহেতু লিস্টে একটিমাত্র উপাদান আছে, তাই `tail` ও `head` একই।
        this.length = 1; // লিঙ্কড লিস্টের দৈর্ঘ্য ১।
    }

    push(value) {
        const newNode = new Node(value); // নতুন একটি নোড তৈরি করা হচ্ছে।
        if (!this.head) { // যদি লিঙ্কড লিস্ট ফাঁকা থাকে (head না থাকে)।
            this.head = newNode; // নতুন নোড `head` হবে।
            this.tail = newNode; // নতুন নোড `tail` হবে।
        } else {
            this.tail.next = newNode; // আগের `tail` এর `next` প্রপার্টিতে নতুন নোড যোগ করা হচ্ছে।
            this.tail = newNode; // নতুন নোডকে `tail` হিসেবে সেট করা।
        }
        this.length++; // দৈর্ঘ্য ১ বাড়ানো হলো।
        return this; // লিঙ্কড লিস্ট অবজেক্ট রিটার্ন করে।
    }
}

let myLinkedList = new LinkedList(4); // একটি নতুন লিঙ্কড লিস্ট তৈরি, যার প্রথম নোডের মান ৪।
myLinkedList.push(10); // লিস্টের শেষে মান ১০ সহ একটি নতুন নোড যোগ করা হলো।
console.log(myLinkedList); // পুরো লিঙ্কড লিস্ট প্রিন্ট করা হচ্ছে।


