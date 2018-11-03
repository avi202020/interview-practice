// checks to see if a string is a palindrome

function palindrome(string) {
  let chars = string.toLowerCase().replace(/[^\w]/g, "");
  let start = 0;
  let end = chars.length - 1;
  let palindrome = true;

  while (start < chars.length / 2) {
    if (chars[start] !== chars[end]) {
      palindrome = false;
      break;
    }
    start++;
    end--;
  }
  return palindrome;
}

function reducePalindrome(string) {
  let chars = string.toLowerCase().replace(/[^\w]/g, "");
  let reverse = chars.split("").reduce((acc, current) => current + acc);
  return chars === reverse
}
