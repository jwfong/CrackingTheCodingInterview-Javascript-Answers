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