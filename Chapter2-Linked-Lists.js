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
  
  //create two new linked lists
  let lowerHalf = new LinkedList;
  let higherHalf = new LinkedList;
  
  //go though LL and separate values smaller than val and larger than val;
  while (node !== null) {
    if (node.value < val) {
      lowerHalf.addToTail(node.value);
    }
    if (node.value >= val) {
      higherHalf.addToTail(node.value);
    }
    node = node.next;
  }
  
  //point lowerHalf tail to the head of the higherHalf linked list
  lowerHalf.tail.next = higherHalf.head;
  //maintain the same size
  lowerHalf.size = this.size;
  //reassign the tail
  lowerHalf.tail = higherHalf.tail;

  return lowerHalf;

}

// 2.5 Sum Lists 
let sumLists = function(list1, list2) {

  let getSequenceReversed = function(list) {
    let arr = []; 
    
    let node = list.head;
    let size = list.size;

    while (size > 0) {
      arr[size - 1] = node.value;
      size--;
      node = node.next;
    }

    return Number(arr.join(''));
  };

  let sum = getSequenceReversed(list1) + getSequenceReversed(list2);
  let sumStr = sum.toString().split('');
  
  let sumsLL = new LinkedList;
  for (let i = sumStr.length - 1; i >= 0; i--) {
    sumsLL.addToTail(sumStr[i]);
  }

  return sumsLL;
}

// For forward order  replace getSequenceReversed function with function below;

// let getSequence = function(list) {
//   let arr = [];
//   let node = list.head;
//   let size = list.size;
//   let count = 0;

//   while (count < size) {
//     arr.push(node.value);
//     count++;
//     node = node.next; 
//   }

//   return Number(arr.join(''));
// }






let Node = function(value) {
  let node = {};
  node.value = value;
  node.next = null;

  return node;
}

let L1 = new LinkedList();
let L2 = new LinkedList();


L1.addToTail(9);
L1.addToTail(8);
L1.addToTail(7);

L2.addToTail(6);
L2.addToTail(8);
L2.addToTail(5);

console.log(sumLists(L1, L2));
