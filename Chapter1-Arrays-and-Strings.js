//Array and strings

//1.1 is Unique;
function isUnique(str) {
  //error checking
  if (typeof(str) !== 'string') {return 'input must be a string'};
  //creating a new Set will contain the unique characters of the initial str;
  let charSet = new Set(str);
  // compare the size vs length
  return charSet.size === str.length ? true : false;
}


//1.2 Check permutation

function checkPermutation(str1, str2) {
  //error check
  if (str1.length !== str2.length) {
    return false;
  }
  //sort both strings
  let arr1 = [...str1].sort();
  let arr2 = [...str2].sort();
  
  //iterate and compare sorted arrays
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

//1.3 URLify

function URLify(str) {
  return str.trim().split(' ').join('%20')
}

//1.4 Palindrome Permutation

function palindromePermutation(str) {
  str = str.toLowerCase().split(' ').join('');
  let count = [];
  let oddCount = 0; 
  
  //get count of unique letters 
  for (let letter of str) {
    if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }
  //check count of letter frequencies
  for (let item in count) {
    if (count[item] % 2 === 0) {
      continue;
    } else {
      oddCount++;
    }
  }
  //more than 1 odd count will result in false
  return oddCount > 1 ? false : true;
}

//1.5 One Away

function oneAway(str1, str2) {

  if(Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  
  let s1 = str1.length > str2.length ? str1 : str2;
  let s2 = str1.length > str2.length ? str2 : str1;
  
  let idx1 = 0;
  let idx2 = 0;
  let difference = false

  while (idx1 < s1.length && idx2 < s2.length) {
    if (s1[idx1] !== s2[idx2]) {
     
      if (difference) {
        return false;
      }
      difference = true;
      
      if (s1.length === s2.length) {
        idx1++;
      }

    } else {
      idx1++;
    }
    idx2++;
  }
  
  return true;
}


//1.6 String Compression

function stringCompression(str) {
  let holder = [];
  let currentCount = 0;
  
  for (let i = 0; i < str.length; i++) {
    currentCount++;
    
    if (str[i] !== str[i+1]) {
      holder.push(str[i]);
      holder.push(currentCount);
      currentCount = 0
    }
  }
  
  let newStr = holder.join('');
  
  return str.length < newStr.length ? str : newStr;
}


//1.7 Rotate Matrix

function rotateMatrix(arr) {
  if(arr.length < 2) {
    return arr;
  }

  let newMatrix = [];
  let count = 0;
  let length = arr.length;

  while (count < length) {
    let tempArr = [];
    for (let i = length-1; i >= 0; i--) {
      tempArr.push(arr[i][count]);
    }
    count++;
    newMatrix.push(tempArr);
  }

  return newMatrix;
}

// Rotate matrix in place - constant space;
function rotateMatrixInPlace(matrix) {
  if (matrix.length < 2 || matrix.length !== matrix[0].length) {
    return null;
  }

  let length = matrix.length;

  for (let layer = 0; layer < length/2; layer++) {
    let first = layer;
    let last = length - 1 - layer;

    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i];
      matrix[first][i] = matrix[last-offset][first];
      matrix[last-offset][first] = matrix[last][last-offset];
      matrix[last][last-offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }
  return matrix;
}


//1.8 Zero Matrix;

function zeroMatrix(matrix) {
  let rows = [];
  let columns = [];

  //find the rows and the columns that contain zeros
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (rows[i] === undefined) {
         rows[i] = true;
         columns[j] = true;
        }
      }
    }
  }
  
  // set rows that contain zeros to zero
  for (let i = 0; i < rows.length; i++) {
    if (rows[i]) {
      nullifyRow(matrix, i);
    }
  }
  
  //let columns that contain zeros to zero
  for (let j = 0; j < columns.length; j++) {
    if (columns[j]) {
      nullifyColumn(matrix, j);
    }
  }
  
  
  function nullifyRow(matrix, row) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[row][j] = 0
    }
  }
  
  function nullifyColumn(matrix, column) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[i][column] = 0
    }
  }

  return matrix;
}

// that was stupidly annoying....

//1.9 String rotation

function stringRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  //find position of the first letter of the first string in string 2
  let start = str1[0];
  let findIdx = str2.indexOf(start);

  //take last half of string in relation to the index
  let subStrStart = str2.slice(findIdx);
  //take first half of string in relation to the index
  let subStrEnd = str2.slice(0, findIdx);
  
  //concatenate string and check against first string
  return subStrStart + subStrEnd === str1 ? true : false;
}























