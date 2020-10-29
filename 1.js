/*
Palindrome
*/

function polindrome(data) {
  let newStr = "";
  for (let i = data.length - 1; i >= 0; i--) {
    newStr += data[i];
  }
  if (data === newStr) {
    return true;
  } else {
    return false;
  }
}

console.log(polindrome("bambang")); // false
console.log(polindrome("mati")); // false
console.log(polindrome("racecar")); // true
console.log(polindrome("eye")); // true
console.log(polindrome("level")); // true
