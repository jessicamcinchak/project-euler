//Q10 (15 Apr 2014)
//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million.
function prime(x) {
    if ( x == 1 ) { 
        return false; 
    }       
    var max_num = Math.floor(Math.sqrt(x));
        for (var i=2; i <= max_num; i++) {
            if ( x % i == 0 ) { 
                return false; 
            }
        }
        return true;
    }
    var sum_primes = 2;
    for (var i=3; i <= 2000000; i += 2) {
        if (prime(i)) { 
            sum_primes += i; 
        }
    }
console.log(sum_primes);