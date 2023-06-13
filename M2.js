// You have an array like “ var x = [ 10, 20, 30] “ 
// Now sum all those items using for loop. The sum Result is 60.

var x = [ 10, 20, 30] ;
var  result = 0;

for(var i= 0; i<x.length; i++ ){
    result += x[i];
}
console.log(result);
