class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--
    return current;
  }
  shift() {
    if (this.length === 0) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++
    return this;
  }
  get(index){
    if(index < 0 || index > this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while(counter != index){
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index,value){
    let foundNode = this.get(index);
    if(foundNode){
      foundNode.val = value;
      return true
    }
    return false;
  }
  insert(index,value){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return this.push(value);
    if(index === 0) return this.unShift(value);
    let foundNode = this.get(index-1);
    let newNode = new Node(value);
    let foundNodeOldNext  = foundNode.next;
    foundNode.next = newNode;
    newNode.next = foundNodeOldNext;
    this.length++;
    return true;
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("goodbye");
list.push('hey');
console.log(list);