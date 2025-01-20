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

        while (current.next) { // যতক্ষণ পর্যন্ত current.next (অর্থাৎ current নোডের পরবর্তী নোড) বিদ্যমান থাকে, লুপ চলবে। 
                               // অর্থাৎ, এই লুপটি চলতে থাকবে যতক্ষণ না আমরা শেষ নোডে পৌঁছাই।
            previous = current; //previous এর মান আপডেট করে current-কে ধরে। current-এর আগের নোডকে চিহ্নিত করে রাখে।
            current = current.next; // current-কে তার পরবর্তী নোডে এগিয়ে নিয়ে যায়। এটি current-কে ক্রমান্বয়ে শেষ নোড পর্যন্ত নিয়ে যায়।
        }

        this.tail = previous; //এর মান আপডেট করে previous করা হচ্ছে। previous হলো সেই নোড যা লুপ শেষ হওয়ার পর শেষের আগের নোড হয়ে দাঁড়ায়।
        this.tail.next = null; // নতুন tail নোডের পরবর্তী মানকে null সেট করা হচ্ছে।
        this.length--; // লিঙ্কড লিস্টের দৈর্ঘ্য (length) ১ কমিয়ে দেওয়া হচ্ছে।

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