// Get মেথডের ধাপসমূহ:
// -----------------------------

// ১ - ইনডেক্সটি বৈধ কিনা চেক করা (যদি ইনডেক্স 0 থেকে ছোট বা length থেকে বড় হয়, তাহলে null রিটার্ন করা)।
// 2 - head নোডকে একটি টেম্পোরারি ভ্যারিয়েবলে (temp) সংরক্ষণ করা।
// 3 - একটি for লুপ চালিয়ে ইনডেক্স অনুযায়ী নির্দিষ্ট নোড পর্যন্ত পৌঁছানো।
// 4 - temp কে প্রতিবার পরবর্তী (next) নোডে আপডেট করা।
// 5 - নির্দিষ্ট ইনডেক্সে পৌঁছে গেলে সেই নোডটি রিটার্ন করা।


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
}

// Linked List তৈরি ও ডাটা যোগ করা
let myLinkedList = new LinkedList(10); // নতুন Linked List তৈরি, যেখানে প্রথম নোড 10

myLinkedList.push(1); // 1 যুক্ত করা
myLinkedList.push(2); // 2 যুক্ত করা
myLinkedList.push(3); // 3 যুক্ত করা

// নির্দিষ্ট index-এর নোড খোঁজা
console.log(myLinkedList.get(2)); // index 2-এ থাকা নোড রিটার্ন করবে
