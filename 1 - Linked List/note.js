// Shift মেথডের ধাপসমূহ:
// -----------------------------

// ১ - লিস্ট ফাঁকা আছে কিনা চেক করা এবং ফাঁকা থাকলে undefined রিটার্ন করা।
// 2 - বর্তমান head নোডকে একটি টেম্পোরারি ভ্যারিয়েবলে সংরক্ষণ করা।
// 3 - head-কে পরবর্তী নোডে পরিবর্তন করা।
// 4 - লিস্টের দৈর্ঘ্য ১ কমানো।
// 5 - যদি লিস্টের দৈর্ঘ্য ০ হয়, তাহলে tail-কে null করা।
// 6 - পুরানো head নোডের পয়েন্টার (next) মুছে ফেলা।
// 7 - পুরানো head নোড রিটার্ন করা।
// নোট: এই ধাপগুলো লিংকড লিস্টের প্রথম নোড সরানোর জন্য একে একে অনুসরণ করতে হয়। 😊


class Node {
    constructor(value) {
        this.value = value; // নোডে স্টোর করা ভ্যালু সেট করে
        this.next = null;   // নোডের "next" পয়েন্টার ডিফল্টে null থাকে
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value); // নতুন নোড তৈরি করে প্রাথমিক ভ্যালু দিয়ে
        this.head = newNode;            // লিঙ্কড লিস্টের শুরুতে এই নোড সেট করে
        this.tail = this.head;          // যেহেতু এটি প্রথম নোড, এটি টেইলও হয়
        this.length = 1;                // লিঙ্কড লিস্টের লেন্থ শুরুতে ১
    }

    shift(value) {
        if (!this.head) return undefined; 
        // যদি লিঙ্কড লিস্ট ফাঁকা থাকে (head=null), তাহলে undefined রিটার্ন করে

        let temp = this.head; 
        // head নোডকে টেম্পোরারি ভ্যারিয়েবলে রাখে (কারণ পরে রিটার্ন করতে হবে)

        this.head = this.head.next; 
        // head-কে পরবর্তী নোডে আপডেট করে (পুরানো হেড সরিয়ে দেয়)

        this.length--; 
        // লিঙ্কড লিস্টের দৈর্ঘ্য ১ কমায়

        if (this.length === 0) { 
            this.tail = null; 
            // যদি লিঙ্কড লিস্ট ফাঁকা হয়ে যায়, তাহলে tail-ও null করে
        }

        temp.next = null; 
        // পুরানো head-এর "next" পয়েন্টার null করে (লিঙ্কড লিস্ট থেকে পুরোপুরি আলাদা করতে)

        return temp; 
        // পুরানো head নোড রিটার্ন করে
    }
}

let myLinkedList = new LinkedList(10); 
// লিঙ্কড লিস্ট তৈরি করে যার শুরুতে ভ্যালু ১০ আছে

console.log(myLinkedList); 
// পুরো লিঙ্কড লিস্ট দেখায় (head, tail, এবং length সহ)

myLinkedList.shift(); 
// লিস্টের প্রথম নোড সরিয়ে ফেলে এবং পুরানো head নোড রিটার্ন করে
