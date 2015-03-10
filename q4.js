//Q4 (19 Feb 2014)
//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.  
//Find the largest palindrome made from the product of two 3-digit numbers.
function isPalindrome(str) {
	var len = str.length - 1;
	for (var i = 0; i < len; i++) {
    	if(str[i] === str[len - i]) {
         	continue;
     	} else {
         	return false;
     	} 
 	} 
 	return true;
}

var min = 100;
var max = 999;
var product = 0;
var palindrome = 0; 
for (i = min; i <= max; i++) {
	for (j = min; j <= max; j++) { 
  		product = i * j;
  		if (isPalindrome(product.toString())) {   
   			//ternary - if true evaluate to first statement and if false evaluate to second
    		palindrome = palindrome > product ? palindrome : product;
  		}
 	}
}
console.log(palindrome);