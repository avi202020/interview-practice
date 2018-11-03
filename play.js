function palindrome(string) {
  const chars = string.replace(/[^\w]/g, "").toLowerCase().split("")

  return chars.every((char, i) => {
    return char === chars[chars.length - 1 - i];
  });
}

console.log(fasterPalindrome("race car racecara!"));


function fasterPalindrome(string) {
  const chars = string.replace(/[^\w]/g, "").toLowerCase().split("")
  let palindrome = true;
  let start = 0;
  let end = chars.length - 1;

  while (start <= chars.length / 2) {
    if (chars[start] !== chars[end]) {
      palindrome = false;
      break;
    }
    start++;
    end--;
  }

  return palindrome;
}
