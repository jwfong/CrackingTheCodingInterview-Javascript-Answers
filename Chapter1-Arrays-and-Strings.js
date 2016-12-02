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

















