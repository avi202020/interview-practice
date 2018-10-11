// checks to see if a string is a palindrome

function palindrome(string) {
  let noWhiteSpace = string.replace(/\s/g, "")
  let i = 0
  let k = noWhiteSpace.length - 1
  let palindrome = true

  while (i < noWhiteSpace.length / 2) {
    if (noWhiteSpace[i] !== noWhiteSpace[k]) {
      palindrome = false
    }
    i++
    k--
  }

  return palindrome
}
