//Q7 (26 March 2014)
//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. 
//What is the 10001st prime number?
var currentPrime = 0;
var count = 0;
var findPrime = 10001;

for (i = 3; count < findPrime - 1; i++) {
    if (i % 2 != 1) {
        continue;
    }
    var d = 3;
    var x = Math.sqrt(i);
    while ((i % d != 0) && d < x) {
        d += 2;
    }
    if (((i % d == 0 && i != d) * 1) == 0) {
        currentPrime = i;
        count++;
    }
}
console.log(currentPrime);