//Stack 
function Stack() {
  this._storage = {};
  this._size = 0;
}

Stack.prototype.push = function(val) {
    this._storage[this._size] = val;
    this._size++;
};

Stack.prototype.pop = function() {
  if (this._size === 0) {
    return null;
  }

  this._size--;
  let result = this._storage[this._size];
  delete this._storage[this._size];

  return result;
};


Stack.prototype.peek = function() {
  if (this._size > 0) {
    return this._storage[this._size -1];
  }
  return null;
};

Stack.prototype.isEmpty = function() {
  return this._size === 0;
};


// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);

function Queue() {
  this._storage = {};
  this._head = 0;
  this._tail = 0; 
}

Queue.prototype.add = function(item) {
  this._storage[this._tail] = item;
  this._tail++;
}

Queue.prototype.remove = function() {
  if (this._tail - this._head === 0) {
    return null;
  }
  let result = this._storage[this._head];
  delete this._storage[this._head]
  this._head++;
  this._tail--;
  
  return result;
}

Queue.prototype.peek = function() {
  if (this._tail - this._head === 0) {
    return null;
  }
  return this._storage[this._head];
}


Queue.prototype.isEmpty = function() {
  if (this._tail - this._head === 0) {
    return true;
  }
  return false;
}

// let queue = new Queue();
// queue.add(1);
// queue.add(2);
// queue.add(3);
// queue.add(4);
// queue.add(5);
// queue.add(6);

// 3.1 Three in one
function TripleStack() {
  this._array = [];
  this._lengths=[0, 0, 0];
}

TripleStack.prototype._getLength = function(stack) {
  return this._lengths[stack-1];
}

TripleStack.prototype.push = function(stack, value) {
  let idx = this._getLength(stack) * 3 + stack - 1;
  this._array[idx] = value;
  this._lengths[stack-1]++;
};

TripleStack.prototype.pop = function(stack) {
  let length = this._getLength(stack-1);
  let value;
  if (length > 0) {
    let idx = (length - 1) * 3 + stack - 1;
    value = this._array[idk];
    this._array[idx] = undefined;
    this._lengths[stack-1]--;
  }
  return value;
}

TripleStack.prototype.peek = function(stack) {
  let length = this._getLength(stack);
  let value;
  if (length > 0) {
    let idx = (length -1) * 3 + stack - 1;
    value = this._array[idx];
  }
  return value;
}

TripleStack.prototype.isEmpty = function(stack) {
  return this._getLength(stack) === 0;
}


function StackMin() {
  this._storage = {};
  this._size = 0;

}

StackMin.prototype.push = function(value) {
  let min = this.min();


  this._storage[this._size] = {
    value: value,
    min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value);
  }
  this._size++
};

StackMin.prototype.pop = function() {
  if (this._size === 0) {
    return null;
  } 
  this._size--;
  let temp = this._storage[this._size];
  delete this._storage[this._size];
  return temp;
};

StackMin.prototype.min = function() {
  if (!this.isEmpty) {
    let item = this._storage[this._size-1];
    return item.min;
  }
};










  

