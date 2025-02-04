class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    insert(node) {
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    }
    delete(dataID) {
        let currentNode = this.head;
        if (currentNode && dataID === currentNode.id) {
            this.head = currentNode.next;
            return;
        }
        while (currentNode.next) {
            if (currentNode.next.data.id === dataID) {
                currentNode.next = (currentNode.next?.next) ? currentNode.next.next : null;
                this.length--;
                break;
            }
            currentNode = currentNode.next;
        }

    }
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode);
            currentNode = currentNode.next;
        }
    }
    search(dataID) {
        let currentNode = this.head;
        while (currentNode) {
            if (dataID === currentNode.data.id) {
                break;
            }
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

myList = new SinglyLinkedList();

myList.insert(new Node({id: 1, car: "Honda", year: 1999}))
myList.insert(new Node({id: 2, car: "Toyota", year: 2017}))
myList.insert(new Node({id: 3, car: "Hyundai", year: 2005}))

myList.delete(2);
// myList.traverse();

console.log(myList.search(3));

console.log("traverse below");

myList.traverse();