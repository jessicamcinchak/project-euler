//Q3 (12 Feb 2014)
//The prime factors of 13195 are 5, 7, 13 and 29.  What is the largest prime factor of the number 600851475143?
var i = 2;
num = 600851475143;
while (i <= num) {
    if (num % i == 0) {
        num = num/i;
    }
    else {
        i++
    }
}
console.log(i);