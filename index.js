function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
		const endIndex = word.length - 1 - startIndex;
		if (word[startIndex] !== word[endIndex]) {
			return false;
		}
	}

	return true;
}

/* 
  Add your pseudocode here

iterate through the string beginning at the beginning and ending at the middle.
If the letters don't match, return false. Otherwise, compare the letter we're iterating over to the corresponding letter at the end of the string.

Return true if we get to the center and all the letters match.
*/

/*
  Add written explanation of your solution here

From the beginning to the middle of the string, we iterate.
When iterating through a letter, we contrast it with the letter at the end of the string that corresponds to it.
Return false if the letters don't match.
Return true if all the letters match when we get to the center.

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
