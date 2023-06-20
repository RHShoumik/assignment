// 3. Numbers:

// a.Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.

let primeCheck = (x) => {
    let isPrime = true;
    if (x === 1) {
        console.log("1 neither prime nor composite number");
    }
    else if (x > 1) {
        for (let i = 2; i < x; i++) {
            if (x % i == 0)
                isPrime = false;
            break;
        }
        if (isPrime) {
            console.log(`${x} is a Prime Number`);
        } else {
            console.log(`${x} is NOT a Prime Number`);
        }
    }
    else {
        console.log("Please enter a positive number");
    }
}

// b.Implement the function to check if a given positive integer is a prime number.

let result = primeCheck(-112);