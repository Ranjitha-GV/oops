class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}
class Queue 
{
    constructor() 
    {
        this.tail = null;
        this.head = null;

    }


    enqueue(item) {
        let node = new Node(item)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }


    dequeue() {
        if (!this.head) {
            return 'No item'
        } else {
            let itemToPop = this.head
            this.head = this.head.next
            console.log(itemToPop);
            return itemToPop
        }
    }

    len() {
        let current, counter
        [current, counter] = [this.head, 0]
        while (current) {
            counter++
            current = current.next
        }
        return counter;
    }

    peek() {
        if (this.head) {
            return this.head.data
        } else {
            return 'Empty'
        }
    }

    isEmpty() {
        return this.len() < 1;
    }

    printQ() {
        var arr=[];
        var curr = this.head;
        while (curr) 
        {
           arr.push(curr.data);
            curr = curr.next;  
        }
        console.log(arr)
        return arr;
    }
}
module.exports = Queue;