"use strict";

function countDigits(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.trunc(num / 10);
  }
  return count;
}

function isPalindrome(num) {
  // Approach1 => take reminder each time and form a new reversed number. Compare then. => rev = rev * 10 + lastDigit
  // Approach2 => convert it to string;
  // Edge Cases => '-ve' numbers not palindrome, Number ending in 0 not palindrome, Single digit always palindrome
  if (num < 0 || num % 10 === 0) return false;
  if (num < 10) return true;
  let newNum = 0;
  let originalNum = num;
  while (num > 0) {
    let lastDigit = num % 10;
    newNum = newNum * 10 + lastDigit;
    num = Math.trunc(num / 10);
  }
  return originalNum === newNum;
}
console.log(isPalindrome(78987));
