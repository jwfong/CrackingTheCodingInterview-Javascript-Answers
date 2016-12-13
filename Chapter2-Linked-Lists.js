function LinkedList() {
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

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


//2.1 Remove Duplicates 
LinkedList.prototype.removeDuplicates = function() {
  let node = this.head;
  let previousNode = null;
  let uniqueVals = new Set();

  while (node !== null) {
    if (uniqueVals.has(node.value)) {
      previousNode.next = node.next;
      this.size--;
    } else {
      uniqueVals.add(node.value);
      previousNode = node;
    }
    node = node.next;
  }
  
  return this;
}
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


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
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////



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
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


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
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


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
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


// 2.6.1 Palindrome - reverse and compare
LinkedList.prototype.isPalindrome1 = function() {
  let node = this.head;
  let reversed = reverseAndClone(node);
  return isEqual(node, reversed)
}

let reverseAndClone = function(inputLL) {
  let node = inputLL;
  let head = null;
  while (node !== null) {
    let n = Node(node.value);
    n.next = head;
    head = n;
    node = node.next;
  }
  return head;
}

let isEqual = function(list1, list2) {
  while (list1 !== null && list2 !== null) {
    if (list1.value !== list2.value) {
      return false;
    }
    list1 = list1.next;
    list2 = list2.next;
  }
  return list1 === null && list2 === null;
}
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


// 2.6.2 Palindrome - iterative approach w/ a stack
LinkedList.prototype.isPalindrome2 = function() {
  let fast = this.head;
  let slow = this.head;
  let stack = [];
  
  while (fast !== null & slow !== null) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }
  //if the LL has an odd number of nodes, skipped the middle value
  if (fast !== null) {
    slow = slow.next;
  }

  while (slow !== null) {
    let popped = stack.pop();
    console.log(popped);
    if (popped !== slow.value) {
      return false;
    }
    slow = slow.next;
  }

  return true;
}
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


//2.6.3 Palindrome FUCKING RECURSIVE APPROACH 
LinkedList.prototype.isPalindrome3 = function() {
  let length = this.size;
  let node = this.head;
  let p = isPalindromeRecurse(this.head, length);

  return p.result;
}

function isPalindromeRecurse(head, size) {
  if (head === null || size <= 0) {
    return new Result(head, true);
  } else if (size === 1) {
    return new Result(head.next, true);
  }

  let res = isPalindromeRecurse(head.next, size - 2);

  if (!res.result || res.node === null) {
    return res;
  }

  res.result = (head.value === res.node.value);
  res.node = res.node.next;

  return res;
}

function Result(currentHead, check) {
  let obj = {};
  obj.node = currentHead;
  obj.result = check;
  
  return obj;
}
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// 2.7 Intersection // not yet tested
function hasIntersection(list1, list2) {
  let head1 = list1.head;
  let head2 = list2.head;  

  let longer = list1.size < list2.size ? head2 : head1;
  let shorter = list1.size < list2.size ? head1 : head2;
  //check the tails by reference and not by value
  if (list1.tail !== list2.tail) {
    return false;
  }

  longer = getKthNode(longer, Math.abs(longer.size - shorter.size))
  
  while (shorter.head !== longer.head) {
    shorter = shorter.next;
    longer = longer.next
  }
  
  return longer; //or shorter
}

function getKthNode(LL, k) {
  let node = LL;

  while (k > 0 && node !== null) {
    node = node.next;
    k--;
  }

  return node;
}


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

//2.8 loop detection
LinkedList.prototype.loopDetection = function() {
  let slower = this.head;
  let faster = this.head;

  while (faster !== null || faster.next !== null) {
    slower = slower.next;
    faster = faster.next.next

    if (slower === faster) {
      break; 
    }
  }

  if (faster === null || faster.next === null) {
    return null;
  }
  
  slower = this.head;

  while (slower !== faster) {
    slower = slower.next;
    faster = faster.next;
  }
  
  return faster;
}



// used to create new node objects
let Node = function(value) {
  let node = {};
  node.value = value;
  node.next = null;

  return node;
}

let L1 = new LinkedList();



L1.addToTail(1);
L1.addToTail(2);
L1.addToTail(3);
L1.addToTail(4);
L1.addToTail(5);
L1.addToTail(6);
L1.addToTail(5);
L1.addToTail(4);
L1.addToTail(3);
L1.addToTail(2);
L1.addToTail(1);
