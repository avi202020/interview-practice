// checks to see if a string is a palindrome

function palindrome(string) {
  let chars = string.toLowerCase().replace(/\s/g, "");
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
