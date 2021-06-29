class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue(){
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp.value;
  }
}






// create a queue using an array
let q = [];
q.push('first');
q.push("second");
q.push('third');
q.shift();
q.shift();
q.shift();
console.log(q);
