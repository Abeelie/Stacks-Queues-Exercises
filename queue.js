/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    /** Creating a new node object with keyword new and passing the required
     *  parameter val
    */
    const newNode = new Node(val);
    /** If there is no data in the queue which is represented by this.size
     *  then assign the first with the newNode and the last with the newNode
     *  Else the this.last.next is assigned the newNode and 
     *  the this.last is assigned the newnode val as well
     *  Finally, add on to the size of the queue to reflect the new val pushed
     */
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    }else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    /** If the queue is empty throw a new Error Queue is empty*/
    if(this.size === 0) throw new Error("Queue is empty");
    /** Store the first value in the queue in the removedFirstValue variable*/
    const removedFirstValue = this.first.val;
    /** If the queue only has one value which would be the first then 
     *  the first is set to null and the last is set to null because there are 
     *  no other values in the queue to assign to the first and last
     *  After that the size is set to zero to reflect the removed item
     *  and return the removed item
    */
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return removedFirstValue;
    }else {
      /** Else the first is set the next reference on the queue and the 
       *  and the size gets subtracted by 1 to reflect the removed value
       *  Then return the removedFirstValue
      */
      this.first = this.first.next
      this.size -= 1;
      return removedFirstValue;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
     /** If the queue is empty throw a new Error Queue is empty*/
     if(this.size === 0) throw new Error("Queue is empty");
     /** The queue is FIFO which is first in first out so the peek 
      * would return first val 
      */
     return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
     /** If the queue is empty return true or false*/
     return this.size === 0 ? true : false;
  }
}

module.exports = Queue;
