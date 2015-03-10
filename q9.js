//Q9 (8 Apr 2014)
//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2. 
//There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.
function pythag_triples_product() {
    var a = 1;
    var b = a + 1;
    var c;
    var product;
    
    while(a < 1000) {
        while(b < 1000 && b > a) {
            c = 1000 - a - b;
            if (c < b) {
                break;
            }
            if(Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ) {
                console.log(a, b, c);
                return product = a * b * c;
            }
            b++;
        }
        a++;
        b = a + 1;
    }
}