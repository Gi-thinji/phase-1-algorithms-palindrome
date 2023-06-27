function isPalindrome(word) {
  // Write your algorithm here
  const originalArray =  word.split("")
  const reverseArray = []

  for(let i=originalArray.length-1;i>=0;i--){
    reverseArray.push(originalArray[i])
  }
  reverseArray.join("")
  
  if (word === reverseArray.join('')){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  1. Take in a string
  2. Split the string into individual characters/elements in an array
  3. Create an empty array to hold reversed elements
  4. Reverse order of original array using a loop
  5. Assign reserved array to the empty array
  6. Join characters/elements of reversed element into a string
  7. Compare reversed string to original string.
  8. If the strngs are the same, return true.
  9. If they are different return false.
*/

/*
  Add written explanation of your solution here
  This program takes in a string reverses the order of its characters and compares it to the original string in order to determine if a word is a palindrome or not.
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

//isPalindrome("south")