function isPalindrome(word) {
  // Write your algorithm here
  let len = word.length 
  for (let i = 0; i < len /2; i++) {
    if (word[i] !== word[len -1 -i]) {
      return false;
    } else {
      return true;
    }
  } 
}

/* 
  Add your pseudocode here
  1. declare function isPalindrome(word)
  2  len = word.length . 
  3. for (let i = 0; i < len /2; i++) 
  4. if (word[i] !== word[len -1 -i]) 
  5. return false;
  6. else return true
*/

/*
  Add written explanation of your solution here

 1. declare palindrome function
 2. set the parameter as word
 3. declare a variable which equals the length of the variable
 4. declare a for loop to loop and iterate over each array character
 5. declare an if statement to compare the first index and the last index of the array
 6.  return statements
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
