//Q2 (5 Feb 2014)
//Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
var sumEvens = 0;
var fib = [0, 1];
for (var i = 2; i < 34; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
      if(fib[i] % 2 == 0) {
        sumEvens += fib[i]
      };
}

console.log(fib);
console.log(sumEvens);