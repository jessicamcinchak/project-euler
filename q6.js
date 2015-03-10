//Q6 (19 Mar 2014)
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
function anything(maxNum, power) {
    var sumSquares = 0;
    var squareSum = 0;
    for(i = 1; i <= maxNum; i++) {
        sumSquares += Math.pow(i, power);
        squareSum += i;
        }
    squareSum = Math.pow(squareSum, power);
        return squareSum - sumSquares;
};
console.log(anything(100, 2));

//or alternatively,
function sumSquares(maxNum) {
    var squaresumtotal = 0;
    for(i = 1; i <= maxNum; i++) {
        squaresumtotal += (i*i);
    } return squaresumtotal;
};
 
function squareSums(maxNum) {
    var sumsquaretotal = 0;
    for(j = 1; j <= maxNum; j++){
        sumsquaretotal += j;
    } return (sumsquaretotal * sumsquaretotal);
}; 
console.log(squareSums(100) - sumSquares(100));