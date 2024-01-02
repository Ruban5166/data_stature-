function fibonacci(n) {
    // Initialize an array with the first two numbers of the Fibonacci series
    let fibSeries = [0, 1];
    
    // Continue adding Fibonacci numbers to the array until it reaches the desired length (n)
    while (fibSeries.length < n) {
        console.log(fibSeries.length)
        // Calculate the next Fibonacci number by adding the last two numbers in the array
        fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);

        console.log(fibSeries.length)
        console.log(fibSeries);
    }

    // Return the generated Fibonacci series
    return fibSeries;
}

// Example: Generate the first 10 Fibonacci numbers
var n = 10;
var result = fibonacci(n);

// Print the result to the console
console.log(result);
