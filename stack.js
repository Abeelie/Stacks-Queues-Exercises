/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    /** Creating a new node object with keyword new and passing the required
     *  parameter val
    */
     const newNode = new Node(val);
     /** If there is no data in the stack which is represented by this.size
      *  then assign the first with the newNode and the last with the newNode
      *  Else the this.first.next is assigned the newNode and 
      *  the this.first is assigned the newnode as well
      *  Finally, add on to the size of the stack to reflect the push
      */
     if(this.size === 0){
       this.first = newNode;
       this.last = newNode;
     }else {
       this.first.next = newNode;
       this.first = newNode;
     }
     this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    /** If the stack is empty throw a new Error Stack is empty*/
    if(this.size === 0) throw new Error("Stack is empty");
    /** Store the top value in the stack in the removedTopValue variable*/
    const removedTopValue = this.first.val;
    /** If the size of the stack is 1 then the last is set to null and the 
     *  first is set to null. The size is set to zero and return the 
     *  removedTopValue
    */
    if (this.size === 1) {
      this.last = null;
      this.first = null;
      this.size = 0;
      return removedTopValue;
    }else {
      /** Subtract 1 from the the size to reflect the removed value and return
       *  the removedTopValue
      */
      this.size -= 1;
      return removedTopValue;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
     /** If the stack is empty throw a new Error Stack is empty*/
     if(this.size === 0) throw new Error("Stack is empty");
     /** The stack is LIFO which means last in first out. Return the
      *  first value.
      */
     return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
      /** If the stack is empty return true or false*/
      return this.size === 0 ? true : false;
  }
}

module.exports = Stack;
