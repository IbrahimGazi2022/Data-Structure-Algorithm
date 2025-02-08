// Set Method-এর ধাপসমূহ:
// -----------------------------

// ১ - ইনডেক্স যাচাই করা → যদি ইনডেক্স ০-এর কম বা লিস্টের দৈর্ঘ্যের সমান বা বেশি হয়, তাহলে false রিটার্ন করা।
// 2 - নোড খোঁজা → get(index) মেথড ব্যবহার করে নির্দিষ্ট ইনডেক্সের নোড খুঁজে বের করা।
// 3 - নতুন ভ্যালু সেট করা → যদি নোড পাওয়া যায়, তাহলে তার মান (value) নতুন ভ্যালুতে আপডেট করা।
// 4 - ফলাফল রিটার্ন করা → সফল হলে true রিটার্ন করা, আর যদি নোড না পাওয়া যায় তাহলে false রিটার্ন করা।


class Node {  
    constructor(value) {
        this.value = value; // নতুন নোডের মান সেট করা
        this.next = null;   // পরবর্তী নোডের লিংক শুরুতে null রাখা
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value); // নতুন Node তৈরি করা
        this.head = newNode; // head সেট করা
        this.tail = this.head; // tail ও একই নোডে পয়েন্ট করা
        this.length = 1; // লিস্টের দৈর্ঘ্য 1 সেট করা
    }

    push(value) {
        const newNode = new Node(value); // নতুন নোড তৈরি
        if (!this.head) { // যদি লিস্ট ফাঁকা থাকে
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // শেষ নোডের next আপডেট করা
            this.tail = newNode; // tail নতুন নোডে সেট করা
        }
        this.length++; // লিস্টের দৈর্ঘ্য ১ বাড়ানো
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null; // index সীমার বাইরে হলে null রিটার্ন

        let temp = this.head; // head থেকে শুরু
        for (let i = 0; i < index; i++) {
            temp = temp.next; // index পর্যন্ত লুপ চালিয়ে temp আপডেট
        }

        return temp; // নির্দিষ্ট index-এর নোড রিটার্ন
    }

    set(index, value) {
        let temp = this.get(index); // নির্দিষ্ট ইনডেক্সের নোড খুঁজে বের করা
        if (temp) {
            temp.value = value; // নোডের মান আপডেট করা
            return true;
        }
        return false; // যদি ইনডেক্স খুঁজে না পাওয়া যায়
    }
}

// লিংকড লিস্ট তৈরি করা
let myLinkedList = new LinkedList(10);
myLinkedList.push(20);
myLinkedList.push(30);
myLinkedList.push(40);

console.log("Before set:", myLinkedList.get(2)); // 30 দেখাবে

myLinkedList.set(2, 99); // ইনডেক্স 2-এর মান পরিবর্তন করা

console.log("After set:", myLinkedList.get(2)); // 99 দেখাবে
