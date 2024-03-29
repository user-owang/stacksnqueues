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
    let firstNode = new Node(val);
    if (this.size === 0) {
      this.first = firstNode;
      this.last = firstNode;
    } else {
      firstNode.next = this.first;
      this.first = firstNode;
    }
    this.size += 1;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) {
      throw new Error("Stack is already empty");
    } else if (this.size === 1) {
      this.last = null;
    }
    let out = this.first["val"];
    this.first = this.first.next;
    this.size -= 1;
    return out;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first["val"];
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !Boolean(this.size);
  }
}

module.exports = Stack;
