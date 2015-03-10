//Q1 (5 Feb 2014)
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. 
//Find the sum of all the multiples of 3 or 5 below 1000. 
var sample = [];
for (i = 1; i < 1001; i++) {
    sample.push(i);
}
//console.log(sample);
var multiples = [];
for (i = 0; i < sample.length; i++) {
    if (i % 3 === 0) {
        multiples.push(i);
    } else if ( i % 5 === 0) {
        multiples.push(i);
    }
}
//console.log(multiples);
var SumMultiples = multiples.reduce(function(a,b) {
	return a + b;
});
console.log(SumMultiples);