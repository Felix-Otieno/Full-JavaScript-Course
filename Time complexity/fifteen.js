function fibonacciRecursive(num) {
    // exit conditions, return if it is 0 or 1
    if (num === 0) return 0
    else if (num === 1) return 1
    // else, call the function recursively
    else return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2)
  }
  
  console.log(fibonacciRecursive(4));
  // OUTPUT => 3