let LinkedList = function() {
  this.head = null;
  this.tail = null;
  //added before 2.3
  this.size = 0;
};

LinkedList.prototype.addToTail = function(value) {
  let newTail = Node(value);
  // increase size everytime a node is added
  this.size++;

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
  //decrease size whenever head is removed
  this.size--;

  
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


//2.1 Return Kth to Last O(n) time O(n) space
LinkedList.prototype.kthToLast = function(k) {
  let node = this.head;
  //find size
  let size = 0;
  let hash = [];
  let nodePosition = size - k;
  
  while (node !== null) {
    size++;
    hash.push(node.value);
    node = node.next;
  }
  return hash[nodePosition];
  
  ////////// code below could be used to achieve O(1) space //////////

  // let traverseCount = 0;
  // node = this.head;
  // while (traverseCount !== nodePosition) {
  //   node = node.next;
  //   traverseCount++;
  // }

  // return node.value;
}

// 2.3 Delete Middle Node
// added size property to linked list
// seemed to be easier than finding size every time
LinkedList.prototype.deleteMiddleNode = function() {
  let node = this.head;
  let middle = Math.ceil(this.size/2);
  let count = 1;
  while (count !== middle - 1) {
    count++;
    node = node.next
  }
  let temp = node.next;
  node.next = node.next.next;
  this.size--;

  // I chose to return the value being remove 
  return temp;
}


// LinkedList.prototype.delete = function(val) {
//   let node = this.head;

//   while (node !== null) {
//     if (node.next.value === val) {
//       node.next = node.next.next;
//       this.size--;
//       return;
//     }
//     node = node.next;
//   }
// }

// 2.4 Partition 

LinkedList.prototype.partition = function(val) {
  let node = this.head;

  let lowerHalf = new LinkedList;
  let higherHalf = new LinkedList;

  while (node !== null) {
    if (node.value < val) {
      lowerHalf.addToTail(node.value);
    }
    if (node.value >= val) {
      higherHalf.addToTail(node.value);
    }
    node = node.next;
  }
  
  lowerHalf.tail.next = higherHalf.head;
  lowerHalf.size = this.size;
  lowerHalf.tail = higherHalf.tail;
  
  return lowerHalf;

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
newLL.addToTail(11);
newLL.addToTail(100);
newLL.addToTail(12);
newLL.addToTail(5);
newLL.addToTail(6);
newLL.addToTail(7);
newLL.addToTail(8);
newLL.addToTail(2);
newLL.addToTail(9);


