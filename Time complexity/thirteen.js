const numbers = [1, 2, 3, 4, 5, 6]

function getTotal (arr) {
  // Declares variable - let total -> O(1)
  let total = 0
  // Declares variable - let i -> O(1)
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

// Big O space complexity => O(1) + O(1) => O(2) = O(1) Constant
console.log(getTotal(numbers)); // OUTPUT => 21