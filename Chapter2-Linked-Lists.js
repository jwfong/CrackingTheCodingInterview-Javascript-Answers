let LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  let newTail = Node(value);

  if (!this.head) {
    this.head = newTail;
  }
  
  if (this.tail) {
    this.tail.next = newTail
  }

  this.tail = newTail;
};

LinkedList.prototype.removeHead = function() {
  if (this.head === null) {
    return null;
  }
  
  let currentHead = this.head;
  this.head = this.head.next;

  return currentHead.value;
};

LinkedList.prototype.contains = function (target) {
  let node = this.head;

  while (node) {
    if (node.value === target) {
      return true;
    }
    node = node.next;
  }

  return false;
};

//2.1 Remove Duplicates 

LinkedList.prototype.removeDuplicates = function() {
  let node = this.head;
  let previousNode = null;
  let uniqueVals = new Set();

  while (node !== null) {
    if (uniqueVals.has(node.value)) {
      previousNode.next = node.next;
    } else {
      uniqueVals.add(node.value);
      previousNode = node;
    }
    node = node.next;
  }
  
  return uniqueVals.values();
}


let Node = function(value) {
  let node = {};
  node.value = value;
  node.next = null;

  return node;
}

let newLL = new LinkedList();

newLL.addToTail(1);
newLL.addToTail(2);
newLL.addToTail(10);
newLL.addToTail(3);
newLL.addToTail(4);
newLL.addToTail(1);
newLL.addToTail(1);
newLL.addToTail(1);
newLL.addToTail(5);
newLL.addToTail(6);
newLL.addToTail(7);
newLL.addToTail(8);
newLL.addToTail(2);
newLL.addToTail(9);


