/** Logic Challenge - Number Palindrome */
function angkaPalindrome(num){
    while (isPalindrome((num = 1 + num).toString())===false) {
    }
    return num;
  }
  
  var isPalindrome = function(str) {
      var strLen = str.length;
      if (strLen === 0 || strLen === 1) {
          return true;
      }
  
      if (str[0] === str[strLen - 1]) {
          return isPalindrome( str.slice(1, strLen - 1) );
      }
  
      return false;
  };
  
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001