// 2.Math Object:

// a.Write a JavaScript function that takes an array of numbers as input and returns the square root of
//  the sum of squares of all the numbers.Use the Math object to perform the necessary calculations.

let squareRoot = (x) => {
    let SumOfSqure = 0;
    x.map(item => {
        SumOfSqure = SumOfSqure + Math.pow(item, 2)
    })
    return Math.sqrt(SumOfSqure);
}


//     b.Implement the function to display the square root of the sum of squares for an array of numbers.
let result = squareRoot([2, 3, 4]);
console.log(result);